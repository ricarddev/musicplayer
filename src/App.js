import React, {useState,useRef} from "react";

// import styles
import "./styles/app.scss";
// adding components
import Player from "./components/Player";
import Song from "./components/Song";
import Library from "./components/Library";
import Nav from "./components/Nav";
//import data
import data from "./data";


function App() {
  // ref
  const audioRef = useRef(null);
  
  
  //State
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: null,
    animationPercentatge: 0,
  });
  const [libraryStatus, setLibraryStatus] = useState(false); 
  const timeUpdateHandler =(e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    //calculate percentatge
    const roundedCurrent = Math.round(current);
    const roundedDuration = Math.round(duration);
    const animationPercentage = Math.round((roundedCurrent / roundedDuration) * 100);
    setSongInfo({...songInfo, currentTime: current, duration, animationPercentage:animationPercentage});
  };
  const songEndHandler = async () => {
    let currentIndex = songs.findIndex((song) => song.id===currentSong.id);
    await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
    if(isPlaying) audioRef.current.play();  
  }
  return (
    <div className={`App ${libraryStatus ? 'library-active' : ""}`}>
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
      <Song currentSong={currentSong}  />
      <Player setSongs={setSongs} setSongInfo={setSongInfo} songInfo={songInfo} audioRef={audioRef} setCurrentSong={setCurrentSong} currentSong={currentSong} isPlaying={isPlaying} setIsPlaying={setIsPlaying} songs={songs} />
      <Library libraryStatus={libraryStatus} isPlaying={isPlaying} songs={songs} setSongs={setSongs}setCurrentSong={setCurrentSong} audioRef={audioRef}/>
      <audio onEnded={songEndHandler} onLoadedMetadata={timeUpdateHandler} onTimeUpdate={timeUpdateHandler} ref={audioRef} src={currentSong.audio}></audio>
    </div>
  );
}

export default App;

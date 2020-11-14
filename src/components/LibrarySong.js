import React from "react";

const LibrarySong = ({songs ,setSongs, song, setCurrentSong, audioRef, isPlaying, id}) => {
    const songSelectHandler = async () => {
        await setCurrentSong(song);
        //add active state
        const newSongs = songs.map((song) => {
            if(song.id === id){
                return{
                    ...song,
                    active:true,
                };
            }else{
                return{
                    ...song,
                    active:false,
                };
            }    
        });
        setSongs(newSongs);
        if(isPlaying)audioRef.current.play(); 
    }
    return(
        <div onClick={songSelectHandler} className={`libraries-song ${song.active ? "selected" : ""}`}>
            <img src={song.cover} alt={song.name}></img> 
            <div className="song-description">
                <h3>{song.name}</h3> 
                <h4>{song.artist}</h4> 
            </div>
            
        </div>
    )
}

export default LibrarySong;
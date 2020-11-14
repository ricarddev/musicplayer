import { v4 as uuidv4 } from "uuid"

function chillHop() {
    return [
        {
            name: "Wildlife",
            cover: "https://chillhop.com/wp-content/uploads/2020/09/2899f7cc22ab12e17d0119819aac3ca9dbab46e6-1024x1024.jpg",
            artist: "Philanthrope, chromonicci",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=10263",
            color: ["#B6715B", "#875345"],
            id: uuidv4(),
            active: true, 
        },
        {
            name: "Aqueduct",
            cover: "https://chillhop.com/wp-content/uploads/2020/09/88e7eb711f8c71d87fc102e97cf91e36f692348d-1024x1024.jpg",
            artist: "Leavv",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=9923",
            color: ["#EBEBAD", "#1F5B58"],
            id: uuidv4(),
            active: false, 
        },
        {
            name: "Faces",
            cover: "https://chillhop.com/wp-content/uploads/2020/07/c50f86fb7696e5c5747e0fa2ada4fcbc2501fea7-1024x1024.jpg",
            artist: "Knowmadici",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=8554",
            color: ["#7D6581", "#CAB4B05"],
            id: uuidv4(),
            active: false, 
        },
        {
            name: "Lemon",
            cover: "https://chillhop.com/wp-content/uploads/2020/07/53eef8b1ac9bf40038b2b5dc7ca2d13fc19cf95e-1024x1024.jpg",
            artist: "Tom Dooliei",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=7977",
            color: ["#6C80A5", "#6649A4"],
            id: uuidv4(),
            active: false, 
        },
        {
            name: "Butterfly",
            cover: "https://chillhop.com/wp-content/uploads/2020/09/c209a7df7b9bc133dfff73ce86ebc3c57c2b73dd-1024x1024.jpg",
            artist: "Sleepy Fish",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=10021",
            color: ["#B0D0DB", "#40728E"],
            id: uuidv4(),
            active: false, 
        }
    ];
};

export default chillHop;
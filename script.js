// for future purpose
let login;
let music;
let aboutus;
let contactus;
let searchbar;
let searchbutton;

// masterplay/pause function
let songindex=0;
let audioElement = new Audio('songs/0.mp3');
let masterplay= document.getElementById('masterplay');
let songs=[
    {songname:"OVSKY - Time" , songpath: "songs/0.mp3" , logopath: "songslogo/0.jpg"},
    {songname:"NCT, Shiah Maisel & Too Martian - News To Me" , songpath: "songs/1.mp3" , logopath: "songslogo/1.jpg"},
    {songname:"EBEN - Promise " , songpath: "songs/2.mp3" , logopath: "songslogo/2.jpg"},
    {songname:"FROZT, Andrew A - Sleeping Till Noon " , songpath: "songs/3.mp3" , logopath: "songslogo/3.jpg"},
    {songname:"Facading - Feelings" , songpath: "songs/4.mp3" , logopath: "songslogo/4.jpg"},
    {songname:"Sam Ourt & FERGO - Love Me" , songpath: "songs/5.mp3" , logopath: "songslogo/5.jpg"},
    {songname:"Syn Cole - Melodia" , songpath: "songs/6.mp3" , logopath: "songslogo/6.jpg"},
    {songname:"Mo Falk & OVSKY - Home " , songpath: "songs/7.mp3" , logopath: "songslogo/7.jpg"}
]
masterplay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime==0){
        audioElement.play();
        document.getElementById('masterplay').src="weblogos/pause.png";
    }
    else{
        audioElement.pause();
        document.getElementById('masterplay').src="weblogos/play.png";

    }

})


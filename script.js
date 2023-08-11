console.log("Welcome to Spotify");
let songIndex = 0;

let audioElement = new Audio('song1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressbar = document.getElementById('myProgressbar');
let gif = document.getElementById('gif');

let songs = [
    {songName: "Tujhe bhula diya hai", filepath: "song/1.mp3", coverPath:"covers/1.jpg"},
    {songName: "Tujhe bhula diya hai", filepath: "song/1.mp3", coverPath:"covers/1.jpg"},
    {songName: "Tujhe bhula diya hai", filepath: "song/1.mp3", coverPath:"covers/1.jpg"},
    {songName: "Tujhe bhula diya hai", filepath: "song/1.mp3", coverPath:"covers/1.jpg"},
    {songName: "Tujhe bhula diya hai", filepath: "song/1.mp3", coverPath:"covers/1.jpg"},
    {songName: "Tujhe bhula diya hai", filepath: "song/1.mp3", coverPath:"covers/1.jpg"},
    {songName: "Tujhe bhula diya hai", filepath: "song/1.mp3", coverPath:"covers/1.jpg"},
    {songName: "Tujhe bhula diya hai", filepath: "song/1.mp3", coverPath:"covers/1.jpg"},
    {songName: "Tujhe bhula diya hai", filepath: "song/1.mp3", coverPath:"covers/1.jpg"},
    {songName: "Tujhe bhula diya hai", filepath: "song/1.mp3", coverPath:"covers/1.jpg"},
]

masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        gif.style.opacity = 0;

    }
})

myProgressbar.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    myProgressbar.value = progress;
})

myProgressbar.addEventListener('change', ())
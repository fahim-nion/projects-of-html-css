let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.querySelector(".play-pause")


song.onloadedmetadata = function(){
    progress.max = song.duration;
    progress.value = song.currentTime;
}

function playPause(){
    if(song.paused){
        song.play()
        ctrlIcon.childNodes[0].src = "./imgM/pause-svgrepo-com.svg"
    }else{
        song.pause();
        ctrlIcon.childNodes[0].src = "./imgM/video-file-2-svgrepo-com.svg"
    }
}

if (song.play()){
    setInterval(() => {
        progress.value = song.currentTime
    }, 500);
}

progress.onchange = ()=>{
    song.play();
    song.currentTime = progress.value;
    ctrlIcon.childNodes[0].src = "./imgM/pause-svgrepo-com.svg";

}
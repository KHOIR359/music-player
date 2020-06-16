document.addEventListener("DOMContentLoaded", function () {
    startplayer();
}, false);
let player;
const seek = document.getElementById('seek');

function startplayer() {
    player = document.getElementById('music_player');
    player.addEventListener('loadedmetadata', seekSet);
    player.addEventListener('loadedmetadata', visualize);
    player.addEventListener('timeupdate', seekUpdate);
    player.addEventListener('timeupdate', applyLyrics);
    seek.addEventListener('change', playerUpdate);
    player.controls = false;
    player.loop = true;
    player.volume = .1;
}

function visualize() {

}

function applyLyrics() {
     fetch('assets/lyrics/tog.json').then(r => r.json()).then(j => {
         for (const i in j) {
             if (player.currentTime > i) {
                 document.querySelector('.lyrics').innerHTML = j[i];
             }

         }
     })
}

function seekSet() {
    seek.max = player.duration;
}

function seekUpdate() {
    seek.value = player.currentTime;
}

function playerUpdate() {
    player.currentTime = seek.value;
}

function play_aud() {
    player.play();
}

function pause_aud() {
    player.pause();
}

function stop_aud() {
    player.pause();
    player.currentTime = 0;
}

function change_vol() {
    player.volume = document.getElementById("change_vol").value;
}
const audio = document.querySelector('#audio');
const btn_play_nam = document.querySelector('#btn_play_nam');
const btn_play_nu = document.querySelector('#btn_play_nu');
const btn_play_ca2 = document.querySelector('#btn_play_ca2');
const btn_play_all = document.querySelector('.music-box-toggle-btn');

let isPlay = false;
let loadSong = function (url) {
    audio.src = url;
}
btn_play_nam.onclick = function () {
    var url = '../music/nam.mp3';
    if (isPlay) {
        audio.pause();
    }
    else {
        loadSong(url);
        audio.play();
        audio.volume = 0.3;
    }

}
btn_play_nu.onclick = function () {
    var url = '../music/nu.mp3';
    if (isPlay) {
        audio.pause();
    }
    else {
        loadSong(url);
        audio.play();
        audio.volume = 0.3;
    }
}
btn_play_ca2.onclick = function () {
    var url = '../music/ca2.mp3';
    if (isPlay) {
        audio.pause();
    }
    else {

        loadSong(url);
        audio.play();
        audio.volume = 0.3;
    }

}
btn_play_all.onclick = function () {
    console.log(audio.paused)
    if (isPlay) {
        audio.pause();
    }
    else {

        var url = '../music/all.mp3';
        loadSong(url);
        audio.loop = true;
        audio.play();
        audio.volume = 0.3;
    }
}
audio.onplay = function () {
    isPlay = true;
}
audio.onpause = function () {
    isPlay = false;
}
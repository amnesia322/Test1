const video = document.getElementById('video')
const timing = document.querySelector('.video_timing')

video.addEventListener('click', function () {
    if (video.paused) {
        video.play()
    } else {
        video.pause()
    }
})

video.addEventListener("timeupdate", timingHandler)

video.addEventListener('ended', function () {
    video.currentTime = 0;
});

function timingHandler() {
    const timestamp = Math.floor(video.currentTime);

    const minutes = Math.floor(timestamp / 60);
    const seconds = timestamp % 60;
    const mmm = Math.floor((video.currentTime - timestamp) * 1000)

    const formatted = [
        minutes.toString().padStart(2, '0'),
        seconds.toString().padStart(2, '0'),
        mmm.toString().padStart(3, '0')
    ].join(':');

    timing.textContent = formatted
}
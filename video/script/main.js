var video = document.getElementById("myVideo");
var playPauseBtn = document.getElementById("playPauseBtn");
var muteBtn = document.getElementById("muteBtn");
var rewindBtn = document.getElementById("rewindBtn");
var fastForwardBtn = document.getElementById("fastForwardBtn");
var speedInput = document.getElementById("speedInput");

playPauseBtn.addEventListener("click", function () {
  if (video.paused) {
    video.play();
    playPauseBtn.textContent = "Пауза";
  } else {
    video.pause();
    playPauseBtn.textContent = "Воспроизвести";
  }
});

muteBtn.addEventListener("click", function () {
  if (video.muted) {
    video.muted = false;
    muteBtn.textContent = "Выключить звук";
  } else {
    video.muted = true;
    muteBtn.textContent = "Включить звук";
  }
});

rewindBtn.addEventListener("click", function () {
  video.currentTime -= 10;
});

fastForwardBtn.addEventListener("click", function () {
  video.currentTime += 10;
});

speedInput.addEventListener("change", function () {
  video.playbackRate = parseFloat(speedInput.value);
});

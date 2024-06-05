let hours = 0;
let minutes = 0;
let seconds = 0;
let interval;
let paused = false;

function updateTime() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
  }
  document.getElementById("time").textContent =
    (hours < 10 ? "0" + hours : hours) +
    ":" +
    (minutes < 10 ? "0" + minutes : minutes) +
    ":" +
    (seconds < 10 ? "0" + seconds : seconds);
}

function start() {
  if (!paused) {
    hours = 0;
    minutes = 0;
    seconds = 0;
    document.getElementById("time").textContent = "00:00:00";
  }
  interval = setInterval(updateTime, 1000);
  document.getElementById("start").disabled = true;
  document.getElementById("pause").disabled = false;
  document.getElementById("pause").textContent = "Pause";
  document.getElementById("stop").disabled = false;
  paused = false;
}

function pause() {
  if (paused) {
    interval = setInterval(updateTime, 1000);
    document.getElementById("pause").textContent = "Pause";
  } else {
    clearInterval(interval);
    document.getElementById("pause").textContent = "Continue";
  }
  paused = !paused;
}

function stop() {
  clearInterval(interval);
  hours = 0;
  minutes = 0;
  seconds = 0;
  document.getElementById("time").textContent = "00:00:00";
  document.getElementById("start").disabled = false;
  document.getElementById("pause").disabled = true;
  document.getElementById("stop").disabled = true;
}

document.getElementById("time").textContent = "00:00:00";

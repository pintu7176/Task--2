
let startTime = 0;
let elapsedTime = 0;
let intervalId;
let running = false;

function formatTime(ms) {
  const date = new Date(ms);
  const minutes = String(date.getUTCMinutes()).padStart(2, '0');
  const seconds = String(date.getUTCSeconds()).padStart(2, '0');
  const milliseconds = String(date.getUTCMilliseconds()).padStart(3, '0');
  return `${minutes}:${seconds}.${milliseconds}`;
}

function updateDisplay() {
  const display = document.getElementById('display');
  display.textContent = formatTime(elapsedTime);
}

function startStopwatch() {
  if (!running) {
    running = true;
    startTime = Date.now() - elapsedTime;
    intervalId = setInterval(() => {
      elapsedTime = Date.now() - startTime;
      updateDisplay();
    }, 10);
  }
}

function pauseStopwatch() {
  if (running) {
    running = false;
    clearInterval(intervalId);
  }
}

function resetStopwatch() {
  running = false;
  clearInterval(intervalId);
  elapsedTime = 0;
  updateDisplay();
  document.getElementById('laps').innerHTML = '';
}

function recordLap() {
  if (running) {
    const lapTime = formatTime(elapsedTime);
    const lapItem = document.createElement('li');
    lapItem.textContent = `Lap: ${lapTime}`;
    document.getElementById('laps').appendChild(lapItem);
  }
}

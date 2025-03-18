// Stopwatch
function setupStopwatch() {
  let time = 0;
  let interval;
  const display = document.getElementById("stopwatch-display");

  function updateDisplay() {
    let h = Math.floor(time / 3600);
    let m = Math.floor((time % 3600) / 60);
    let s = time % 60;
    display.textContent = `${h.toString().padStart(2, "0")}:${m
      .toString()
      .padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  }

  document.getElementById("start-stopwatch").addEventListener("click", () => {
    if (!interval)
      interval = setInterval(() => {
        time++;
        updateDisplay();
      }, 1000);
  });

  document.getElementById("pause-stopwatch").addEventListener("click", () => {
    clearInterval(interval);
    interval = null;
  });

  document.getElementById("reset-stopwatch").addEventListener("click", () => {
    clearInterval(interval);
    interval = null;
    time = 0;
    updateDisplay();
  });

  updateDisplay();
}

// Timer
function setupTimer() {
  let time = 0;
  let interval;
  const display = document.getElementById("timer-display");
  const input = document.getElementById("timer-input");

  function updateDisplay() {
    let m = Math.floor(time / 60);
    let s = time % 60;
    display.textContent = `${m.toString().padStart(2, "0")}:${s
      .toString()
      .padStart(2, "0")}`;
  }

  document.getElementById("start-timer").addEventListener("click", () => {
    if (!interval && time > 0) {
      interval = setInterval(() => {
        if (time > 0) {
          time--;
          updateDisplay();
        } else {
          clearInterval(interval);
          alert("Time's up!");
        }
      }, 1000);
    }
  });

  document.getElementById("pause-timer").addEventListener("click", () => {
    clearInterval(interval);
    interval = null;
  });

  document.getElementById("reset-timer").addEventListener("click", () => {
    clearInterval(interval);
    interval = null;
    time = 0;
    updateDisplay();
  });

  input.addEventListener("change", () => {
    let [m, s] = input.value.split(":").map(Number);
    time = (m || 0) * 60 + (s || 0);
    updateDisplay();
    input.value = "";
  });

  document.querySelectorAll("#timer button[data-time]").forEach((btn) => {
    btn.addEventListener("click", () => {
      time += Number(btn.dataset.time);
      updateDisplay();
    });
  });

  updateDisplay();
}

document.addEventListener("DOMContentLoaded", () => {
  setupStopwatch();
  setupTimer();
});

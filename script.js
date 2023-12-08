let stopwatchInterval;
    let elapsedTime = 0;
    let isRunning = false;

    function updateStopwatch() {
        const stopwatchElement = document.getElementById("stopwatch");
        const seconds = Math.floor(elapsedTime / 1000);
        const milliseconds = (elapsedTime % 1000).toString().padStart(3, '0');
        stopwatchElement.textContent = `${seconds}.${milliseconds}`;
    }

    function startStopwatch() {
        if (!isRunning) {
            stopwatchInterval = setInterval(function () {
                elapsedTime += 10;
                updateStopwatch();
            }, 10);
            isRunning = true;
        }
    }

    function pauseStopwatch() {
        clearInterval(stopwatchInterval);
        isRunning = false;
    }

    function resetStopwatch() {
        clearInterval(stopwatchInterval);
        elapsedTime = 0;
        updateStopwatch();
        isRunning = false;
    }
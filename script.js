  /*function updateTimer() {
            const timerElement = document.getElementById('timer');
            const now = new Date();
            const formattedDate = now.toLocaleDateString();
            const formattedTime = now.toLocaleTimeString();

            timerElement.textContent = formattedDate + ', ' + formattedTime;
        }

        // Update the timer every second
        setInterval(updateTimer, 1000);

        // Initial call to display the timer
        updateTimer();*/

  function updateTimer() {
      const timerElement = document.getElementById("timer");
      const currentDate = new Date();
      
      const options = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      
      const formattedDate = currentDate.toLocaleString(undefined, options);
      timerElement.textContent = ` ${formattedDate}`;
    }

    // Update the timer every second
    setInterval(updateTimer, 1000);

    // Initial update
    updateTimer();

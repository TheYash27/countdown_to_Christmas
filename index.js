const countdownDisplay = document.getElementById("countdown-display")

function renderCountdown(){
    // Task:
    // - Get today's date (you only need the day).
    // - Calculate remaining days.
    // - Display remaining days in countdownDisplay.
    // Get the current date
    const today = new Date();

    // Set the date of Christmas in 2023
    const christmas = new Date(2023, 11, 25);

    // Calculate the difference in milliseconds
    const diff = (christmas.getTime() - today.getTime());

    // Calculate the number of days
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    // Calculate the remaining milliseconds after days
    const remainingMs = diff % (1000 * 60 * 60 * 24);

    // Calculate the number of hours
    const hours = Math.floor(remainingMs / (1000 * 60 * 60));

    // Calculate the remaining milliseconds after hours
    const remainingMsHour = remainingMs % (1000 * 60 * 60);

    // Calculate the number of minutes
    const minutes = Math.floor(remainingMsHour / (1000 * 60));

    // Calculate the remaining milliseconds after minutes
    const remainingMsMinute = remainingMsHour % (1000 * 60);

    // Calculate the number of seconds
    const seconds = Math.floor(remainingMsMinute / 1000);

    // Display the results
    countdownDisplay.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;

}
 
renderCountdown()

setInterval(renderCountdown, 1000);

// Stretch goals:
// - Display hours, minutes, seconds.
// - Add a countdown for another festival, your birthday, or Christmas 2022.
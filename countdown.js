// Set the date for the next event
const eventDate = new Date('2024-08-10T11:00:00');
const countdownEl = document.getElementById('countdown-timer');

function updateCountdown() {
    const now = new Date();
    const diff = eventDate - now;

    if (diff <= 0) {
        countdownEl.textContent = "It's Race Day!";
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const mins = Math.floor((diff / (1000 * 60)) % 60);
    const secs = Math.floor((diff / 1000) % 60);

    countdownEl.textContent = 
        `${days}d ${hours}h ${mins}m ${secs}s to go!`;
}

setInterval(updateCountdown, 1000);
updateCountdown(); 
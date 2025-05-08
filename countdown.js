// Set the date for the next event
const eventDate = new Date('2024-08-10T11:00:00');
const countdownEl = document.getElementById('countdown-timer');

function updateCountdown() {
    const now = new Date();
    const diff = eventDate - now;

    if (diff <= 0) {
        countdownEl.textContent = "It's Race Day!";
        countdownEl.classList.add('bg-accent');
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const mins = Math.floor((diff / (1000 * 60)) % 60);
    const secs = Math.floor((diff / 1000) % 60);

    // Format with leading zeros for a nicer look
    const formattedDays = String(days).padStart(2, '0');
    const formattedHours = String(hours).padStart(2, '0');
    const formattedMins = String(mins).padStart(2, '0');
    const formattedSecs = String(secs).padStart(2, '0');

    countdownEl.innerHTML = 
        `<span class="text-primary">${formattedDays}</span>d 
         <span class="text-primary">${formattedHours}</span>h 
         <span class="text-primary">${formattedMins}</span>m 
         <span class="text-primary">${formattedSecs}</span>s to go!`;
}

// Update immediately and then every second
setInterval(updateCountdown, 1000);
updateCountdown(); 
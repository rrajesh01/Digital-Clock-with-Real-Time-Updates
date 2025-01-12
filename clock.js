
function updateColock(){
    const now = new Date();
    let hours = now.getHours();
    const meridiem = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    hours = hours.toString().padStart(2,0);
    const minites = now.getMinutes().toString().padStart(2,0);
    const seconds = now.getSeconds().toString().padStart(2,0);
    const timeString = `${hours}:${minites}:${seconds} ${meridiem}`;
    document.getElementById("clock").textContent = timeString;
}

updateColock();
setInterval(updateColock,1000);
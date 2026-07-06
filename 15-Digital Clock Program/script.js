function updateClock(){
    const now=new Date();
    //number to string to padding at beginning of ) for two characters
    let hours = now.getHours();
    const meridiem = hours>=12 ? "PM": "AM";
    hours=hours%12 || 12;
    // The || (OR) operator returns the first truthy value.
    hours=hours.toString().padStart(2, 0)
    const minutes = now.getMinutes().toString().padStart(2, 0);
    const seconds = now.getSeconds().toString().padStart(2, 0);
    const timestring = `${hours}:${minutes}:${seconds} ${meridiem}`;
    document.getElementById("clock").textContent = timestring;
}

updateClock();
setInterval(updateClock, 1000);
//Run the updateClock function every 1000 milliseconds (1 second).
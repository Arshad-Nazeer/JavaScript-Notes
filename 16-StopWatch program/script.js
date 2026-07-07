const display=document.getElementById("display");
let timer=null;
let startTime=0;
let elapsedTime=0;
let isRunning=false;

function start(){
    if(!isRunning){
        startTime = Date.now()-elapsedTime;
        //subtracted by elasped time to keep track of startTime since last start
        //Date.now return current time in ms since han 1, 1970
        timer = setInterval(update, 10);
        isRunning = true
    }
}


function stop(){
    if(isRunning){
        clearInterval(timer);
        elapsedTime=Date.now()-startTime;
        //record elapsedtime incase we start from where we left
        isRunning=false;
    }
}

function reset(){
    clearInterval(timer);
    startTime=0;
    elapsedTime=0;
    isRunning=false;
    display.textContent = `00:00:00:00`;
}


function update(){
    const currentTime = Date.now();
    elapsedTime=currentTime-startTime;
    let hours = Math.floor(elapsedTime/(1000*60*60));
    hours=hours.toString().padStart(2, 0);
    let minutes = Math.floor(elapsedTime/(1000*60)%60);
    minutes=minutes.toString().padStart(2, 0);
    let seconds = Math.floor(elapsedTime/(1000)%60);
    seconds=seconds.toString().padStart(2, 0);
    let milliseconds = Math.floor(elapsedTime%1000/10);
    milliseconds=milliseconds.toString().padStart(2, 0);

    display.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;
}
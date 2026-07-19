const min=50;
const max=100;
const answer=Math.floor(Math.random()*(max-min+1))+min;

let attempts=0;
let guess;
let running=true;

while(running){
    guess=window.prompt(`guess a number between ${min}-${max}`);
    if(guess==null) break;
    guess=Number(guess);
    if(isNaN(guess)) window.alert("Please enter a valid number");
    else if(guess<min || guess>max) window.alert("Please enter a number within valid range");
    else{
        attempts++;
        if(guess<answer) window.alert("TOO LOW! TRY AGAIN");
        else if(guess>answer) window.alert("TOO HIGH! TRY AGAIN");
        else{
            window.alert(`CORRECT!, The answer was ${answer}. It took you ${attempts} attempts`);
            running=false;
        }
    }
}
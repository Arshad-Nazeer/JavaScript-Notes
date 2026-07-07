const display=document.getElementById("display");

function appendToDisplay(input){
    display.value+=input;
}

function clearDisplay(){
    display.value="";
}

function calculate(){
    try{
        display.value=eval(display.value);
        //eval() evaluates a string expression
    }catch{
        display.value="Error";
    }
}
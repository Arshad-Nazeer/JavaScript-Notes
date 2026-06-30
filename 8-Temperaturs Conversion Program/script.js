const textbox=document.getElementById("textbox");
const tofahrenheit = document.getElementById("fahrenheit");
const tocelsius = document.getElementById("celsius");
const result = document.getElementById("result");
let temp;

function convert(){
    temp = Number(textbox.value);
    if(tofahrenheit.checked){
        temp=temp*9/5+32;
        result.textContent = temp.toFixed(1)+"°F"
    }else if(tocelsius.checked){
        temp=(temp-32)*5/9;
        result.textContent = temp.toFixed(1)+"°C"
    }else{
        result.textContent = "Select a Unit";
    }
}


//temp.toFixed is to display specified number of decimal places
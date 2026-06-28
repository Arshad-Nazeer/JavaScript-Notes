const btn =document.getElementById('mybtn');
const label1 = document.getElementById('mylabel');
const label2 = document.getElementById('mylabel2');
const label3 = document.getElementById('mylabel3');
const min=1;
const max=6;

let number;
let number1;
let number2;

btn.onclick = function(){
    number=Math.floor(Math.random()*(max-min+1))+min;
    number2=Math.floor(Math.random()*(max-min+1))+min;
    number3=Math.floor(Math.random()*(max-min+1))+min;
    label1.textContent=number;
    label2.textContent=number2;
    label3.textContent=number3;
}
//COUNTER PROGRAM

const decrement = document.getElementById("decrement");
const reset = document.getElementById("reset");
const increment = document.getElementById("increment");
const countlabel = document.getElementById("countlabel");

let count = 0;

increment.onclick = function () {
  count++;
  countlabel.textContent = count;
}

decrement.onclick = function () {
  count--;
  countlabel.textContent = count;
}

reset.onclick = function () {
    count = 0;
    countlabel.textContent = count;
}
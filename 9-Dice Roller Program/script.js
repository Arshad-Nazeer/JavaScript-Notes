

function rolldice(){
    const numofdice = document.getElementById("numofdice").value;
    const diceresult = document.getElementById("diceresult");
    const diceimg = document.getElementById("diceimg");
    const values = [];
    const images = [];

    for(let i=0; i<numofdice; i++){
        const value = Math.floor(Math.random()*6)+1;
        values.push(value);
        images.push(`<img src="images/${value}.webp" alt="Dice ${value}">`);
    }
    

    diceresult.textContent = `dice: ${values.join(", ")}`;
    diceimg.innerHTML = images.join('');
}
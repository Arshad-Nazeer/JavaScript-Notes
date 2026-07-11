async function fetchData(){
    try{
        const pokemonname=document.getElementById("pokemonname").value.toLowerCase();
        const response=await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonname}`);
        if(!response.ok){
            throw new Error("could not fetch resource");
        }
        const data=await response.json();
        console.log(data);
        const img=data.sprites.front_default;
        const pokemonsprite=document.getElementById("pokemonsprite");
        pokemonsprite.src=img;
        pokemonsprite.style.display="block";
    }catch(error){
        console.error(error);
    }
}
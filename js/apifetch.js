const apidex = document.getElementById("apidex");

function crearTarjeta(pokemon) {
  
  const tarjeta = document.createElement("article");
  tarjeta.className = "tarjeta";  

       const frontImg = document.createElement("img");    
       const nombre = document.createElement("h2");
       const ataques = document.createElement("p");


       
  apidex.appendChild(tarjeta);

  
    
      tarjeta.appendChild(frontImg);
      
      tarjeta.appendChild(nombre);
      tarjeta.appendChild(ataques);
    
  

    
   
    frontImg.src = pokemon.img;

  nombre.textContent = pokemon.name;
  nombre.className = "tarjeta-nombre";
  ataques.textContent =
    "ataque: " + pokemon.ataque + " defensa: " + pokemon.defensa;
  



}
async function pokedata(url) {
  try {
    let respusta = await fetch(url);
    return await respusta.json();
  } catch (error) {
    console.log(error);
  }
}



async function respuesta() {
  const pokes = (await pokedata("https://pokeapi.co/api/v2/pokemon?offset=20&limit=20")).results;
 
  for(const poke of pokes){

    const pokeData = await pokedata(poke.url);
    let pokemon = {}
       pokemon.id = pokeData.id;
        pokemon.img = pokeData.sprites.other.dream_world.front_default;
        pokemon.name = pokeData.name;
        pokemon.type = pokeData.types[0].type.name;
        pokemon.ataque = pokeData.stats[1].base_stat;
        pokemon.defensa = pokeData.stats[2].base_stat;

    
    

 
    crearTarjeta(pokemon);
  }

}


respuesta();




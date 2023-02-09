/* 
POKEMON Identification
*/

let pokemon_id = 1;
let pokemon_name = document.getElementById("pokemonName");
let pokemon_number = document.getElementById("pokemonNumber");
let pokemon_image = document.getElementById("pokemon_image");
let pokemon_type = document.getElementById("pokemon_type");
let pokemon_region = document.getElementById("pokemon_region");
let pokemon_city = document.getElementById("pokemon_city");


// fetch API

const api_pokemon = async (pokemon) => {
  const api_response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
  if (api_response.status === 200) {
    const data = await api_response.json();
    return data;
  }
};
const api_pokemon_location = async (pokemon) => {
  const api_response = await fetch(`https://pokeapi.co/api/v2/location/${pokemon}`);
  const data = await api_response.json();
  return data;
};

const show_pokemon = async (pokemon) => {

  pokemon_name.textContent = "Searching...";

  const pokemon_status = await api_pokemon(pokemon);


  if (pokemon_status) {

    pokemon_id = pokemon_status.id;

    let pokemon_types_index = pokemon_status.types;
    const pokemon_location = await api_pokemon_location(pokemon);

    pokemon_name.textContent = pokemon_status.name;
    pokemon_number.textContent = "#" + pokemon_status.id;
    pokemon_image.src = pokemon_status.sprites.versions["generation-v"]["black-white"].animated["front_default"];
    pokemon_image.style.opacity = "1";

    if (pokemon_id > 1) {
      previous_pokemon.style.pointerEvents = "initial";
      previous_pokemon.style.opacity = "1";
    } else {
      previous_pokemon.style.pointerEvents = "none";
      previous_pokemon.style.opacity = "0.8";
    }

    if (pokemon_types_index.length == 1) {
      document.getElementById("pokemon_type").textContent = pokemon_status.types[0].type.name;
    } else if (pokemon_types_index.length == 2) {
      document.getElementById("pokemon_type").textContent = pokemon_status.types[0].type.name + ", " + pokemon_status.types[1].type.name;
    } else if (pokemon_types_index.length == 3) {
      document.getElementById("pokemon_type").textContent = pokemon_status.types[0].type.name + ", " + pokemon_status.types[1].type.name + ", " + pokemon_status.types[2].type.name;
    }

    pokemon_region.textContent = pokemon_location.region.name;
    pokemon_city.textContent = pokemon_location.names["0"].name;

  } else {

    pokemon_name.textContent = "Not found!";
    pokemon_number.textContent = "";
    pokemon_image.style.opacity = "0";
  }
}



/* 

BUTTON CONFIG

*/

const form = document.getElementById("check_pokemon");
const previous_pokemon = document.getElementById("beforePokemon");

previous_pokemon.style.pointerEvents = "none";
previous_pokemon.style.opacity = "0.8";

document.getElementById("nextPokemon").addEventListener("click", () => {
  pokemon_id++;
  show_pokemon(pokemon_id);
});

previous_pokemon.addEventListener("click", () => {
  pokemon_id--;
  show_pokemon(pokemon_id);
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let get_value = document.getElementById("get_pokemon").value.toLowerCase();
  let pokemon_value = get_value;
  show_pokemon(pokemon_value);
});



//On refresh
show_pokemon(pokemon_id);
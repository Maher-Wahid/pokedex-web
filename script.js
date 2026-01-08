const errorButton = document.getElementById("error-btn");
const errorMessage = document.getElementById("error-container");

async function getPokémon() {
  try {
    const search = document.getElementById("search").value.toLowerCase();
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${search}`);

    if (!response.ok) {
      document.getElementById("search").value = "";
      throw new Error("Could not fetch resource.");
    }

    const data = await response.json();

    const typeColors = {
      normal: "#A8A77A",
      fire: "#EE8130",
      water: "#6390F0",
      electric: "#F7D02C",
      grass: "#7AC74C",
      ice: "#96D9D6",
      fighting: "#C22E28",
      poison: "#A33EA1",
      ground: "#E2BF65",
      flying: "#A98FF3",
      psychic: "#F95587",
      bug: "#A6B91A",
      rock: "#B6A136",
      ghost: "#735797",
      dragon: "#6F35FC",
      dark: "#705746",
      steel: "#B7B7CE",
      fairy: "#D685AD"
    };


    const name = document.getElementById("name");
    const type1 = document.getElementById("type1");
    const type2 = document.getElementById("type2");
    const hp = document.getElementById("hp");
    const speed = document.getElementById("speed");
    const attack = document.getElementById("attack");
    const defense = document.getElementById("defense");
    const specialAttack = document.getElementById("special-attack");
    const specialDefense = document.getElementById("special-defense");
    const sprite = document.getElementById("sprite");
    const namePicContainer = document.getElementById("name-pic-container");

    name.textContent = `${capFirstLetter(data.species.name)}`;

    type1.textContent = `${capFirstLetter(data.types[0].type.name)}`;
    if (data.types.length === 2) {
      type2.textContent = `${capFirstLetter(data.types[1].type.name)}`;
      type2.style.display = "block";
    } else {
      type2.style.display = "none";
    }
    namePicContainer.style.backgroundColor = typeColors[data.types[0].type.name];
    type1.style.backgroundColor = typeColors[data.types[0].type.name];
    type2.style.backgroundColor = typeColors[data.types[0].type.name];

    hp.textContent = data.stats[0].base_stat;
    attack.textContent = data.stats[1].base_stat;
    defense.textContent = data.stats[2].base_stat;
    specialAttack.textContent = data.stats[3].base_stat;
    specialDefense.textContent = data.stats[4].base_stat;
    speed.textContent = data.stats[5].base_stat;
    sprite.src = data.sprites.front_default;

  } catch (error) {
    const errorMessage = document.getElementById("error-container");
    errorMessage.style.visibility = "visible";
  }
}

function capFirstLetter(word) {
  return word.charAt(0).toUpperCase() + word.slice(1)
}

errorButton.addEventListener("click", function() {
  errorMessage.style.visibility = "hidden";
});
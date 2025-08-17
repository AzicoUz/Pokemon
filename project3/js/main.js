const pokemonInfo = [{
        name: "Buneary",
        color: "brown white",
        age: 2,
        weight: "12.1 lbs",
        like: "🤍",
        img: "../img/1.png",
    },
    {
        name: "Archaludon",
        color: "blue white",
        age: 6,
        weight: "132.3 lbs",
        like: "🤍",
        img: "../img/2.png",
    },
    {
        name: "Geodude",
        color: "gray",
        age: 1,
        weight: "44.1 lbs",
        like: "🤍",
        img: "../img/3.png",
    },
    {
        name: "Lapras",
        color: "gray blue",
        age: 8,
        weight: "485 lbs",
        like: "🤍",
        img: "../img/4.png",
    },
    {
        name: "Torkoal",
        color: "orange gray",
        age: 1,
        weight: "177 lbs",
        like: "🤍",
        img: "../img/5.png",
    },
    {
        name: "Greavard",
        color: "blue",
        age: 2,
        weight: "77 lbs",
        like: "🤍",
        img: "../img/6.png",
    },
    {
        name: "Lucario",
        color: "blue white",
        age: 3,
        weight: "119 lbs",
        like: "🤍",
        img: "../img/7.png",
    },
    {
        name: "Darkrai",
        color: "black white",
        age: 4,
        weight: "111 lbs",
        like: "🤍",
        img: "../img/8.png",
    },
];
const pokemonContainer = document.querySelector(".card-grid");
const btnfilter = document.querySelector("#filter");
const btnLetter = document.querySelector(".btnLetter");
const btnButton = document.querySelector(".btnButton");
const searchInput = document.querySelector(".search");
const heartLike = document.querySelector(".heart-icon");

function pokemonfunc(pokemonInfo) {
    pokemonInfo.forEach(function(pokemon) {
        const pokemonCard = document.createElement("div");
        pokemonCard.classList.add("card");
        const cardLike = document.createElement("button");
        cardLike.classList.add("like");
        pokemonCard.innerHTML = `
<div class="card">
  <div class="content">
    <div class="back">
      <div class="back-content">
        <div class="img">
          <img src="${pokemon.img}" alt="${pokemon.name}">
        </div>
      </div>
    </div>
    <div class="front">
      
      <div class="img">
        <img src="${pokemon.img}" alt="${pokemon.name}">
      </div>

      <div class="front-content">
        <small class="badge"></small>
        <div class="description">
          <div class="title">
            <p class="title">
                ${pokemon.name}
            </p>
             <span class="like">${pokemon.like}</span>
          </div>
          <p class="card-footer">
            <span class="color">Color: ${pokemon.color}</span>
            <span class="age">Age: ${pokemon.age} years</span>
          </p>
          <p class="weight">Weight: ${pokemon.weight}</p>
        </div>
      </div>
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
    `;
        const likeIcon = pokemonCard.querySelector(".like");
        likeIcon.addEventListener('click', function() {
            if (likeIcon.textContent === "🤍") {
                likeIcon.textContent = "❤️";
            } else {
                likeIcon.textContent = "🤍";
            }
            localStorage.setItem(pokemon.name, likeIcon.textContent);
        });
        if (localStorage.getItem(pokemon.name)) {
            likeIcon.textContent = localStorage.getItem(pokemon.name);
        }

        pokemonContainer.appendChild(pokemonCard);
    });
}
pokemonfunc(pokemonInfo);

heartLike.addEventListener("click", function() {
    if (heartLike.textContent === "🤍") {
        heartLike.textContent = "❤️";
    } else {
        heartLike.textContent = "🤍";
    }
    localStorage.setItem("heartLike", heartLike.textContent);
});

if (localStorage.getItem("heartLike")) {
    heartLike.textContent = localStorage.getItem("heartLike");
}
btnLetter.addEventListener("click", function() {
    pokemonContainer.innerHTML = "";
    const letterPokemon = pokemonInfo.sort((a, b) => {
        if (a.name < b.name) {
            return -1;
        } else if (a.name > b.name) {
            return 1;
        }
    });
    pokemonfunc(letterPokemon);
});
btnfilter.addEventListener('change', function() {
    pokemonContainer.innerHTML = "";
    const filterValue = btnfilter.value;
    if (filterValue === "Age") {
        const agePokemon = pokemonInfo.filter(pokemon => pokemon.age > 2);
        pokemonfunc(agePokemon);
    } else if (filterValue === "Weight") {
        const weightPokemon = pokemonInfo.filter((a) => {
            const weight = parseInt(a.weight);
            return weight > 100;
        });
        pokemonfunc(weightPokemon);
    } else if (filterValue === "all") {
        pokemonfunc(pokemonInfo);
    }
});
searchInput.addEventListener('input', function(e) {
    const searchTerm = e.target.value.toLowerCase();
    pokemonContainer.innerHTML = "";
    const searchPokemon = pokemonInfo.filter((pokemon) => {
        return pokemon.name.toLowerCase().includes(searchTerm);
    });
    pokemonfunc(searchPokemon);
});
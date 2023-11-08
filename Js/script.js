//variaveis globais

const pokemonName = document.querySelector(".pokemom_name")

const pokemonNumber = document.querySelector(".pokemon_number")

const pokemonImage = document.querySelector(".pokemon_image")

const pokemonForm = document.querySelector(".form") 

const pokemonInput = document.querySelector(".input_search")

const btnprev=document.querySelector(".btn-prev")

const btnnext=document.querySelector(".btn-next")

let searchPokemon=0;



 //conectando: com a API

 const fetchPokemon = async (pokemon) => {
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)


    console.log(APIResponse)

    if (APIResponse.status === 200) {

        const data = await APIResponse.json();

       return data;

    }
   

 };

 //renderizar os dados da API
 
const renderPokemon = async (pokemon) => {
    pokemonName.innerHTML="carregando"
    pokemonNumber.innerHTML="";
 const data = await fetchPokemon(pokemon)


    if (data) {
       

        pokemonName.innerHTML = data.name;
        pokemonNumber.textContent = data.id;
        pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default']
        searchPokemon =data.pokemonNumber
        
    } else {
        pokemonName.innerHTML="nao encontrado:c"
        input.value=""
        
    }
    


    console.log(data)
}


//capturar pokemon pelo input

pokemonForm.addEventListener("submit",(event)=>{

    event.preventDefault();
renderPokemon(pokemonInput.value.toLowerCase())

});
//Eventos dos botões prev e next
btnnext.addEventListener("click",()=>{

    searchPokemon -= 1
    renderPokemon(searchPokemon)
    if(searchPokemon>1){

    }

})




 renderPokemon(44);
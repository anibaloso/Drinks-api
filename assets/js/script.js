//conectamos ala api
const URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

let selectedDrink = null;
let allDrinks = [];


//creacion de template (plantilla)
const cardTemplate = `
    <div class="col-5 border me-5 mb-5">
        <div class="row">
            <div class="col-6 ">
                <img src="{foto}" alt="" class="w-100 align-self-center">
            </div>
            <div class="col-6">
                <h3>{titulo}</h3>
                <p>{instrucciones}</p>
                <h5>{categoria}</h5>
            </div>
        </div>    
    </div>
`;

fetch(URL)
    .then(res => res.json())
    .then(response => {
        console.log("🚀 ~ response:", response)
        createDrinks(response)
    })

    .catch(e => console.error(e));

const createDrinks = (drinks) => {
    allDrinks = drinks;//guardamos todos los tragos
    //console.log("🚀 ~ createDrinks ~ allDrinks:", allDrinks.drinks[0].strDrink)
    fillCards();
}

const fillCards = () => {
    const listaTragos=document.getElementById('listaTragos');
    // listaTragos.innerHTML='';

    for (let i = 0; i < 20; i++) {
        let cardHtml=cardTemplate
        .replace("{foto}",allDrinks.drinks[i].strDrinkThumb)
        .replace("{titulo}",allDrinks.drinks[i].strDrink)
        .replace("{instrucciones}",allDrinks.drinks[i].strInstructions)
        .replace("{categoria}",allDrinks.drinks[i].strCategory);

        listaTragos.insertAdjacentHTML('beforeend',cardHtml);
    }

};
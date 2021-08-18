const apiKey = "cd4c67af652c44a78cc397d1a044320c";
let nextBtn, backBtn;

let showResult = queryResponse => {
    let title = queryResponse.recipes[0].title;
    let dishTypes = queryResponse.recipes[0].dishTypes;
    let glutenFree = String(queryResponse.recipes[0].glutenFree);
    let vegan = String(queryResponse.recipes[0].vegan);
    let healthScore = queryResponse.recipes[0].healthScore;
    let image = queryResponse.recipes[0].image;
    let readyInMinutes = queryResponse.recipes[0].readyInMinutes;
    let servings = queryResponse.recipes[0].servings;
    let extendedIngredients = queryResponse.recipes[0].extendedIngredients;


    document.querySelector(".js-Title").innerHTML = `${title}`;
    document.querySelector(".js-Image").innerHTML = `<img src="${image}" alt="Here comes the image of the recipe" class="c-imagedetail js-Image ">`;
    document.querySelector(".js-Servings").innerHTML = `${servings}`;
    document.querySelector(".js-Time").innerHTML = `${readyInMinutes} min`;
    document.querySelector(".js-titleNav").innerHTML = `${title}`;


    document.querySelector(".js-DishTypes").innerHTML = "";
    for (i = 0; i < dishTypes.length; i++)
    {
        document.querySelector(".js-DishTypes").innerHTML += 
        `<ul class="c-card__dishTypesItem">
            <li>${dishTypes[i]}</li>
        </ul>`
    }




    const checkIcon = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#078215">
                <path d="M0 0h24v24H0V0z" fill="none"/>
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM17.99 9l-1.41-1.42-6.59 6.59-2.58-2.57-1.42 1.41 4 3.99z"/>
            </svg>`;

    const falseIcon = `<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#b31200">
                <rect fill="none" height="24" width="24"/>
                <path d="M19,19H5V5h14V19z M3,3v18h18V3H3z M17,15.59L15.59,17L12,13.41L8.41,17L7,15.59L10.59,12L7,8.41L8.41,7L12,10.59L15.59,7 L17,8.41L13.41,12L17,15.59z"/>
            </svg>`


    if (glutenFree == "false")
    {
        document.querySelector(".js-GlutenFree").innerHTML = 
            `${falseIcon}
            <p class="c-card-info__icontext">Gluten Free</p>`;
    }
    else
    {
        document.querySelector(".js-GlutenFree").innerHTML =
            `${checkIcon}
            <p class="c-card-info__icontext">Gluten Free</p>`; 
    }
    if (vegan == "false")
    {
        document.querySelector(".js-Vegan").innerHTML = 
            `${falseIcon}
            <p class="c-card-info__icontext">Vegan</p>`
    }
    else
    {
        document.querySelector(".js-Vegan").innerHTML =
            `${checkIcon}
            <p class="c-card-info__icontext">Vegan</p>`; 
    }
    
    

    


    document.querySelector(".js-Ingredients").innerHTML = "";
    for (let i = 0; i < extendedIngredients.length; i++)
    {
        let amountIngredient = extendedIngredients[i].amount
        let nameIngredient = extendedIngredients[i].name
        let unitIngredient = extendedIngredients[i].unit

        document.querySelector(".js-Ingredients").innerHTML += 
            `<ul class="c-card__ingredients">
                <li class="c-card__ingredientItem">${amountIngredient} ${unitIngredient} ${nameIngredient}</li>
            </ul>`;
    }
}




function addEventListenerPage() {
    backBtn = document.querySelector(".js-back");
    nextBtn = document.querySelector(".js-next");
    
    backBtn.addEventListener("click", handleBack);
    nextBtn.addEventListener("click", handleNext);

    console.log(backBtn, nextBtn);
}

async function handleBack() {
    const recipeHistory = localStorage.getItem("@recipeHistory");

    let historyArr = [];
    let historyPoint = parseInt(localStorage.getItem("@recipeHistoryPoint"));

    if (recipeHistory !== null && historyPoint !== null) {
        historyArr = JSON.parse(recipeHistory);
        newHistoryPoint = historyPoint - 1;

        if (newHistoryPoint === 0) {
            localStorage.setItem("@recipeHistoryPoint", 0);
            document.querySelector('.js-back').style.display = "none";
        }
        else {
            localStorage.setItem("@recipeHistoryPoint", newHistoryPoint);
            document.querySelector('.js-back').style.display = "block";
        }
    }
    else {
        const recipe = await getNewRandomRecipe();
        
        localStorage.setItem("@recipeHistory", JSON.stringify([...historyArr, recipe]));
        localStorage.setItem("@recipeHistoryPoint", 0);

        showResult(recipe); 
    } 


async function handleNext() {
    const recipeHistory = localStorage.getItem("@recipeHistory");
    let historyArr = [];
    let historyPoint = parseInt(localStorage.getItem("@recipeHistoryPoint"));
    
    document.querySelector(".js-back").style.display = "block";

    if (recipeHistory !== null && historyPoint !== null) {
        historyArr = JSON.parse(recipeHistory);
        newHistoryPoint = historyPoint + 1;

        if (historyArr.length - 1 == historyPoint) {
            const recipe = await getNewRandomRecipe();
            localStorage.setItem("@recipeHistory", JSON.stringify([...historyArr, recipe]));
            localStorage.setItem("@recipeHistoryPoint", newHistoryPoint);
        }
        else {
            localStorage.setItem("@recipeHistoryPoint", newHistoryPoint);
            showResult(historyArr[newHistoryPoint]);
        }
    }
    else {
        document.querySelector(".js-back").style.display = "none";
        const recipe = await getNewRandomRecipe();
        
        localStorage.setItem("@recipeHistory", JSON.stringify([...historyArr, recipe]));
        localStorage.setItem("@recipeHistoryPoint", 0);
        
        showResult(recipe);
    }
}

async function checkPointInHistory(){
    const recipeHistory = localStorage.getItem("@recipeHistory");
    let historyArr = [];
    let historyPoint = localStorage.getItem("@recipeHistoryPoint");
    console.log({recipeHistory}, {historyPoint});
    if(recipeHistory !== null && historyPoint !== null){
        historyArr = JSON.parse(recipeHistory);
        showResult(historyArr[historyPoint]);
    }
    else{
        const recipe = await getNewRandomRecipe();
        localStorage.setItem("@recipeHistory", JSON.stringify([...historyArr, recipe]));        // historyArr openbreken en daar dan een object aan toevoegen in een localstorage
        localStorage.setItem("@recipeHistoryPoint", 0)                                          // localstorage van historypoint houdt bij op de hoeveelste plaats in de localstorage we zitten
        showResult(recipe); 
        document.querySelector('.js-back').style.display = "none";
    }
}

async function getNewRandomRecipe(){
    const recipe = await getData(`https://api.spoonacular.com/recipes/random?apiKey=${apiKey}`);
    return recipe.recipes[0];
}


const getData = async (endpoint) => {
    return await fetch(endpoint)
        .then((r) => { return r.json() })
        .catch((err) => console.error("Something went wrong: ", err));
}



document.addEventListener("DOMContentLoaded", function(){
    console.log("DOM Loaded");
    addEventListenerPage();
    checkPointInHistory();
});
const apiKey = "cd4c67af652c44a78cc397d1a044320c";
let nextBtn, backBtn;

let showResult = queryResponse => {
    let title = queryResponse.title;
    let dishTypes = queryResponse.dishTypes;
    let glutenFree = String(queryResponse.glutenFree);
    let vegan = String(queryResponse.vegan);
    let healthScore = queryResponse.healthScore;
    let image = queryResponse.image;
    let readyInMinutes = queryResponse.readyInMinutes;
    let servings = queryResponse.servings;
    let extendedIngredients = queryResponse.extendedIngredients;


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



    const calcDash = (level) => {
        const dash = Number(level);
        const result = (dash * (2 * 40 * 3.14159265359)/100);
        return result.toString();
    }

    const setColor = (level) => {
        const lvl = Number(level);
        let color = '#FFFFFF' 
        if(lvl <= 10){
            color = '#ff0000';
        }
        else if(lvl >= 10 && lvl < 20){
            color = '#ed1400';
        }
        else if(lvl >= 20 && lvl < 30){
            color = '#f13400';
        }
        else if(lvl >= 30 && lvl < 40){
            color = '#f55c00';
        }
        else if(lvl >= 40 && lvl < 50){
            color = '#f98000';
        }
        else if(lvl >= 50 && lvl < 60){
            color = '#ffb300';
        }
        else if(lvl >= 60 && lvl < 70){
            color = '#e0be00';
        }
        else if(lvl >= 70 && lvl < 80){
            color = '#cac600';
        }
        else if(lvl >= 80 && lvl < 90){
            color = '#a2d400';
        }
        else if(lvl >= 90){
            color = '#1fff00';
        }



        return color;
    }

    document.querySelector('.js-health-chart').innerHTML = `
    <div>
            <div class="c-logs-heat-data">
                    <svg
                        class='c-logs-heat-data-chart'
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 100 100"
                    >
                        <circle
                            class="c-logs-heat-data-chart__base-circle"
                            cx="50"
                            cy="50"
                            r="40"
                        />
                        <circle
                            class="c-logs-heat-data-chart__fill-circle"
                            style="stroke-dasharray: ${calcDash(healthScore)} 999;fill: none; stroke: ${setColor(healthScore)};" cx="50" cy="50" r="40"/>
                    </svg>
                    <div class='c-logs-heat-data-text'>
                        <h2 class='c-logs-heat-data-text__temp'
                            style="color: ${setColor(healthScore)};"
                        >
                            ${healthScore}%
                        </h2>
                    </div>

            </div>
        </div>
    `

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
    console.log({recipeHistory}, {historyPoint});

    if(recipeHistory !== null && historyPoint !== null){
        historyArr = JSON.parse(recipeHistory);
        newHistoryPoint = historyPoint - 1;
        showResult(historyArr[newHistoryPoint]);
        if(newHistoryPoint === 0){
            localStorage.setItem("@recipeHistoryPoint", 0)
            document.querySelector('.js-back').style.display = "none";
        }
        else{
            localStorage.setItem("@recipeHistoryPoint", newHistoryPoint)
            document.querySelector('.js-back').style.display = "block";
        }
    }
    else{
        const recipe = await getNewRandomRecipe();
        localStorage.setItem("@recipeHistory", JSON.stringify([...historyArr, recipe]));
        localStorage.setItem("@recipeHistoryPoint", 0)
        showResult(recipe); 
    }   
}

async function handleNext() {
    const recipeHistory = localStorage.getItem("@recipeHistory");
    let historyArr = [];
    let historyPoint = parseInt(localStorage.getItem("@recipeHistoryPoint"));
    console.log({recipeHistory}, {historyPoint});
    document.querySelector('.js-back').style.display = "block";
    if(recipeHistory !== null && historyPoint !== null){
        historyArr = JSON.parse(recipeHistory);
        newHistoryPoint = historyPoint+1;
        if(historyArr.length - 1 == historyPoint){
            const recipe = await getNewRandomRecipe();
            localStorage.setItem("@recipeHistory", JSON.stringify([...historyArr, recipe]));
            localStorage.setItem("@recipeHistoryPoint", newHistoryPoint)
            showResult(recipe); 
        }
        else{
            localStorage.setItem("@recipeHistoryPoint", newHistoryPoint)
            showResult(historyArr[newHistoryPoint]);
        }
    }
    else{
        document.querySelector('.js-back').style.display = "none";
        const recipe = await getNewRandomRecipe();
        localStorage.setItem("@recipeHistory", JSON.stringify([...historyArr, recipe]));
        localStorage.setItem("@recipeHistoryPoint", 0)
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
        localStorage.setItem("@recipeHistory", JSON.stringify([...historyArr, recipe]));
        localStorage.setItem("@recipeHistoryPoint", 0)
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
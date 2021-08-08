const apiKey = "cd4c67af652c44a78cc397d1a044320c"

let showResult = queryResponse => {
    // console.log(queryResponse);

    let title = queryResponse.recipes[0].title;
    let dishTypes = queryResponse.recipes[0].dishTypes;
    let glutenFree = String(queryResponse.recipes[0].glutenFree);
    let vegan = String(queryResponse.recipes[0].vegan);
    let healthScore = queryResponse.recipes[0].healthScore;
    let image = queryResponse.recipes[0].image;
    let readyInMinutes = queryResponse.recipes[0].readyInMinutes;
    let servings = queryResponse.recipes[0].servings;
    let extendedIngredients = queryResponse.recipes[0].extendedIngredients;

    console.log(queryResponse);
    // console.log(`healthScore: ${healthScore}`);
    // console.log(extendedIngredients)

    

    document.querySelector(".js-Title").innerHTML = `${title}`;
    document.querySelector(".js-Image").innerHTML = `<img src="${image}" alt="Here comes the image of the recipe" class="c-imagedetail js-Image ">`;
    document.querySelector(".js-Servings").innerHTML = `${servings}`;
    document.querySelector(".js-Time").innerHTML = `${readyInMinutes} min`;


    for (i = 0; i < dishTypes.length; i++)
    {
        document.querySelector(".js-DishTypes").innerHTML += 
        `<ul>
            <li>${dishTypes[i]}</li>
        </ul>`
    }






    if (glutenFree == "false")
    {
        document.querySelector(".js-GlutenFree").innerHTML = 
            `<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                <rect fill="none" height="24" width="24"/>
                <path d="M19,19H5V5h14V19z M3,3v18h18V3H3z M17,15.59L15.59,17L12,13.41L8.41,17L7,15.59L10.59,12L7,8.41L8.41,7L12,10.59L15.59,7 L17,8.41L13.41,12L17,15.59z"/>
            </svg>
            <p class="c-card-info__icontext">Gluten Free</p>`;
    }
    else
    {
        document.querySelector(".js-GlutenFree").innerHTML =
            `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                <path d="M0 0h24v24H0V0z" fill="none"/>
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM17.99 9l-1.41-1.42-6.59 6.59-2.58-2.57-1.42 1.41 4 3.99z"/>
            </svg>
            <p class="c-card-info__icontext">Gluten Free</p>`; 
    }
    if (vegan == "false")
    {
        document.querySelector(".js-Vegan").innerHTML = 
            `<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                <rect fill="none" height="24" width="24"/>
                <path d="M19,19H5V5h14V19z M3,3v18h18V3H3z M17,15.59L15.59,17L12,13.41L8.41,17L7,15.59L10.59,12L7,8.41L8.41,7L12,10.59L15.59,7 L17,8.41L13.41,12L17,15.59z"/>
            </svg>
            <p class="c-card-info__icontext">Vegan</p>`
    }
    else
    {
        document.querySelector(".js-Vegan").innerHTML =
            `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                <path d="M0 0h24v24H0V0z" fill="none"/>
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM17.99 9l-1.41-1.42-6.59 6.59-2.58-2.57-1.42 1.41 4 3.99z"/>
            </svg>
            <p class="c-card-info__icontext">Vegan</p>`; 
    }
    
    

    if (healthScore == 0)
    {

    }
    else if (healthScore >= 1 && healthScore < 5)
    {
        console.log("1 Ster");
        document.querySelector(".js-Star").innerHTML += 
            `<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                <g>
                    <path d="M0,0h24v24H0V0z" fill="none"/>
                    <path d="M0,0h24v24H0V0z" fill="none"/>
                </g>
                <g>
                    <path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/>
                </g>
            </svg>`
        
    }
    else if (healthScore >= 5 && healthScore < 10)
    {
        console.log("2 Sterren");
     
        let star = 2
        for (let i = 0; i < star; i++) 
        {
            document.querySelector(".js-Star").innerHTML += 
                `<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                    <g>
                        <path d="M0,0h24v24H0V0z" fill="none"/>
                        <path d="M0,0h24v24H0V0z" fill="none"/>
                    </g>
                    <g>
                        <path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/>
                    </g>
                </svg>`
        };
    
    }
    else if (healthScore >= 10 && healthScore < 15)
    {
        console.log("3 Sterren");
     
        let star = 3;
        for (let i = 0; i < star; i++) 
        {
            document.querySelector(".js-Star").innerHTML += 
                `<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                    <g>
                        <path d="M0,0h24v24H0V0z" fill="none"/>
                        <path d="M0,0h24v24H0V0z" fill="none"/>
                    </g>
                    <g>
                        <path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/>
                    </g>
                </svg>`
        };
    }
    else if (healthScore >= 15 && healthScore < 20)
    {
        console.log("4 Sterren");
     
        let star = 4;
        for (let i = 0; i < star; i++) 
        {
            document.querySelector(".js-Star").innerHTML += 
                `<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                    <g>
                        <path d="M0,0h24v24H0V0z" fill="none"/>
                        <path d="M0,0h24v24H0V0z" fill="none"/>
                    </g>
                    <g>
                        <path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/>
                    </g>
                </svg>`
        };
    }
    else if (healthScore == 20)
    {
        console.log("5 Sterren");
     
        let star = 5;
        for (let i = 0; i < star; i++) 
        {
            document.querySelector(".js-Star").innerHTML += 
                `<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                    <g>
                        <path d="M0,0h24v24H0V0z" fill="none"/>
                        <path d="M0,0h24v24H0V0z" fill="none"/>
                    </g>
                    <g>
                        <path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/>
                    </g>
                </svg>`
        };
    }

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

function nextRecipe() {
    document.querySelector(".js-show").innerHTML += "Hello boys";
    let url = `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}`;
    
    const data = fetch(url)
    .then((res) => res.json())
    .catch(err => console.error(err));
    showResult(data); 
}



const getApi = async () => {
    // let url = `https://api.spoonacular.com/recipes/716429/information?apiKey=${apiKey}`;
    // let url = `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}`;

    const data = await fetch(url)
    .then((res) => res.json())
    .catch(err => console.error(err));

    showResult(data);  
}

document.addEventListener("DOMContentLoaded", function(){
    console.log("DOM Loaded");
    getApi();
});
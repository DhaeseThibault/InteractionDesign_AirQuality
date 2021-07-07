const apiKey = "cd4c67af652c44a78cc397d1a044320c"

let showResult = queryResponse => {
    // console.log(queryResponse);

    let title = queryResponse.title;
    let dishTypes = queryResponse.dishTypes;
    let glutenFree = queryResponse.glutenFree;
    let vegan = queryResponse.vegan;
    let healthScore = queryResponse.healthScore;
    let image = queryResponse.image;
    let readyInMinutes = queryResponse.readyInMinutes;
    let servings = queryResponse.servings;
    let extendedIngredients = queryResponse.extendedIngredients;

    // console.log(`Title: ${title}`);
    // console.log(`dishTypes: ${dishTypes}`);
    // console.log(`glutenFree: ${glutenFree}`);
    // console.log(`vegan: ${vegan}`);
    // console.log(`healthScore: ${healthScore}`);
    // console.log(`image: ${image}`);
    // console.log(`readyInMinutes ${readyInMinutes}`);
    // console.log(`servings: ${servings}`);
    // console.log(`servings: ${servings}`);
    // console.log(extendedIngredients);

    for (let i = 0; i < extendedIngredients.length; i++)
    {
        let amountIngredient = extendedIngredients[i].amount
        let nameIngredient = extendedIngredients[i].name
        let unitIngredient = extendedIngredients[i].unit
        // console.log(`${amountIngredient} ${unitIngredient} ${nameIngredient}`)
    }
}



const getApi = async () => {
    let url = `https://api.spoonacular.com/recipes/716429/information?apiKey=${apiKey}`;

    const data = await fetch(url)
    .then((res) => res.json())
    .catch(err => console.error(err));

    showResult(data);
}

document.addEventListener("DOMContentLoaded", function(){
    console.log("DOM Loaded");
    getApi();
});
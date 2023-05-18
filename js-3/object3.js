// BONUS THREE 
let recipe = {}
recipe.name = 'Sandwich' // Add key and value
recipe.ingredients = []
let bread = {
    name: 'bread',
    amount: 2
}
let chesee = {
    name: 'Chesee',
    amount: 1
}
recipe.ingredients.push(bread)
recipe.ingredients.push(chesee)

let result = 0;
for (let i =0; i <recipe.ingredients.length; i ++){
    result += recipe.ingredients[i].amount;
}
console.log(recipe.ingredients[0]['name']);
console.log('Total ingredients amount: ' + result);


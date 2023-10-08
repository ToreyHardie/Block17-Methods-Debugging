
const coffeeMenu = require('./coffee_data');

console.log("Complete Drink Menu ")
console.log(coffeeMenu.map(item => item.name)); // filter out the drink names

console.log("Drinks $5 or less: ");
console.log(coffeeMenu.filter(item => item.price <= 5).map(item => item.name)); // filter out items where the price is less than 5


console.log("Even Number Drinks: ");
console.log(coffeeMenu.filter(item => item.price % 2 === 0).map(item => item.name)); //filter out where the price is evenly divided by 2


const total = coffeeMenu.reduce((tot, item) => tot + item.price, 0); //adding up the total prices of the drinks
console.log("Total price for One of Every Drink ", total);


console.log("Seasonal:");
console.log(coffeeMenu.filter(item => item.seasonal).map(item => item.name)); //filtering if the item is seasonal


console.log("Seasonal drinks - Imported beans:");
console.log(coffeeMenu.filter(item => item.seasonal).map(item => `${item.name} with imported beans`)); //filtering of the item is seasonal and printing with imported beans
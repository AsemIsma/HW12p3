let dinner = ['Pork cutlets with rice', 'Beef Stroganov', 'Carry', 'Lasagna', 'Pasta', 'Ratatuille'];

function chooseDish (dish) {
    if (dish.includes("Pork")) {
        console.log((dinner.indexOf(dish) + 1) + " day I eat " + dish.replace("Pork", "Chicken") + ".");
    } else if (dish.includes("Beef")) {
        console.log((dinner.indexOf(dish) + 1) + " day I eat " + dish.replace("Beef", "Chicken") + ".");
    } else {
        console.log((dinner.indexOf(dish) + 1) + " day I eat " + dish + ".");
    }
}

dinner.forEach(chooseDish)

let veganDinner = dinner.map(makeVegan)

console.log(veganDinner);

function makeVegan (dish) {
    if (dish.includes("Pork")) {
        return dish.replace("Pork", "Soy meat");
    } else if (dish.includes("Beef")) {
        return dish.replace("Beef", "Soy meat");
    } else {
        return dish;
    }
}

let dishesWithC = dinner.filter(checkIncludeC)

console.log(dishesWithC);

function checkIncludeC (dish) {
    if (dish.toLowerCase().includes("c")) {
        return dish;
    }
}

let prices = [12000, 6000, 9000, 3000];

let totalPrice = prices.reduce(countExpenses);

console.log(totalPrice);

function countExpenses (total, price) {
    return total + price;
}
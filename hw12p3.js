let dinner = ['Pork cutlets with rice', 'Beef Stroganov', 'Carry', 'Lasagna', 'Pasta', 'Ratatuille'];

dinner.forEach((dish) => {
        if (dish.includes("Pork")) {
            console.log((dinner.indexOf(dish) + 1) + " day I eat " + dish.replace("Pork", "Chicken") + ".");
        } else if (dish.includes("Beef")) {
            console.log((dinner.indexOf(dish) + 1) + " day I eat " + dish.replace("Beef", "Chicken") + ".");
        } else {
            console.log((dinner.indexOf(dish) + 1) + " day I eat " + dish + ".");
        }
    })

let veganDinner = dinner.map((dish) => {
    if (dish.includes("Pork")) {
        return dish.replace("Pork", "Soy meat");
    } else if (dish.includes("Beef")) {
        return dish.replace("Beef", "Soy meat");
    } else {
        return dish;
    }
})

console.log(veganDinner);

let dishesWithC = dinner.filter((dish) => {
    if (dish.toLowerCase().includes("c")) {
        return dish;
    }
})

console.log(dishesWithC);

let prices = [12000, 6000, 9000, 3000];

let totalPrice = prices.reduce((total, price) => {
    return total + price;
});

console.log(totalPrice);

let newArr = prices.concat(dinner);
newArr.sort((a, b) => {
    if (typeof(a, b) === 'string') {
        return a.length - b.length;
    } else if (typeof(a, b) === 'number') {
        return a - b;
    }
});
console.log(newArr);
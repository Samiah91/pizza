function pizzaoven(crustType,sauceType,cheese,toppings){
    var pizza={};
    pizza.crustType=crustType;
    pizza.sauceType=sauceType;
    pizza.cheese=cheese;
    pizza.toppings=toppings;
    return pizza;
}
var p1=pizzaoven("deep dish","traditional",["mozarilla"],["peproni","susage"]);
console.log(p1);

//second pizza
function pizzaoven(crustType,sauceType,cheese,toppings){
    var pizza={};
    pizza.crustType=crustType;
    pizza.sauceType=sauceType;
    pizza.cheese=cheese;
    pizza.topping=toppings;
    return pizza;
}
var p2=pizzaoven("hand tosted","marina",["mozarila,feta"],["mashrom","olive","onion"]);
console.log(p2);


//third pizza
function pizzaoven(crunchy,spicy){
    var pizza={};
    pizza.crunchy=crunchy;
    pizza.spicy=spicy;
    return pizza;
}
var p3=pizzaoven("italiano",["turkey"]);
console.log(p3);
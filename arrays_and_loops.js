let myList = [12, "Banana", true];

// const cars = [];
// cars[0]= "Saab";

// cars[2]= "BMW";

let fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.push("Kiwi", "Lemon");

let singletestvar = "asd";

function containsElement(array, element) {
    return array.includes(element, 0)
}



function initArrays() {
    // myList[0] = "No Banana";
   
    // fruits.includes("Banana", 3)
    
    console.log(containsElement(fruits, "Banana"));  
}
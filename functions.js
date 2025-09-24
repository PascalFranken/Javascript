let discount = 50;
let price = 500;

calculatePrice(50, 500);

price = 400;


calculatePrice(50,400);

// function calculatePrice() {
//     console.log((price - discount) * 1.19)              //Definition der Funktion die beliebig oft verwendbar ist
    
// }


function calculatePrice(discount, price) {
    console.log((price - discount) * 1.19)              //Definition der Funktion die beliebig oft verwendbar ist
    
}


function calculatePrice(discount, price) {
   let value = (price - discount) * 1.19;
  
   return value;  
    
}

console.log(calculatePrice(50,300));

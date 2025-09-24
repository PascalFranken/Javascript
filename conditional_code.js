
//Operator für Booleans

let myCondition = true;

myCondition = !myCondition;     // not Operator


myCondition = true || true || false;     //  or Operator

myCondition = true && true; // and Operator




//Operator für Strings bzw. Numbers

myCondition = 45 == "45";         // == testet ob exakt gleich, ohne Type. Deswegen gilt der String als gleich.

myCondition = 45 === "45";         // == testet ob exakt gleich, mit Type. Da es hier auch ein String ist zählt es nicht als gleich.

myCondition = 45 < 123;         //Größer Abfrage

myCondition = 45 <= 123;        //Größer gleich Abfrage, Reihenfolge der Operatoren ist wichtig

myCondition = 45 != "47";         // == testet ob exakt nicht gleich, ohne Type. Deswegen gilt der String als gleich.
myCondition = 45 !== 47;         // == testet ob exakt nicht gleich, mit Type. Da es hier auch ein String ist zählt es nicht als gleich.
myCondition = 45 !== "47";         // == testet ob exakt nicht gleich, mit Type. Da es hier auch ein String ist zählt es nicht als gleich.


console.log(myCondition)
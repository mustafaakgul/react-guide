var num = 14;
num = 16;
var num = 15;

console.log(num);

let city = "London";
// let city = "Paris"; // SyntaxError: Identifier 'city' has already been declared

function sayHi() {
  var name = "Lydia";
  console.log(name);
  console.log(num); //
}

sayHi();

for (let i = 0; i < 3; i++) {

}
// console.log(i); // ReferenceError: i is not defined

const constname = "Sara";
console.log(constname);
//constname = "asdasdasd"; // TypeError: Assignment to constant variable.

const cities = ["London", "Paris"];
cities.push("New York");
console.log(cities);
cities = ["California", "Hamburd"]; // TypeError: Assignment to constant variable.
// Reference Type
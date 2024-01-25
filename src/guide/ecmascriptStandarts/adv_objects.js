let isEquals = [] == []; // false
console.log(isEquals); // cuz of the different memory allocation, its referance type that is stored in different memory allocation

let iseq = [1,2] === [1,2]; // false
console.log(iseq); // cuz of the different memory allocation, its referance type that is stored in different memory allocation

var object1 = { value: 10 };
var object2 = { value: 10 };

console.log(object1 === object2); // differenct memonry allocation, its referance type that is stored in different memory allocation
// curly braces {} is an object, {} means stores different location in memory


console.log(this); // this is a keyword that refers to the object it belongs to


const productService = {
    add: function (){
        console.log(this);
    }
}

productService.add(); // this refers to the productService object
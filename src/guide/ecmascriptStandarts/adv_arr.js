const arrayx = [1, 2, 3, 4,];

const array2 = [];

arrayx.forEach(num => { // this { mean is can be do many this in curly braces {}
    console.log(num);
})

arrayx.forEach(num => {
    array2.push(num * num);
})

console.log(array2);
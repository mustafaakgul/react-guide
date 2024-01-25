// Decl 1
function hi(){
    console.log("hi");
}

// Decl 2: Same as Decl 1 - hi(), its new generation function declaration, Use this type
// Functions are reference types so can be assigned any data -stack / heap-
var hifunc = function hello(){
    console.log("hello");
}

// Decl 3: Same as Decl2 but it is arrow func, so can be used more
// helloFunc a variable that equals a function, that can be understand with symbol ()
// so it equals too with symbol =>
const helloFunc = () => {
    console.log("helloFunc");
}
// for one line can be used like -> const hii = () => console.log("asda);

const hiWithParam = (message) => {
    console.log(message);
}

var hiWithReturn = (message) => {
    return message * 2
}

hi()
hifunc()
helloFunc()
hiWithParam("World")
let result = hiWithReturn(5)
console.log(result)
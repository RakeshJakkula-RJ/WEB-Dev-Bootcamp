
// Function types 
// 1. Normal Function

function name(x){

  console.log(x);
}
// x ----> parameter
// RJ ----> arguments

name("RJ");

// 2. Anonymous function(a function which does not have name)

let print = function (b) {
    console.log(b);
}

print(1);

// 3. Arrow function (Anonymous arrow function)

let print2 = (c) => {

    console.log(c);
};

print2("Robby");
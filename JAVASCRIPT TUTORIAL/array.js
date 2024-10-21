// Array : Array is a collection of Data Types.

// let name = ["miguel", "Robby", "Hawk", "Demetri"];

// console.log(name[0]);
// console.log(name[1]);
// console.log(name[2]);
// console.log(name[3]);

// console.log(name.length);

// for(let i=0; i<name.length; i++){
//     console.log(name[i]);
// }

let arr = ["miguel", "Robby", "Hawk", "Demetri"];

// adding elements to the last

arr.push("Jhonny Lawremce");  //syntax to add elements to the last element of an array;



console.log(arr);

arr.pop();  // synatx to delete or remove the last element from an array;

console.log(arr);

let array = ["Robby", "Miguel", "Hawk", "Eli", "Demetri"];

let array2 = ["Sam", "Tory", "Jhonny", "Daniel"];

// Spread Operator(...);

let array3 = [...array, ...array2];

console.log(array3);
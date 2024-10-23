
// find the maximum and minimum numbers in a given array
// highest and lowest 

let array = [0, 3, 46, 246, 430, 567, 999];

let highest = -Infinity;

let lowest = +Infinity;

for(let i=0; i<array.length; i++){
    if(highest < array[i]){
        highest = array[i];
    }
    if(lowest > array[i]){
        lowest = array[i];
    }
}

console.log(lowest);
console.log(highest);

// find how many words are there in a sentence 

let str = "hi everyone i am doing great";

let space = 0;

for(let i=0; i<str.length-1; i++){
    if(str[i] === " "){
        space++;
    }
}

console.log(space + 1);


// given an array find the overall total number of letters

let arr = ["Rakesh", "Godavarikhani"] //19

let letter = 0;

for(let i=0; i<arr.length; i++){
    letter = letter + arr[i].length; 
}

console.log(letter);


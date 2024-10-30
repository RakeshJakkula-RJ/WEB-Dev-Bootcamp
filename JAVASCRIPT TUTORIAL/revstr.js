
// Write a function to reverse a string 

// Rakesh ----> hsekaR

let string  = "Rakesh";

function reverseString(string){

    let bag = " ";

    for(let i=string.length-1; i>=0; i--){

        bag = bag + string[i];
    }
    return bag;
}

let result = reverseString(string);

console.log(result);



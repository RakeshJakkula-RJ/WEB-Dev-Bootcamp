
// convert  a array into a string.

let array = [1,2,3];

let n = array.length;

function array_to_string(array,n){
    
let result = " ";

    for(let i=0; i<n; i++){

       result = result + array[i];
    }
    return result;
}

let output = array_to_string(array,n)

console.log(output );
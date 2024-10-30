
// check if the given array has any palindrome are not 

let string  = "Rakesh";

function reverse(string){

    let bag = " ";

    for(let i=string.length-1; i>=0; i--){

        bag = bag + string[i];
    }
    return bag;
};

let array = ["miguel", "Robby", "Sam", "Tory", "Hawk", "naman", "wow", "sas", "pop"];
    
for( let i=0; i<array.length; i++){

    let result = reverse(array[i], array[i].length);

    if(result === array[i]){
     console.log(array[i], "is not a palindrome");
    }
    else{
         console.log(array[i], "is  a palindrome")
    }
}


   
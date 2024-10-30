
// write a function which should take  number and return true and false,
// if the number is even return true else return false.

// find the count of even number n given array.

let array = [1,2,3,4,5,6,7,8,9,10];


function check_even_or_odd(number){

   if(number % 2 == 0){

       return true; // even 
   }
   else{
      
    return false; //odd
   }
};

let count = 0;

for(let i=0; i<array.length; i++){
 
    let result = check_even_or_odd(array[i]);

    if(result){

        count++;
    }
};

   console.log(count)
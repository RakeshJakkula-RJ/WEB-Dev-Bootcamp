
let array = [1,2,3,4,5,6,7,8,3,4,5,6]; // output : 3, 4, 5, 6

// Print the elements whose occurance is 2 or more. 
// Print the sum of elements whose occurance is 2 or more.

let object = { };

for(let i=0; i<array.length; i++){

    if(object[array[i]] == undefined){
        object[array[i]] = 1;
    }
    else{
        object[array[i]]++;
    }
};

  console.log(object);

  let sum = 0;

  for(let key in object){
    if(object[key] >= 2){
    
        sum = sum + Number(key);
        // Number is a 'keyword' where string's number is converted into actual number 
        //to sum the elements to avoid string to string concatination
        
    }
  };

    console.log(sum);
 
 

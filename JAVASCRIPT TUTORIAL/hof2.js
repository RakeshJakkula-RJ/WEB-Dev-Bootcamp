
// [1,2,3,4,5,6] -----> input 
// [2,4,6] -----> output 

 function evenNumber (array){

    let output = [];

    for(let i=0; i<array.length; i++){

        if(array[i]%2==0){

            output.push(array[i]);
        }
    }
    return output;
};

let result = evenNumber([1,2,3,4,5,6]);

console.log(result);


function addEvenNumber(evenFun, array){

    let evenNumberArray = evenFun(array);

      let sum = 0;

      for(let i=0; i<evenNumberArray.length; i++){

        sum = sum + evenNumberArray[i];
      }
      console.log(sum);
};

addEvenNumber(evenNumber, [1,2,3,4,5,6,7,8,9]);

// HOF ---> addEvenNumber 
// Call Back function ----> evenNumnber.
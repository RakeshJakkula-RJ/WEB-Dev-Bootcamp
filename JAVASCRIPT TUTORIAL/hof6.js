
// [2,4,6,8,10,12]; -----> map

// [2,4,6,8,10]; -----> filter (even, <10)

/* sum of this entire element,
    array[2,4,6,8,10]----> reduce */

    let array = [1, 2, 3, 4, 5, 6];

    let mapResult = array.map((element) => {

        return element * 2;
    });

       console.log(mapResult);

  
  let filterResult = mapResult.filter((element) => {

    if(element <= 10 && element % 2 ==0){

        return element;
    }
  });

       console.log(filterResult);


let reduceResult = filterResult.reduce((element, sum) => {

       sum = sum + element;
       return sum;

}, 0);
    
        console.log(reduceResult);


// short hand notataion 

// let array = [1, 2, 3, 4, 5, 6];

// let result = array.map((element) => element * 2)
//    .filter((element) => element <= 10)
//    .reduce((element, sum) => sum = sum + element, 0);

//        console.log(result)
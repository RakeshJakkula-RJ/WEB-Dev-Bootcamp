
// HOF inbuilt function(methods).

// we use 'HOF' only for array.

// 5.reduce.

let array = [1,2,3,4,5,6,7,8,9,10];

let result = array.reduce(function(sum, element){
   
    if(element % 2==0){
        sum = sum + element;
    }
          return sum;
},0);

  console.log(result);

  // HOF----> reduce : it will return a single value.

  // map
  // forEach
  // filter
  // sort
  // reduce

  // 1.map : map always returns new array,
  // But the length will be same as old array.

  let array1 = [1,2,3,4,5,6]; 

//   let res = array1.map(function(element){

//       return element*2;
//       // [1*2, 2*2, 3*2, 4*2, 5*2, 6*2];
//       //  [2, 4, 6, 8, 10, 12]

//   });

let res = array1.map((element)=>element*3);

      console.log(res);
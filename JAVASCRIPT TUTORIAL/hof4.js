
// 3. Filter 
// filter returns a new array. but the length of the new array changes bases on the condition.

let array = [1,2,3,4,5,6,7,8,9,10];

let result = array.filter(function(element){

    return element % 2 == 1;
});

   console.log(result);

   // 5.reduce (short hand notation);
   // reduce returns a single value 
   // it takes two arguments 
   // 1.function & 2. initial value.

   let arr = [1,2,3,4,5]; // +0(initial value)

   let res = arr.reduce((element, sum) => (sum = sum + element),0);
   console.log(res);
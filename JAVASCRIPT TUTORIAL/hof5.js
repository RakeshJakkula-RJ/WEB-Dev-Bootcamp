
// 2. forEach : it will not return new array,
// it is ust used to iterate over an array.

let array = [4,5,6,7,8];

let result = array.forEach((element) =>{ 

     return element * 2;
});
    
    console.log(result);


// 4. Sort : it is used to sort numbers either scending order or descending order.

// sorting : Arranging elements in a specific order, ascending or descending order.

let arr = [1,3,9,99,333,53,699];

let res = arr.sort(function(a,b) {
     
      return a - b ; // low to high 
    //  return b - a; // high to low 
});

    console.log(res);
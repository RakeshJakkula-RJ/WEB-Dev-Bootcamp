
// given an array of numbers find the average of all the even numbers;

let array = [1, 2, 3, 4, 5];

// even numbers = 2, 4 ----> 2+4= 6/2 = 3
// average = 3(output)

let sum = 0;
let count = 0;

for(let i=1; i<array.length; i++){
    if(array[i] % 2 == 0){
        sum = sum + array[i];
        count++;
    }
}

console.log(sum/count);

let arr = [1, 2, 3, 4, 5]

//output : reverse array
// 5 
// 4
// 3
// 2
// 1

for(let i=arr.length; i>=0; i--){
    console.log(arr[i]);
}

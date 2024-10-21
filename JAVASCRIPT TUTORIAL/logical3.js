
// print the sum of all multiples of 5 from 0 to 10;

let x = 0;

let sum = 0;

while(x<=10){
    if(x%5==0){
        sum = sum+x;
    }
    x++;
}

console.log(sum);


// what is the average of 1-5 numbers 

// sum of number/count = average;

let number = 1;
let summ = 0;
let count = 0;

while(number <= 5){
    summ = summ + number;
    count++;
    number++;
}

console.log("average is", summ/count);
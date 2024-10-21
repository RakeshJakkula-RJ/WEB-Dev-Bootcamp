// print the sum of numbers that are divisible by 
//2 and 5 in between 1-20 numbers;

let sum = 0;

for(let i=1; i<=20; i++){
    if(i%2==0 && i%5==0){
        sum = sum + i;
    }
}

console.log(sum);


//print prime numbers from 2 to 10 in a given limit

for(let i=2; i<=10; i++){

let number = i;

let count = 0;

for(let j=1; j<=number; j++){
    if(number % j == 0){
        count++;
    }
}
if(count == 2){
    console.log(number, "is a prime number");
}
else{
    console.log(number, "is not a prime number");
    } 
}
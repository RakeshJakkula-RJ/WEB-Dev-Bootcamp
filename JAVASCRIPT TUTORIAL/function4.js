
// Check  if a number is prime or not.

function check_prime(number){

    let factor = 0;

    for(let i=2; i<number; i++){
        
        if(number%2==0){
            factor++;
        }
    }
    (factor > 1) ? console.log(number, "is not a prime number") 
                 : console.log(number, "is a prime number");
}

for(let i=3; i<=10; i++){

    check_prime(i);
}
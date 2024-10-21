
// Print the sum of numbers from  1-10 using for loop


let sum = 0;

for(let i=0; i<=10; i++){
    sum = sum + i;
}

console.log(sum);


// print numbers in horizontal manner
//1-5 
// 1 2 3 4 5;

let bag = "";

for(let i=1; i<=5; i++){
    bag = bag + i + " ";
         //bag = "" + 1 + " "------>1_
         //bag = "1" + 2 + " "------>1_2_
         //bag = "1_2"+ 3 +" "------>1_2_3...
}

console.log(bag);


//print 1*2*3*4*5*;

let box = "";

for(let i=1; i<=5; i++){
    box = box + i + "*";
}
console.log(box);

// find the products of 1-5;

let product = 1;

for(let i=1; i<=5; i++){
    product = product * i;
}
console.log(product);
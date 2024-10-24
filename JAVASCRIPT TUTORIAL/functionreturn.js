
// return statement ------> Function 
// return statement is created only for functions in js.
// so,return statement is only used in functions.

function sum(a,b){

    return a + b;
}


function mul(a,b,c){

    let sumResult = sum(a,b);

    console.log(c*sumResult);  //3*1+2 = 3*3 = 9
}

   mul(1,2,3);

   mul(4,5,6);
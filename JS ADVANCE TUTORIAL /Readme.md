## Asynchronous Programming

js will read each line and execute it
it will only handle one line at a time--> synchronous.

## execution context.

        1. creation phase or memory phase
        2. execution phase.

let a=10;
console.log(a);

1.  creation phase - all the variable , function declaration will be stored here.

        let a; var b; const name;

        - by default the js ---> undefined.

        print: function print(){

        }

2.  execution phase.
    - a= 10;
      console.log(a);--->print.

## Hoisting

    - it is a default behaviour where function declaration and variable
    will  move to the top of the scope before code execution.
        - global scope
        - block scope

---

let a=10;
function print(){

    let b=20;
    console.log(a);

}
print();

execution context 1. creation phase - let a: undefined - print: function print(){
let b=20;
console.log(a);
}

    2. execution phase.
        - let a=10;

        - we are calling a function
                - execution context.
                        - creation phase.
                            - let b: undefined
                        - execution phase.
                            b=20;
                            console.log(b);


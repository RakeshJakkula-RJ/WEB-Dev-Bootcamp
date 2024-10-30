
// Write a function to reverse a array 


let string  = "Rakesh";

function reverse(string){

    let bag = " ";

    for(let i=string.length-1; i>=0; i--){

        bag = bag + string[i];
    }
    return bag;
};

let array = ["miguel", "Robby", "Sam", "Tory", "Hawk", "naman", "wow", "sas", "pop"];

     let reverseArray = [];
     //let reverseArray = ["leugim", "yobbR", "maS", "yroT", ....];

    for(let i=0; i<array.length; i++){
        // i=0;  0<9(T); 0+1-->i=1 leugim 
        // i=1;  1<9(T); 1+1---> i=2 yobbR
        // i=2;  2<9(T); 2+1---> i=3; maS
        // i=3;  3<9(T); 3+1---> i=4; yroT

        let result = reverse(array[i], array[i].length);

        reverseArray.push(result);
    };

    console.log(reverseArray);









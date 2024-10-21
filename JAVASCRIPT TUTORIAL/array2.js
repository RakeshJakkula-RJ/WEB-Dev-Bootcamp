
//find how many strings re there in an array

let a = [1, 2, 3, "hello", "h", "b", 33, true, "hi", "FLM", "Joy", "RJ"];

let count = 0;

for(let i=0; i<a.length; i++){
    if(typeof(a[i]) === typeof("")){
        count++;
    }
}

console.log(count);

// give me this output 

// 1 Robby
// 2 Miguel
// 3 Hawk
// 4 Sam
// 5 Tory

let name = ["Robby", "Miguel", "Hawk", "Sam", "Tory"];

for(let i=0; i<name.length; i++){

    console.log(i+1, name[i]);
}

// let character = "b"; // B

let character = "a"; //  A

let lower = ["a", "b", "c", "d"];

let upper = ["A", "B", "C", "D"];

for(let i=0; i<lower.length; i++){
    if(character === lower[i]){
        console.log(upper[i]);
        break; // to stop the loop
    }
}
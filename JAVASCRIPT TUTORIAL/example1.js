
// String : collection of set of characters

let name = "Batman";

console.log(name.length);

console.log(name[4]);

let a = "Tory"; // T ----> L 
// Lory;

let output = "";

for(let i=0; i<a.length; i++){
    if(a[i] === "T"){
        output = output + "L";
    }
    else{
        output = output + a[i];
    }
}

 console.log(output);
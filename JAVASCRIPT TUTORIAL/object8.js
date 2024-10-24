
let array = [1,2,3,4,5,45,1,2,3,4,5,6,7,8];

// convert this object into array with their occurances. 
// output : 1 2 3 4 5 

let object = { };

for(let i=0; i<array.length; i++){

    if(object[array[i]] === undefined){
        object[array[i]] = 1;
    }
    else{

        object[array[i]]++;
    }
     
}

   console.log(object);

   for(let key in object){

    if(object[key] >= 2){
        console.log(key);
    }
   }

let string = "mahesh";
// find unique elements in a string

  let object = { };

  for(let i=0; i<string.length; i++){

    if(object[string[i]] == undefined){
        object[string[i]] = 1;
    }
    else{
        object[string[i]]++;
    }
  }

  console.log(object);

  for(let key in object){
    if(object[key] == 1){
        console.log(key);
    }
  }
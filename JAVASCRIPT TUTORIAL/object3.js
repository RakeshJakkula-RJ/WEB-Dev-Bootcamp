
// in arrays we use for loop or while loop 
// but in objects we have to use for in loop 
// while loop / for loop 

let details = {
    name    : "Rakesh RJ",
    age     : 24,
    address : "GDK",
    pincode : 505209,
 had_dinner : false,
};

// for in loop syntax
// inside for in loop we don't have access to use Dot(.) notation 
// We have to use Bracket notation []

// syntax to print key's in a object using for in loop
for(let key in details){   
    console.log(key);  // all keys
};


// syntax to print value's in a object using for in loop
for(let key in details){   
    console.log(details[key]);  // all values
};
// Object : Object is a collection of properties, 
// object = Key and value,
// object have unique keys 

let details = {
     name    : "Rakesh RJ",
     age     : 24,
     address : "GDK",
     pincode : 505209,
  had_dinner : false,
};

console.log(details);

// Dot Notation(.);
console.log(details.name);
console.log(details.age);


// Bracket Notation [ ];
console.log(details["address"]);
console.log(details["had_dinner"]);

// Adding elements in the object

// adding elements into opbject uisng Dot Notation (.);
details.hobbies = "Cricket";
console.log(details);

// adding elements into opbject uisng Bracket Notation [ ];
details["phone_number"] = 123456789;
console.log(details);

// updating data in the object using Dot Notation (.); 
details.age = 25;
console.log(details);

// updating data in the object using Bracket Notation [ ];
details["had_dinner"] = true;
console.log(details);

// To delete data from the objects 

delete details.had_dinner;
console.log(details);

delete details["pincode"];
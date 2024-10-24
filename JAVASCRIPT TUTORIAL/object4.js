// 1. update name (your name)
// 2.I want to print name value
// 3. Creating a new key and value called father_name = "your father name"
// 4. delete phone number
// 5.iterate over entire object using for in loop and print keys

let details = {
      Name : "Rakesh",
       age : 24,
   address : "GDK",
   phone   : 123456789,
};

// 1. Update name (your name);
details.Name = "Rakesh RJ";
console.log(details);
   
// 2.I want to print name value;
console.log(details.Name);

// 3. Creating a new key and value called father_name = "your father name";
details.father_name = "Srinivas";
console.log(details);

// 4. delete phone number, we can delete phone number from details using 'delete' keyword;
delete details.phone;
console.log(details);

// 5.iterate over entire object using for in loop and print keys;
for(let key in details){
    // console.log(key);  //keys
    console.log(details[key]); //values
}

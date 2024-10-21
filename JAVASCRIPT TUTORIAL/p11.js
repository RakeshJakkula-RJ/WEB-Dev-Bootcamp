// elgibility to get married
// male---->21
// female---->18

// let gender = "female";
let gender = "male";
let age_of_male = 21;
let age_of_female = 18;

// if(age_of_male>=21 && age_of_female>=18){
//     console.log("both are eligible to get married");
// }
// else{
//     console.log("not eligible to get married");
// }

 if((gender === "male" && age_of_male>=21) || (gender === "female" && age_of_female>=18)){
    console.log("both are eligible to get married");
 }
 else{
    console.log("not eligible to get married");
 }

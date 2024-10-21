//given storedUsername and password and input userName and password , 
// print if the user can log in or not 
// if userName and password match he can login 

let storedUserName = "Miguel Diaz";
let storedPassword = "139";

// let inputUsername = "M Diaz"
// let inputPassword = "999";

let inputUsername = "Miguel Diaz"
 let inputPassword = "139";


if(storedUserName === inputUsername){
    if(storedPassword === inputPassword){
        console.log("login successfull...");
    }
    else{
        console.log("please check your password");
    }
}
else{
    console.log("please check your userName");
}
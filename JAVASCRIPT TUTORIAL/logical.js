// I want to buy an iphone 
// It should be black or lightblue in color 
// It should cost 80,000 or less than 80,000

let mobile_in_store = "iphone";

let dream_mobile = "iphone";

let colorInStore = "Black";

let price = 80000;

let budget = 80000;

if((mobile_in_store === dream_mobile) &&
 (colorInStore === "Black" || colorInStore === "LightBlue") && (budget>=price)){
         console.log("I can buy an iphone");
}
else{
    console.log("i can't buy an iphone");
}


// Higher Order Function : A function which takes another function as argument is 'HOF'.

function parent(a){ //HOF

    a();
};

parent(function(){   // Call Back function
 
console.log("this is called function");
});

// Call Back Function : A function which is passed as a argument in another function is "Call Back Function".



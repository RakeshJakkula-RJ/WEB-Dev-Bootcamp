// Object Method
// method =  function.  

// whenever we write a function inside a object then it is called method.

 let form = {

       name : "Rakesh RJ",
       age :  24,
       address : "GDK",

       print : function(){     // Aznonymous function
           
        console.log("hello js...");

       }
 };

      form.print();

// Default Parameters

function print2(a,b){
    console.log(a,b);
};
   
    print2(); // undefined

    // we can also pass the values to the parameters inside the constructor itself,
    // but if we dont pass any values js will throw undefined by default.

    function details(a="hllo", b="everyone"){

        console.log(a,b);
    };

    details();
   
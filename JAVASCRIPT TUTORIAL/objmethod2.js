
// to traget the keys inside an object-method a special keyword is introduced
// that keyword is 'this' keyword 
// 'this' keyword targets the keys inside an object method.

let object = {

    name : "RJ",
    age : 23,
    place : "GDK",

    print : function(){
            
        console.log(this.name);  // this keyword
        console.log(this.age);
        console.log(this.place);
    }
};

    object.print();
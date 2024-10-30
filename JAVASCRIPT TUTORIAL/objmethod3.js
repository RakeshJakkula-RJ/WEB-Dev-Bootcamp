
// create a object method you need to write he length and width of rectangle.
// in this object write  functions.

// 1.function : to check the area of the recrangle. 
      // formula : length*width
//  2.function : to check the poerimeter of the rectangle. 
       // formula : 2*(length + width)

let object = {

    length : 10,
    width  : 20,

    area : function(){

        console.log("area-", this.length * this.width);
    },
    perimeter : function(){
       
        console.log("perimeter-", 2*(this.length + this.width));
    }
};

   object.area();
   object.perimeter();
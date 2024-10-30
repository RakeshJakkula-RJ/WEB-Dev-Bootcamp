
// write a function to print each and every element inside this array.

  let object = {

      array : ["Miguel", "Robby", "Hawk", "Sam", "Tory"],

      print : function(){

        for(let i=0; i<this.array.length; i++){
            console.log(this.array[i]);
        }
      }
  };

  object.print();
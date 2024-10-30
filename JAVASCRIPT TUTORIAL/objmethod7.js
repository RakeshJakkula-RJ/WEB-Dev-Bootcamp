
// create a object with following functionality.

// 1. ability to add  3 student details nd their marks in 3 subject.
// 2. method to find student with the least total.
// 3. method to find the least total.

let details = {

    data : [],
    addStudent : function(name, english, maths, physics){
        let object = {} ;
        object.name = name;
        object.english = english;
        object.maths = maths;
        object.physics = physics;

        this.data.push(object);
    },

    leastTotal : function(){

          let lowerScore = +Infinity;
          let lowStudent = null; // empty

          for(let i=0; i<this.data.length; i++){

              let total = this.data[i].english + this.data.maths + this.data.physics;

               if(lowerScore > total){

                    lowerScore = total;
                    lowStudent = this.data[i].name;
               }
          }

          console.log("lowStudent", lowStudent);
    },

};

   details.addStudent("Miguel",44,56,39);
   details.addStudent("Robby",42,53,32);
   details.addStudent("Hawk",48,59,30);

   console.log(details.data);

   details.leastTotal();

// given an array find the unique items in the array

// for loop is for array's
// 'for in loop', is specially designed for objects so, we have to use only for in loop for objects.

let arr = ["Robby", "Miguel", "Hawk", "Sam", "Tory", "Jhonny", 
                "Daniel", "Cobrakai", "Laruuso", "Demetri",
          "Jhonny", "Daniel", "Cobrakai", "Laruuso", "Demetri",
          "Jhonny", "Daniel", "Cobrakai", "Laruuso", "Demetri"];

          // unique items : "Robby", "Miguel", "Hawk", "Sam", "Tory";

          let object ={ };
          
          for(let i=0; i<arr.length; i++){
            //  object[arr[i]] = 1;
            if(object[arr[i]] == undefined){
                object[arr[i]] = 1;
            }
            else{
                object[arr[i]]++;
            }
          };

          console.log(object);

          for(let key in object){
            if(object[key] == 1){
                console.log(key);
            }
          }

let container = document.getElementById("main");

 const getData = async () => {

    try{

         let response = await fetch('http://localhost:3000/posts');  // CRUD : 1.Read---> get() data

         let data = await response.json(); // json data to object data

         console.log(data);

    }
    catch(error){

        console.log(error);

    }

 }

    getData();


    

    const postData = async function () {

      let newData = { id: "3",  title: "my title", views: 300 };

        try{

            let response = await fetch('http://localhost:3000/posts',  
                   {method : "POST",
                     body : JSON.stringify(newData), // to convert object to json data
                     header : {
                        "Content-Type" : "application/json"
                     }
                   });   // CRUD : 2.Create--->post() data
        }

        catch(error){

          console.log(error);
        }
     
    }
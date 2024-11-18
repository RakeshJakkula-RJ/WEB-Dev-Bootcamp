

let APIKEY = "rJLHPlA75UiaM4bF8PAKRPYXLo6c4vYe"; //keeping the APIkey in Global scope 

// Home Page 

// we are targeting the home page button by using main() function 


  const main = async () => {
        
    try{
        let response = await fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${APIKEY}`);

      let data = await response.json(); // json ---> object

    //   console.log(data.data);

      appendingToDom(data.data);  // array of object

    }
    catch(error){

          console.log(error);
    }  

  };

    const appendingToDom = (data) => {

         let gifContent = document.getElementById("gif");

          let stickerContent = document.getElementById("sticker");

          let main = document.getElementById("main");

          gifContent.innerHTML = "";
  
          stickerContent.innerHTML = "";

          main.innerHTML = "";

          data.forEach((element) => {

              let image = document.createElement("img");

              image.src = element.images.downsized.url;

               image.addEventListener("click", function(){

                     detail_gif(element.id);

               });
               main.append(image);
          }); 
         
     };

     main();


     const detail_gif = (id) => {

        localStorage.setItem("details", JSON.stringify(id));

        window.location.href = "gifDetails.html";

     };


     const gif = async () => {

          let query = document.getElementById("search").value;

          if(query === ""){

              alert("please provide your input");

          }
          else{
            try{
                let url = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&q=${query}`;

            let response = await fetch(url);

            let data = await response.json();

            // console.log(data);

            appendingToDom(data.data);

            }
          catch(error){

              console.log(error);

          }
         
        }
        
     }
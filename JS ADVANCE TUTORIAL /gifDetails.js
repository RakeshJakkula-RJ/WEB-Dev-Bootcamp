

let APIKEY = "rJLHPlA75UiaM4bF8PAKRPYXLo6c4vYe"; //keeping the APIkey in Global scope 


  const details = async () => {

     let id = JSON.parse(localStorage.getItem("details"));

     try{
        let response = await fetch(`https://api.giphy.com/v1/gifs/${id}?api_key=${APIKEY}`);

      let data = await response.json(); // json ---> object

    //   console.log(data.data);

     appendingToDom(data.data);  // array of object

    }
    catch(error){

          console.log(error);
    }  

  };

   details();

    const appendingToDom = (data) => {

        let details = document.getElementById("details");

        let image = document.createElement("img");

         image.src = data.images.downsized_medium.url;

         details.append(image);

    }
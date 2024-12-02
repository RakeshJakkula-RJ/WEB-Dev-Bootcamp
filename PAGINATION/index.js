
// constants

const mainSection = document.getElementById("data-list-wrapper");

const paginationWrapper = document.getElementById("pagination-wrapper");


//utility function 
function fetchAndRenderUsers(pageNumber){

      fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`)
      .then(function(response){


           let totalPosts = response.headers.get("X-Total-Count");

           let totalButtons = Math.ceil(totalPosts/10);

           paginationWrapper.innerHTML = null;

            for(let i=1; i<=totalButtons; i++){

                paginationWrapper.append(getAsButton(i, i));

            }

            return response.json();

      })
      .then(function(data){

        //   console.log(data);

          mainSection.innerHTML = null;

         let cardList = appendingCardList(data);

         mainSection.append(cardList);

      })
      .catch((error) => {
              
         console.log(error);
      })
    
 };


    fetchAndRenderUsers(1);


    function appendingCardList(data){
 
         const cardList = document.createElement("div");

         cardList.classList.add("card-list");

         

         data.forEach((item) => {

            let card = getCard(item.id, item.title, item.body, null);

                  cardList.append(card);

         });

           return cardList;

    };


    function getCard(userId, fullName, body, imageUrl){


         const card = document.createElement("div");

         card.classList.add("card");

         card.setAttribute("data-id", userId);

         const cardBody = document.createElement("div");
          cardBody.classList.add("card-body");

          const cardTitle = document.createElement("div");
            cardTitle.classList.add("card-item");
            cardTitle.classList.add("card-title");
            cardTitle.innerText = fullName;

            const cardDescription = document.createElement("div");
               cardDescription.innerText = body;
               cardDescription.classList.add("card-item");
               cardDescription.classList.add("card-description");

               card.append(cardBody);
               card.append(cardTitle);
               card.append(cardDescription);

               return card;

    };
      
      
   function getAsButton(text, dataId){

      let btn = document.createElement("button");

        btn.setAttribute("data-id", dataId);
         btn.innerHTML = text;


         btn.addEventListener("click", function(e){
             
              fetchAndRenderUsers(e.target.dataset.id);
               console.log(e.target.dataset.id);

         });

          return btn;

   };
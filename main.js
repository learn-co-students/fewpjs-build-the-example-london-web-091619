// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const modal = document.querySelector('#modal')


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------
 



document.addEventListener("DOMContentLoaded", function(){

//grab the element
//change it 
// append the changes


let likes = document.querySelectorAll(".like")
 document.addEventListener('click', function(e){
 errorMessage()
  
   if (e.target.innerText === "Like! ♡"){
  e.target.firstElementChild.innerText = FULL_HEART
  e.target.firstElementChild.className = "activated-heart"
   }

   else if (e.target.innerText === "Like! ♥"){
     e.target.firstElementChild.innerText = EMPTY_HEART
     e.target.firstElementChild.className = "like-glyph"

   }
})


function errorMessage(){
  mimicServerCall().catch(function(error){
    modal.className = ""
    modal.innerHTML = error
    setTimeout(function(){
      modal.className = "hidden"
    }, 5000)

  })

}


})


function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
 
}
// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

let glyphStates = {
  '♡':'♥',
  '♥':'♡'
};

let colorStates = {
  "red": "",
   "" : "red"
}

document.addEventListener("DOMContentLoaded", function(){

  const heart = document.querySelector(".like-glyph")
  const like = document.querySelector(".like")


  heart.addEventListener("click", function(){
    mimicServerCall()
    .then(function(serverMessage){
      heart.innerText = glyphStates[heart.innerText];
      heart.style.color = colorStates[heart.style.color];
    })
    .catch(function(error){
      setTimeout(() => document.querySelector("#modal").className = "hidden", 5000)
      document.querySelector("#modal").className = ""
  })
  })
})



//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

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

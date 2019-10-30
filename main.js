// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

const heart = document.querySelectorAll(".like-glyph")
const heartClass = document.querySelectorAll(".like")
const hiddenError = document.getElementById("modal")
// Your JavaScript code goes here!

document.addEventListener("click", function(event){
  
  errorMessage()

if (event.target.innerHTML === EMPTY_HEART) {
  event.target.innerHTML = FULL_HEART
  event.target.className = "activated-heart"
} else if (event.target.innerHTML === FULL_HEART) {
  event.target.innerHTML = EMPTY_HEART
  event.target.className = "like-glyph"
}
})


function errorMessage() {
  mimicServerCall().catch(function(e) {
    hiddenError.innerText = e
    hiddenError.className = ""
    setTimeout(function() {
      hiddenError.className = "hidden"
    }, 5000)
  })
}











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

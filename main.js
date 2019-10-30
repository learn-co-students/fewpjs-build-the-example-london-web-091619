// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
const hiddenError = document.getElementById("modal")

// Your JavaScript code goes here!

document.addEventListener("DOMContentLoaded", function() {
  document.addEventListener("click", function(e) {
    errorMessage()
    if (e.target.innerHTML == EMPTY_HEART) {
      let liked = e.target
      liked.innerHTML = FULL_HEART;
      liked.className = "activated-heart"
    } else if (e.target.className == "activated-heart") {
      let liked = e.target
      liked.innerHTML = EMPTY_HEART
      liked.className = "like-glyph"    
    }
  })
})

function errorMessage() {
  mimicServerCall().catch(function(error) {
    hiddenError.innerText = error   
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

// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const modal = document.querySelector("#modal")

function init(){
  modal.className = "hidden"
  const hearts = document.querySelectorAll(".like-glyph")
  hearts.forEach(function(heart){
    heart.addEventListener("click", e => e.target.className === "activated-heart"
    ? unlike(e)
    : like(e)
    )
  })
}

function like(e){
  mimicServerCall().then(
    e.target.className = "activated-heart",
    e.target.textContent = FULL_HEART
    )
    .catch(
      error => {
        const modalMessage = modal.querySelector("#modal-message")
        modalMessage.innerText = error.message
        modal.className = ""
        setTimeout( () => modal.className = "hidden", 5000)
      }
    )
}

function unlike(e){
    e.target.className = "",
    e.target.textContent = EMPTY_HEART
}

init()


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

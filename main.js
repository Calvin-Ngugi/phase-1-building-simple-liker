// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

let modal = document.getElementById("modal")

let likey = document.querySelectorAll("span.like-glyph")

likey.forEach(heartGlyph =>{
  heartGlyph.addEventListener("click", () => {
    mimicServerCall(url="http://mimicServer.example.com", config = {})
    .then( () => {
      // debugger
    if (heartGlyph.innerHTML == EMPTY_HEART) {
      heartGlyph.innerHTML = FULL_HEART
      heartGlyph.className = "activated-heart"}
    else
      heartGlyph.innerHTML = EMPTY_HEART
    })
    .catch( error => {
      modal.className = ""
      modal.innerText = error
      setTimeout( () => {modal.className = "hidden"}, 5000)
    })
  })
  
})


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}

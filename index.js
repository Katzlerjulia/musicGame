/*const startButton = document.getElementById("play");
const getArtists = document.getElementById("getArtists");
const getNew = document.getElementById("getNew");
let artists = [];

getNew.style.display = "none";

fetch("data.json")
  .then((response) => response.json())
  .then((result) => {
    artists = result;
  });

function getNewArtist() {
  const randomArtist = artists[Math.floor(Math.random() * artists.length)].Artist;
   getArtists.textContent = randomArtist;
   getArtists.style.fontSize = '100px'
   getArtists.style.marginTop = '3em'
}*/

const startButton = document.getElementById("play");
const getArtists = document.getElementById("getArtists");
const getNew = document.getElementById("getNew");
let artists = [];
let currentIndex = 0;

getNew.style.display = "none";

fetch("data.json")
  .then((response) => response.json())
  .then((result) => {
    artists = result;
  });

function getNewArtist() {
  if (currentIndex < artists.length) {
    const currentArtist = artists[currentIndex].Artist;
    getArtists.textContent = currentArtist;
    getArtists.style.fontSize = "100px";
    getArtists.style.marginTop = "3em";
    currentIndex++; // Increment the currentIndex for the next artist
  } else {
    // If last index is reached, reset currentIndex to 0 to repeat the list
    currentIndex = 0;
    getNewArtist(); // Fetch the first artist again
  }
}

getNew.addEventListener("click", getNewArtist);


function startGame() {
  getNewArtist();
  startButton.style.display = "none";
   getNew.style.display = "block";
   document.addEventListener('keyup', (event) => {
      if (event.code === 'Enter') {
         getNewArtist()
      }
   })
}

getNew.addEventListener('click', getNewArtist)

var buttons = document.querySelectorAll(
  ".counterButton1, .counterButton2, .counterButton3, .counterButton4, .counterButton5, .counterButton6"
);

// Loop through each button
for (var i = 0; i < buttons.length; i++) {
  // Add a click event listener to the button
  buttons[i].addEventListener("click", function () {
    // Increment the button's text content by 1
    this.innerHTML = parseInt(this.innerHTML) + 1;
  });
}

let toggleBtn = document.getElementById("toggle-btn");

toggleBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
});

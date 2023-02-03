// timer

let time = 60;
let interval;

const timer = document.getElementById("time");
const buttonStart = document.getElementById("start");
const stopButton = document.getElementById("stop");

buttonStart.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);

function startTimer() {
  interval = setInterval(function () {
    time--;
    timer.innerHTML = time;
    if (time === 0) {
      stopTimer();
      alert("Time's up!");
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(interval);
}



// fetch funktionen och textContent

const startButton = document.getElementById("play")
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
   getArtists.style.fontSize = '6em'
   getArtists.style.marginTop = '1.5em'
}


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



//Score buttons

//count up and localstorage
const buttons = document.querySelectorAll(
  ".counterButton1, .counterButton2, .counterButton3, .counterButton4, .counterButton5, .counterButton6"
);

for (let i = 0; i < buttons.length; i++) {
  const storedScore = sessionStorage.getItem(buttons[i].className);
  if (storedScore) {
    buttons[i].innerHTML = storedScore;
  }
  buttons[i].addEventListener("click", function () {
    this.innerHTML = parseInt(this.innerHTML) + 1;
    sessionStorage.setItem(this.className, this.innerHTML);
  });
}




//Decreasing buttons (right click)
const buttonsDown = document.querySelectorAll(
  ".counterButton1, .counterButton2, .counterButton3, .counterButton4, .counterButton5, .counterButton6"
);

for (let i = 0; i < buttonsDown.length; i++) {
  buttonsDown[i].addEventListener("contextmenu", function (event) {
    event.preventDefault();
    this.innerHTML = parseInt(this.innerHTML) - 1;
    sessionStorage.setItem(this.className, this.innerHTML);
  });
}




// Darkmode

let toggleBtn = document.getElementById("toggle-btn");

toggleBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
});






/*function getNewArtist() {
  const randomArtist = artists[Math.floor(Math.random() * artists.length)].Artist;
   getArtists.textContent = randomArtist;
   getArtists.style.fontSize = '6em'
   getArtists.style.marginTop = '1.5em'
} */

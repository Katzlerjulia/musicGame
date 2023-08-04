/*const startButton = document.getElementById("play");
const getArtists = document.getElementById("getArtists");
const getNew = document.getElementById("getNew");
let artists = [];
// fetch funktionen och textContent (fisher yates algoritm)


const startButton = document.getElementById('play')
const getArtists = document.getElementById('getArtists')
const getNew = document.getElementById('getNew')
let artists = []

getNew.style.display = 'none'

fetch('data.json')
    .then((response) => response.json())
    .then((result) => {
        // Store just the artist names in the array
        artists = result.map((item) => item.Artist)
    })

function shuffleArray(array) {
    let currentIndex = array.length
    let randomIndex, temp

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex--

        temp = array[currentIndex]
        array[currentIndex] = array[randomIndex]
        array[randomIndex] = temp
    }

    return array
}

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

    artists = shuffleArray(artists)

    const randomArtist = artists.shift()

    artists.push(randomArtist)

    getArtists.textContent = randomArtist
    getArtists.style.fontSize = '6em'
    getArtists.style.marginTop = '1.5em'

}

getNew.addEventListener("click", getNewArtist);


function startGame() {
    getNewArtist()
    startButton.style.display = 'none'
    getNew.style.display = 'block'
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
    '.counterButton1, .counterButton2, .counterButton3, .counterButton4, .counterButton5, .counterButton6'
)

for (let i = 0; i < buttons.length; i++) {
    const storedScore = sessionStorage.getItem(buttons[i].className)
    if (storedScore) {
        buttons[i].innerHTML = storedScore
    }
    buttons[i].addEventListener('click', function () {
        this.innerHTML = parseInt(this.innerHTML) + 1
        sessionStorage.setItem(this.className, this.innerHTML)
    })
}

//Decreasing buttons (right click)
const buttonsDown = document.querySelectorAll(
    '.counterButton1, .counterButton2, .counterButton3, .counterButton4, .counterButton5, .counterButton6'
)

for (let i = 0; i < buttonsDown.length; i++) {
    buttonsDown[i].addEventListener('contextmenu', function (event) {
        event.preventDefault()
        this.innerHTML = parseInt(this.innerHTML) - 1
        sessionStorage.setItem(this.className, this.innerHTML)
    })
}

// Darkmode

let toggleBtn = document.getElementById('toggle-btn')

toggleBtn.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode')
})

/*function getNewArtist() {
  const randomArtist = artists[Math.floor(Math.random() * artists.length)].Artist;
   getArtists.textContent = randomArtist;
   getArtists.style.fontSize = '6em'
   getArtists.style.marginTop = '1.5em'
} */

// variable Bank -----------------------------------
const wordBank = [
    "actor",
    "awful",
    "admit",
    "about",
    "bread",
    "baker",
    "beast",
    "bench",
    "bound",
    "crash",
    "count",
    "cheap",
    "cloud",
    "dirty",
    "dandy",
    "drown",
    "draft",
    "every",
    "ether",
    "error",
    "early",
    "false",
    "fresh",
    "faint",
    "facet",
    "great",
    "grasp",
    "grown",
    "gulch",
    "happy",
    "heart",
    "harsh",
    "halve",
    "idiot",
    "igloo",
    "islet",
    "inset",
    "joint",
    "jaunt",
    "joust",
    "jelly",
    "kooky",
    "known",
    "kneel",
    "lemon",
    "laugh",
    "learn",
    "lumpy",
    "maker",
    "misty",
    "merry",
    "moist",
    "noise",
    "noose",
    "newly",
    "never",
    "oasis",
    "other",
    "otter",
    "ounce",
    "phone",
    "photo",
    "party",
    "puppy",
    "quote",
    "quart",
    "quick",
    "quest",
    "round",
    "rough",
    "right",
    "risky",
    "start",
    "swish",
    "slime",
    "sweat",
    "trash",
    "teeth",
    "title",
    "truck",
    "worst",
    "wreck",
    "waste",
    "waive",
       
]
    

const secOneLetterOne = document.querySelector('[data-sec1-ltr1]')
const secOneLetterTwo = document.querySelector('[data-sec1-ltr2]')
const secOneLetterThree = document.querySelector('[data-sec1-ltr3]')
const secOneLetterFour = document.querySelector('[data-sec1-ltr4]')
const secOneLetterFive = document.querySelector('[data-sec1-ltr5]')

const secOneTileOne = document.querySelector('[data-sec1-tile1]')
const secOneTileTwo = document.querySelector('[data-sec1-tile2]')
const secOneTileThree = document.querySelector('[data-sec1-tile3]')
const secOneTileFour = document.querySelector('[data-sec1-tile4]')
const secOneTileFive = document.querySelector('[data-sec1-tile5]')

const startBtn = document.getElementById('startBtn')
const resetBtn = document.getElementById('resetBtn')
const submitBtn = document.getElementById('submitBtn')
const nextBtn = document.getElementById('nextBtn')

let word = ""
let index = 0


// -------------------------------------------------


// Word Bank Looping Functions----------------------

// --------------version 1
// let word = ""
// wordBank.forEach(function(index)
// { word = wordBank[index] })

// --------------version 2
// let word = ""
// for(let i = 0; i < wordBank.length; i++)
// { word = wordBank[i] }

// --------------version 3
// let word = ""
// for(let index in wordBank)
// { word = wordBank[index] }

// -------------------------------------------------



// start function ----------------------------------
startBtn.addEventListener('click', startGame)

function startGame() {

    for (index in wordBank) {

        index = Math.floor(Math.random() * wordBank.length)

        word = wordBank[index]

        console.log(word)
        
        secOneLetterOne.innerText = word[0]
        secOneLetterTwo.innerText = word[1]
        secOneLetterThree.innerText = word[2]
        secOneLetterFour.innerText = word[3]
        secOneLetterFive.innerText = word[4]
        
        
        secOneLetterOne.classList.remove("hide")
        secOneLetterTwo.classList.add("hide")
        secOneLetterThree.classList.add("hide")
        secOneLetterFour.classList.add("hide")
        secOneLetterFive.classList.add("hide")
        
        
    
    }
}
// -------------------------------------------------

// next function ----------------------------------
nextBtn.addEventListener('click', nextGame)

function nextGame() {

    for (index in wordBank) {

        index = Math.floor(Math.random() * wordBank.length)

        word = wordBank[index]

        console.log(word)

        secOneLetterOne.innerText = word[0]
        secOneLetterTwo.innerText = word[1]
        secOneLetterThree.innerText = word[2]
        secOneLetterFour.innerText = word[3]
        secOneLetterFive.innerText = word[4]


        secOneLetterOne.classList.remove("hide")
        secOneLetterTwo.classList.add("hide")
        secOneLetterThree.classList.add("hide")
        secOneLetterFour.classList.add("hide")
        secOneLetterFive.classList.add("hide")

        secOneTileOne.classList.remove("letter-tile-correct", "letter-tile-wrong")
        secOneTileTwo.classList.remove("letter-tile-correct", "letter-tile-wrong")
        secOneTileThree.classList.remove("letter-tile-correct", "letter-tile-wrong")
        secOneTileFour.classList.remove("letter-tile-correct", "letter-tile-wrong")
        secOneTileFive.classList.remove("letter-tile-correct", "letter-tile-wrong")



    }
}
// -------------------------------------------------

// reset function ----------------------------------

resetBtn.addEventListener('click', resetGame)

function resetGame() {

    secOneLetterOne.classList.add("hide")
    secOneLetterTwo.classList.add("hide")
    secOneLetterThree.classList.add("hide")
    secOneLetterFour.classList.add("hide")
    secOneLetterFive.classList.add("hide")

    secOneTileOne.classList.remove("letter-tile-correct", "letter-tile-wrong")
    secOneTileTwo.classList.remove("letter-tile-correct", "letter-tile-wrong")
    secOneTileThree.classList.remove("letter-tile-correct", "letter-tile-wrong")
    secOneTileFour.classList.remove("letter-tile-correct", "letter-tile-wrong")
    secOneTileFive.classList.remove("letter-tile-correct", "letter-tile-wrong")

    submission.value = ""

}
// -------------------------------------------------

// submit function ---------------------------------

submitBtn.addEventListener('click', submitAnswer)

const submission = document.querySelector('[data-input-submit]')


function submitAnswer() {

    let str = submission.value

    switch (str[0] === word[0]) {
        case true:
            secOneLetterOne.classList.remove("hide")
            break;
    }
    switch (str[1] === word[1]) {
        case true:
            secOneLetterTwo.classList.remove("hide")
            secOneTileTwo.classList.add("letter-tile-correct")
            break;
        
        case false:
            secOneTileTwo.classList.add("letter-tile-wrong")
            break;
    }
    switch (str[2] === word[2]) {
        case true:
            secOneLetterThree.classList.remove("hide")
            secOneTileThree.classList.add("letter-tile-correct")
            break;
        case false:
            secOneTileThree.classList.add("letter-tile-wrong")
            break;
    }
    switch (str[3] === word[3]) {
        case true:
            secOneLetterFour.classList.remove("hide")
            secOneTileFour.classList.add("letter-tile-correct")
            break;
        case false:
            secOneTileFour.classList.add("letter-tile-wrong")
            break;
    }
    switch (str[4] === word[4]) {
        case true:
            secOneLetterFive.classList.remove("hide")
            secOneTileFive.classList.add("letter-tile-correct")
            break;
        case false:
            secOneTileFive.classList.add("letter-tile-wrong")
            break;
    }
    if (str === word) {
        secOneTileOne.classList.add("letter-tile-correct")
        secOneTileTwo.classList.add("letter-tile-correct")
        secOneTileThree.classList.add("letter-tile-correct")
        secOneTileFour.classList.add("letter-tile-correct")
        secOneTileFive.classList.add("letter-tile-correct")

    }

    
    console.log(str[4] === word[4])
    console.log(str[3] === word[3])
    console.log(str[2] === word[2])
    console.log(str[1] === word[1])
    console.log(str[0] === word[0])
    console.log(str)

    // -------------------------------------------------


    



}

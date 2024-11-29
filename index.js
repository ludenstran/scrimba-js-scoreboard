let homeScore = 0
let guestScore = 0

let homeScoreEl = document.getElementById("home-score")
let guestScoreEl = document.getElementById("guest-score")

// Point for Home //

function addOnePointHome() {
    homeScore += 1
    homeScoreEl.innerText = homeScore
}

function addTwoPointHome() {
    homeScore += 2
    homeScoreEl.innerText = homeScore
}

function addThreePointHome() {
    homeScore += 3
    homeScoreEl.innerText = homeScore
}

// Point for Guess //

function addOnePointGuest() {
    guestScore += 1
    guestScoreEl.innerText = guestScore
}

function addTwoPointGuest() {
    guestScore += 2
    guestScoreEl.innerText = guestScore
}

function addThreePointGuest() {
    guestScore += 3
    guestScoreEl.innerText = guestScore
}

// Reset Game //

function resetGame() {
    homeScore = 0
    homeScoreEl.innerText = homeScore
    guestScore = 0
    guestScoreEl.innerText = guestScore
    
}

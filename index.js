let homeScore = 0;
let guestScore = 0;

let homeScoreEl = document.getElementById("home-score");
let guestScoreEl = document.getElementById("guest-score");

// Point for Home //

function addOnePointHome() {
  homeScore += 1;
  homeScoreEl.innerText = homeScore;
  highLight();
}

function addTwoPointHome() {
  homeScore += 2;
  homeScoreEl.innerText = homeScore;
  highLight();
}

function addThreePointHome() {
  homeScore += 3;
  homeScoreEl.innerText = homeScore;
  highLight();
}

// Point for Guess //

function addOnePointGuest() {
  guestScore += 1;
  guestScoreEl.innerText = guestScore;
  highLight();
}

function addTwoPointGuest() {
  guestScore += 2;
  guestScoreEl.innerText = guestScore;
  highLight();
}

function addThreePointGuest() {
  guestScore += 3;
  guestScoreEl.innerText = guestScore;
  highLight();
}

// Reset Game //

function resetGame() {
  homeScore = 0;
  homeScoreEl.innerText = homeScore;
  guestScore = 0;
  guestScoreEl.innerText = guestScore;
}

// Highlight Points //

function highLight() {
  if (homeScore > guestScore) {
    guestScoreEl.classList.remove("highlight");
    homeScoreEl.classList.add("highlight");
  } else if (homeScore < guestScore) {
    homeScoreEl.classList.remove("highlight");
    guestScoreEl.classList.add("highlight");
  } else {
  }
}

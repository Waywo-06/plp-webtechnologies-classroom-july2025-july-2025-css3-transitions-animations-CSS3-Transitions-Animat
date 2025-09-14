function calculateScore(goals, assists) {
  return goals * 4 + assists * 2;
}

let playerScore = calculateScore(3, 2); // returns 16

let teamName = "Wavy FC"; // global

function showTeam() {
  let message = "Welcome to " + teamName; // local + global
  console.log(message);
}

showTeam();

function toggleHighlight(elementId) {
  const el = document.getElementById(elementId);
  el.classList.toggle("highlight");
}

document.getElementById("animateBtn").addEventListener("click", () => {
  document.getElementById("box").classList.add("slide-in");
});


function showModal() {
  const modal = document.querySelector(".modal");
  modal.classList.add("fade-in");
}

function hideModal() {
  const modal = document.querySelector(".modal");
  modal.classList.remove("fade-in");
}

document.querySelector(".card").addEventListener("click", () => {
  document.querySelector(".card").classList.toggle("flipped");
});
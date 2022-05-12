//Stored dice image-values within two seperate lists for both dices.//
const dices1 = [
  "./images/dc1.png",
  "./images/dc2.png",
  "./images/dc3.png",
  "./images/dc4.png",
  "./images/dc5.png",
  "./images/dc6.png",
];
const dices2 = [
  "./images/dc1.png",
  "./images/dc2.png",
  "./images/dc3.png",
  "./images/dc4.png",
  "./images/dc5.png",
  "./images/dc6.png",
];



function roll() {
    // Created 2 seperate random methods for both.//
    let randomRoll1 = Math.floor(Math.random() * dices1.length);
    let randomRoll2 = Math.floor(Math.random() * dices2.length);

    // Created a DOM to alter dice images depending on the random results generated from the dices list.//
  document.getElementById("rollOut1").src = dices1[randomRoll1];
  document.getElementById("rollOut2").src = dices2[randomRoll2];

  //Created Conditions to determine the winner of the game.//
  let outcome;
  if (randomRoll1 > randomRoll2) {
    outcome = "🚩Player1 Wins!";
  } else if (randomRoll1 < randomRoll2) {
    outcome = "Player2 Wins!🚩";
  } else {
    outcome = "🏳️Draw!🏳️";
  }
  document.getElementById("scores").innerHTML = outcome;
}
roll();

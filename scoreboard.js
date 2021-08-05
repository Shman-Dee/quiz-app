var username = document.getElementById("username");
var saveScoreBtn = document.getElementById("saveScoreBtn");
var mostRecentScore = localStorage.getItem("mostRecentScore");
var finalScore = document.getElementById("finalScore");
var MAX_HIGH_SCORES;
var highScores = JSON.parse(localStorage.getItem("highScores")) || [];
console.log(saveScoreBtn);
finalScore.innerText = mostRecentScore;
username.addEventListener("keyup", () => {
  saveScoreBtn.disabled = !username.value;
});

saveHighScore = (e) => {
  e.preventDefault();
  saveScoreBtn.addEventListener("click", saveHighScore);
  var score = {
    score: mostRecentScore,
    name: username.value,
  };
  highScores.push(score);
  highScores.sort(function (a, b) {
    return b.score - a.score;
  });
  highScores.splice(10);
  localStorage.setItem("highScores", JSON.stringify(highScores));
};

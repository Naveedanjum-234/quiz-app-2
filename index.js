const bookmarkButton = document.querySelector(".bookmark");

bookmarkButton.addEventListener("click", function() {
  this.classList.toggle("bookmark--active");
});

const answerButton = document.querySelector(".card__button-answer");
const answerElement = document.querySelector(".card__answer");

answerButton.addEventListener("click", function() {
  answerElement.classList.toggle("card__answer--active");

  if (answerElement.classList.contains("card__answer--active")) {
    answerButton.textContent = "Hide answer";

  } else {
    answerButton.textContent = "Show answer";
  }
});

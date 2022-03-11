const ttt = document.querySelector(".ttt");

let circle = true;
let counter = 0;
let gameOver = false;

let fields = ["_", "_", "_", "_", "_", "_", "_", "_", "_"];

ttt.addEventListener("click", function (e) {
  const field = e.target;
  const fieldIndex = field.getAttribute("data-field");

  if (field.classList.contains("ttt-field") && field.classList.length === 1) {
    counter++;

    if (circle) {
      field.classList.add("ttt-field-circle");
      fields.splice(fieldIndex, 1, "o");
      field.ariaDisabled = true;
    } else {
      field.classList.add("ttt-field-cross");
      fields.splice(fieldIndex, 1, "x");
      field.ariaDisabled = true;
    }
    checkWinner();
    circle = !circle;

    if (counter === 9) {
      gameOver = true;
    }

    if (gameOver) {
      ttt.classList.add("game-over");
      document.addEventListener("keydown", (e) => {
        if (gameOver && (e.key = " ")) {
          fields = ["_", "_", "_", "_", "_", "_", "_", "_", "_"];
          ttt.classList.remove("game-over");
          for (i = 0; i < 9; i++) {
            ttt.children[i].classList.remove("ttt-field-circle");
            ttt.children[i].classList.remove("ttt-field-cross");
          }
          counter = 0;
          gameOver = false;
        }
      });
    }
  }
});

//create winner Message
const winnerMessage = (circle) =>
  circle === true ? "winner is circle" : "winner is cross";

function checkWinner() {
  //check horizontal lines
  if (fields[0] !== "_" && fields[0] === fields[1] && fields[1] === fields[2]) {
    alert(winnerMessage(circle));
    gameOver = true;
  }

  if (fields[3] !== "_" && fields[3] === fields[4] && fields[4] === fields[5]) {
    alert(winnerMessage(circle));
    gameOver = true;
  }

  if (fields[6] !== "_" && fields[6] === fields[7] && fields[7] === fields[8]) {
    alert(winnerMessage(circle));
    gameOver = true;
  }

  //check vertical lines
  if (fields[0] !== "_" && fields[0] === fields[3] && fields[3] === fields[6]) {
    alert(winnerMessage(circle));
    gameOver = true;
  }
  if (fields[1] !== "_" && fields[1] === fields[4] && fields[4] === fields[7]) {
    alert(winnerMessage(circle));
    gameOver = true;
  }
  if (fields[2] !== "_" && fields[2] === fields[5] && fields[5] === fields[8]) {
    alert(winnerMessage(circle));
    gameOver = true;
  }

  //check diagonal lines
  if (fields[0] !== "_" && fields[0] === fields[4] && fields[4] === fields[8]) {
    alert(winnerMessage(circle));
    gameOver = true;
  }
  if (fields[2] !== "_" && fields[2] === fields[4] && fields[4] === fields[6]) {
    alert(winnerMessage(circle));
    gameOver = true;
  }
}

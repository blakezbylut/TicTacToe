console.log("Linked");

var gameBoard = [
[null,null,null],
[null,null,null],
[null,null,null]
];

var counter = 0;
var nextTurn = "X";
changeText();

var getRow = function(element) {
    var row = element.attr('class').split(" ")[1];
    return parseInt(row.split("-")[1]);
}

var getCol = function(element) {
    var col = element.attr('class').split(" ")[2];
    return parseInt(col.split("-")[1]);
}

function changeTurn() {
    if(nextTurn == "X"){
      nextTurn = "O";
    } else {
      nextTurn = "X";
  }
}

function changeText() {
  $("#playerTurn").text("Player " + nextTurn + ": Please Click");
}

function winnerText(){
  $("#winnerText").text("The winner is Player " + nextTurn + ". Congrats");
}

$(".clearBoard").on("click", function(){//empty the array now
  $(".box-div").text("");
  gameBoard = [
  [null,null,null],
  [null,null,null],
  [null,null,null]
  ];
  // Sergey - WHY DOES THIS WORK, changeTurn and changeText need to be invoked twice?
  nextTurn = "O";
  counter = 0;
  changeTurn();
  changeText();
  $(".box-div").off();
  setClickHandler();
  $("#winnerText").text("");
  $("#drawTime").text("");
})

function checkForWinner() {
  var isThereAWinner = false;

  if (gameBoard[0][0] !== null && (gameBoard[0][0] === gameBoard[0][1]) && (gameBoard[0][0] === gameBoard[0][2])){
    isThereAWinner = true;
  } else if (gameBoard[1][0] !== null && (gameBoard[1][0] === gameBoard[1][1]) && (gameBoard[1][0] === gameBoard[1][2])){
    isThereAWinner = true;
  } else if(gameBoard[2][0] !== null && (gameBoard[2][0] === gameBoard[2][1]) && (gameBoard[2][0] === gameBoard[2][2])){
    isThereAWinner = true;
  } else if(gameBoard[0][0] !== null && (gameBoard[0][0] === gameBoard[1][0]) && (gameBoard[0][0] === gameBoard[2][0])){
    isThereAWinner = true;
  } else if(gameBoard[0][1] !== null && (gameBoard[0][1] === gameBoard[1][1]) && (gameBoard[0][1] === gameBoard[2][1])){
    isThereAWinner = true;
  } else if(gameBoard[0][2] !== null && (gameBoard[0][2] === gameBoard[1][2]) && (gameBoard[0][2] === gameBoard[2][2])){
    isThereAWinner = true;
  } else if(gameBoard[0][0] !== null && (gameBoard[0][0] === gameBoard[1][1]) && (gameBoard[0][0] === gameBoard[2][2])){
  isThereAWinner = true;
} else if(gameBoard[0][2] !== null && (gameBoard[0][2] === gameBoard[1][1]) && (gameBoard[0][2] === gameBoard[2][0])){
  isThereAWinner = true;
}
  return isThereAWinner;
}

function setClickHandler() {
  $('.box-div').on("click", function(e) {
    var row = getRow($(e.target));
    var col = getCol($(e.target));

    //checking to see if space is open
    if(gameBoard[row - 1][col - 1] === null){

        var move = nextTurn;//assigning move the X or O value

        if($(e.target).text("")){
          $(e.target).text(nextTurn);
        }
        gameBoard[row - 1][col - 1] = move;
        counter++;

        if(checkForWinner()){
          winnerText();
          $('.box-div').off();
          counter = 0;
        } else if(counter == 9){
          $("#drawTime").text("We have a draw!");;
          counter = 0;

        }
        changeTurn();
        changeText();

    } else{
      alert("Please click somewhere else");
    }
  })
}

$(function() {
  setClickHandler();
})

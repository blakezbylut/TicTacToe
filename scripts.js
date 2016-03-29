console.log("Linked");

var gameBoard = [
[null,null,null],
[null,null,null],
[null,null,null]
];

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

$(".clearBoard").on("click", function(){//empty the array now
  $(".box-div").text("");
  gameBoard = [
  [null,null,null],
  [null,null,null],
  [null,null,null]
  ];
  // Sergey - WHY DOES THIS WORK, changeTurn and changeText need to be invoked twice?
  nextTurn = "O";
  changeTurn();
  changeText();
  setClickHandler();
  $("#winnerText").text("");
}) //Try reset nextTurn to "X" here

function changeText() {
  $("#playerTurn").text("Player " + nextTurn + ": Please Click");
}

function winnerText(){
  $("#winnerText").text("The winner is Player " + nextTurn + ". Congrats");
}

function changeTurn() {
    if(nextTurn == "X"){
      nextTurn = "O";
    } else {
      nextTurn = "X";
  }
}
// function checkForWinner gameBoard[0][0] === gameBoard[0][1]

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
} else if(gameBoard[0][2] !== null && (gameBoard[0][2] === gameBoard[1][1]) && (gameBoard[0][0] === gameBoard[2][0])){
  isThereAWinner = true;
}
  return isThereAWinner;
}

// **********************
function setClickHandler() {
  $('.box-div').on("click", function(e) {
    var row = getRow($(this));
    var col = getCol($(this));

    //checking to see if space is open
    if(gameBoard[row - 1][col - 1] === null){
        var move = nextTurn;

        $(e.target).text(nextTurn);

        gameBoard[row - 1][col - 1] = move;
        if(checkForWinner()){
          winnerText();
          $('.box-div').off();
        }
      }
        changeTurn();
        changeText();
  })
}

$(function() {
  setClickHandler();
})

//

// **********************

// Only check for winners after 5 moves...
// function checkWinner(){
//   checkRows();
//   checkCols();
//   checkDiags();
// }



//
// for(var i = 1; i < 9; i++) {
//     $("#b"+i).on("click",function() {
//
//         var row = getRow($(this));
//         var col = getCol($(this));
//
//         //checking to see if space is open
//         if(gameBoard[row - 1][col - 1] === null){
//             var move = nextTurn;
//             $("#b"+i).text(move);
//             gameBoard[row - 1][col - 1] = move;
//
//             // game functions
//             changeTurn();
//             changeText();//etarget to find mouse position
//
//             // add counter for # of moves made
//
//         }
//     });
// }

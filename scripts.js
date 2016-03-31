console.log("Linked");

var gameBoard = [//Here I create the main array that reflects the div boxes
[null,null,null],
[null,null,null],
[null,null,null]
];

var counter = 0;//This is used to track whether it is a draw or not
var nextTurn = "X";//This variable starts with a value of X, and changes depending on player turn
changeText();//This runs text on the screen before the game(click) even begins

var getRow = function(element) {//Based on the id's given to the div boxes this serves to translate the div position to its equivalent in gameBoard array
    var row = element.attr('class').split(" ")[1];//Not the most convenient way to grab a certain location...
    return parseInt(row.split("-")[1]);
}

var getCol = function(element) {//Repeat the process to grab column position
    var col = element.attr('class').split(" ")[2];
    return parseInt(col.split("-")[1]);
}

function changeTurn() {//The basic way to change between text on div and in array being X or O
    if(nextTurn == "X"){
      nextTurn = "O";
    } else {
      nextTurn = "X";
  }
}

function changeText() {//I was trying to setTimeout so that after 1 or 2 seconds the text would change, but I did not figure it out...
  $("#playerTurn").text("Player " + nextTurn + ": Please Click");
}

function winnerText(){//Prints who the winner is
  $("#winnerText").text("Player " + nextTurn + " wins. Congrats!");
}

$(".clearBoard").on("click", function(){//This resets the div contents, the array contents, turn the box-div off to reject input, and then calls click handler again to reset counter
  $(".box-div").text("");
  gameBoard = [
  [null,null,null],
  [null,null,null],
  [null,null,null]
  ];
  // Sergey - WHY DOES THIS WORK, changeTurn and changeText need to be invoked twice? Here we are having issues with the nextTurn switching improperly when we clear the board
  nextTurn = "O";
  counter = 0;
  changeTurn();
  changeText();
  $(".box-div").off();
  setClickHandler();
  $("#winnerText").text("");
  $("#drawTime").text("");
})

function checkForWinner() {//A series of conditionals to test for winner, based on array
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

function setClickHandler() {//The one, the only, click handler... We listen to the box-div class and we get the row/col based on target of the event
  $('.box-div').on("click", function(e) {
    var row = getRow($(e.target));
    var col = getCol($(e.target));

    //Then, if space is open, we apply X or O to the text and also the corresponding array positon
    if(gameBoard[row - 1][col - 1] === null){

        var move = nextTurn;//assigning move the X or O value, as a best practice method

        if($(e.target).text("")){//if the box-div is empty, fill it
          $(e.target).text(move);
        }
        gameBoard[row - 1][col - 1] = move;//calculating array position
        counter++;//we add to the counter so that if it hits 9 and no winner it is a draw

        if(checkForWinner()){//if winner function is true, turn off the box-divs and reset counter
          winnerText();
          $('.box-div').off();
          counter = 0;
        } else if(counter == 9){//tests for a draw
          $("#drawTime").text("We have a draw!");;
          counter = 0;

        }
        changeTurn();//runs x and o
        changeText();//changes text of whose turn it is

    } else{
      alert("Please click somewhere else");//if the posistion is not null run the alert
    }
  })
}

$(function() {//the legendary onload.window function that runs only once the whole page is loaded
  setClickHandler();
})

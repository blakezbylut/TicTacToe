## Intro

The game is Tic Tac Toe. The rules are obvious, but in case you are the outlier, you need three X's in a row to win as Player X, and three O's to win as Player O.

The technologies used were jQuery, HTML, CSS and Javascript. The majority of the functions were run using jQuery. CSS allowed me to style the page, and I borrowed ideas (like the swing function on the buttons) from online posts. The HTML allowed me to put tags with id's and classes. I linked google fonts into the HTML file, along with the jQuery cdn library.

Click this link to play the game: http://blakezbylut.github.io/TicTacToe/

## User Stories

As a user:
I would like to be able to click on the board.
I would like to know whose turn it is.
I would like when I click to see an X or O appear, based on whose turn it is.
I would like to be alerted if either player wins.
I would like to be alerted if it is a draw.
I would like to be able to clear the board and reset the game to play again.
I would like some kind of animation or aesthetic that engages me visually while I play.

## Wireframing

This layout is very simple. A 3x3 board flanked by information / images, and headed by the page title.

![alt text](https://github.com/blakezbylut/TicTacToe/blob/gh-pages/wireframe.png)


## Pseudocoding
1. Player turns, in terms of Player X and Player O [✓]
   -The first player that starts is Player X [✓]
   -When a player clicks, it switches to the other players turn [✓]
   -We want the page to display whose turn it is [✓]
2. Click functions, if Player X clicks a box, the text that appears should be an X [✓]
  -If Player O clicks a box, the text that appears should be an O [✓]
  -If a player clicks the button “Clear the board”, the boxes should all reset to empty [✓]
  -If a player clicks on a box that contains X or O, it should alert “unable to click here, click on another box.” [✓]
3. The rules, to determine if the game is won, we must define certain conditions:
If either of the three rows is all X, alert “the game is over - X is a winner”, and vice-versa for O [✓]
If either of the three columns is all X or O, do the same [✓]
If top-left to bottom-right diagonal is all X or O, repeat the alert [✓]
If top-right to bottom-left diagonal is all X or O, repeat the alert [✓]
If neither of the above conditions are met, and all the boxes are filled, alert “the game is a draw” [✓]
4. Final decisions, once the game is won, the board should ignore inputs. A variable can track whether game is over or not, and execute code only if game is not yet over [✓]

## The game looks like this

![alt text](https://github.com/blakezbylut/TicTacToe/blob/gh-pages/screenshot.png)

Click this link to play the game: http://blakezbylut.github.io/TicTacToe/

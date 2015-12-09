# ScriptEdBasketball
ScriptEd Basketball is a two player basketball game that we will be creating. It will be a review of everything we've learned so far this year, including HTML, CSS, and JavaScript.

Players alternate turns, taking two or three point shots. Once a player reaches 20 points, they are considered the winner, and the game resets.

It's very important that you follow this document closely, since the starter code won't work unless you follow these instructions.

# HTML: index.html
1. Give the page a title
2. Below the h2 tag, add an h3 tag with the id **player-one-score**
3. Below the h3 tag you added, add a p tag with the class **player-one-name**.
4. Below the p tag you added, add an img tag to represent player one. You can be creative, choose a favorite basketball team's logo or player or whatever you want.
5. Repeat steps 2-4 for player two, except the h3 tag should have the id **player-two-score** and the p tag should have the class **player-two-name**

# JavaScript: basketball.js
Don't touch starter_code.js, instead you'll implement functions in basketball.js. I would recommend first implementing empty functions with the names and parameters defined here, otherwise you will likely encounter errors.

1. The starter code defines a function called **promptForPlayerName**, which takes in one parameter called **playerId**. This parameter will either be the string "Player 1" or the string "Player 2". The starter code then uses **prompt()** to ask player 1 or player 2 for their name, and saves it into a variable.
Here's what YOU need to do to **promptForPlayerName**:
* If the name is longer than 15 characters, you should alert the message "Wow, that's a long name!"
* Make the function return whatever the user enters at the prompt.

2. Define another function called **tryTwoPointShot**, which doesn't take any parameters.
* This function should generate two random numbers between 0 and 1. 
* If both random numbers are greater than 0.2, then it should return true. Otherwise it should return false.

3. Define a function **tryThreePointShot**, which doesn't take any parameters. 
* This function should generate two random numbers between 0 and 1. 
* If the first is less than or equal to 0.2 OR if the second is greater than or equal to 0.8, it should return true. Otherwise it should return false.

4. Define a function **getShotString**, which takes in three parameters.
* The first parameter is a player's name. Call it **playerName**.
* The second parameter is the number of points for the shot attempted. Call it **points**.
* The third parameter is a boolean indicating whether or not the shot was good. Call it **wasSuccessful**.
* The function should return a string in the following format: "<PLAYER NAME> attempted a <NUMBER OF POINTS> pointer. It was (GOOD / NO GOOD)"

5. Define a function **updateScore**, which takes in three parameters.
* The first parameter is a boolean indicating whether a shot was made or not. Call it **wasShotMade**.
* The second parameter is the current number of points of the player shooting. Call it **currentScore**.
* The third parameter is how many points the shot was for. Call it **points**.
* If the shot was made, this function should add the number of points the shot was for to the current score.
* Whether or not the shot was made, the function should return the score.

6. Define a function **isEndOfGame**, which takes in two parameters. * The first parameter is the current player's score. Call it **currentScore**.
* The second paremter is the current player's name. Call it **playerName**.
* If the score is >= 20, this function should alert "The game is over, <PLAYER NAME> won".
* If the score is >=20, this function should return true. Otherwise, it should return false.

# CSS - style.css
* Style each player's name and score however you want. Make sure that you have at least one style declaration for each name and score.
* If you want, add a background image and change the header and result styles as well.

# Submitting
To save your code to GitHub, open the "bash" tab at the bottom of your Cloud9 window and type in the following:
* git status
* git add .
* * This command will add all the changed files to your commit without having to write them all out!
* git commit -m "Basketball project"
* git push

To submit your project:
1. Go to GitHub.com
2. Click 'ScriptEdBasketball' under your repositories list in the bottom right of the page.
3. Copy the URL from the URL bar.
4. Go to the Daily Session Document (bit.ly/ScriptEd -> choose "Clara Barton").
5. Click "Submit Projects Here" in the top right.
6. Paste in the URL you copied from GitHub and call your project "Basketball"
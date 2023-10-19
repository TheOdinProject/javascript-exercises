'use strict';

//Selecting Elements 
const player0El = document.querySelector('.player--0') // Player 1 class 
const player1El = document.querySelector('.player--1') // Player 2 class
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold')

let scores, currentScore, activePlayer, playing;

//Starting condition
const init = function () {
    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;
  
    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;
  
    diceEl.classList.add('hidden');
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
  };
  init();

const switchPlayer = function()
{
    if(playing){
        //switch to the next player
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0 // ternary operator if activePlayer === 0 if not change to 1 else make it 0
    //Changing the Active Player Color 
    player0El.classList.toggle('player--active'); //toggle is another property in classList which add class if not available 
    player1El.classList.toggle('player--active');
    }
    
}

//Hiding the Image Dice 
diceEl.classList.add('hidden');   // Hiding the Dice by adding the Hidden Class 

//Rolling the Dice Functionality 
btnRoll.addEventListener('click', function() {

    if(playing){
    
    //1. Generating a Random Dice Result 
    const dice = Math.trunc(Math.random() * 6 ) + 1; //dice is a not a global Variable - needs to change every time 
    
    //Displaying the Dice 
    diceEl.classList.remove('hidden'); //removing the hidden class
    diceEl.src = `dice-${dice}.png`;  //when dice number becomes random the src also changes according and display the number 

    //3. Check for rolled 1: if true, switch to next player 
    if(dice != 1){
        //Add dice to current one 
        currentScore += dice; //currentScore = CurrentScore+dice 
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    }
    else{
        switchPlayer(); //calling the function     
    }
}

});

//Hold button Function 
btnHold.addEventListener('click', function() 
{
    if(playing)
    {
        //1.Add current score to sctivr Player's score 
        scores[activePlayer] += currentScore; //scores[activePlayer] = scores[activePlayer + currentScore
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

    //2. Check if Player's score is >= 100
    if(scores[activePlayer] >= 100)
    {
          //finish the Game 
          playing = false;
          diceEl.classList.add('hidden');//removing the dice after won 
          document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
          document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');//removing the previous class 

    }
    else{
            //Switch to the next Player -
            switchPlayer();
    }
        
    }
    
  
});


//reset Function calling
btnNew.addEventListener('click', init);
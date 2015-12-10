$(document).ready(function(){

var rpsLogic = ['rock', 'paper','scissors'];
var playerScore = 0;
var computerScore =0;

//Game Function
function gameState(rounds){
  roundCount = rounds;
  while(roundCount>0){
   var player = userPicks();
    var computer = computerInput();
    var result = compareInputs(player,computer);
    scoreCount(result, 1);
    if(result!==0){
      roundCount --;
    }
    
  }
  
  resetGame();
}


/*
function gameState (rounds) {
  for (index = rounds; index > 0; index --) {
    var player = userPicks();
    var computer = computerInput();
    var result = compareInputs(player,computer);
    scoreCount(result, 1);
 }
  resetGame();
}

*/

//player Input 
function userPicks(){
  
 var userInput = prompt("Choose bitch");
    return userInput;
    alert(userInput);
 }

//computer logic
function computerInput(){
  var cpuInput =  Math.floor(Math.random() * rpsLogic.length);
  console.log(cpuInput);
  if (cpuInput===0){
    return 'rock';
  }
   if (cpuInput===1){
    return 'paper';
  }
  
    return 'scissors';
  
}

//compare inputs
function compareInputs(input1,input2){
  if(input1 === input2){
    alert("Tie try again");
    return 0;
  }
  if((input1 ==='rock' && input2 === 'paper')||
     (input1 ==='paper' && input2 === 'rock')||
     (input1 ==='scissors'&& input2 === 'paper'))
    {
      alert('Player Wins!');
      return 1;
    }
    {
      alert('Computer Wins!');
      return 2;
    }
}

//update scores
function scoreCount(result,points){
  if (result===1){
    playerScore +=points;
    $('#myScore').html(playerScore);

  } else if (result===2){
    computerScore += points;
    $('#compScore').html(computerScore);
  } else {
    playerScore += 0;
    computerScore += 0;
  }
};

//clear the scores out
function resetGame(){
  playerScore = 0;
  computerScore = 0;
}

gameState(3);

});
$(document).ready(function(){

var rpsLogic = ['rock', 'paper','scissors'];
var playerScore = 0;
var computerScore =0;
var roundCount = 0;


//Game Function
function gameState(rounds, player){
  if(roundCount < rounds){
    var computer = computerInput();
    var result = compareInputs(player,computer);
    scoreCount(result, 1);
    if(result!==0){
      roundCount++;
      $('#rounds').html(roundCount);
    }
  }
  else if (roundCount>=rounds){
    if(playerScore>computerScore){
      swal('User Wins THE GAME!');
    }
    else if (playerScore<computerScore){
      swal('Computer Wins The GAME!');
    }
  }  

}

//player Input 
function userPicks(){
  $('.game').on('click',function(){
    var userInput = $(this).attr('value');
    gameState(3, userInput);
  });

 }
 userPicks();

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
    swal("Tie try again");
    return 0;
  }
  if((input1 ==='rock' && input2 === 'paper')||
     (input1 ==='paper' && input2 === 'rock')||
     (input1 ==='scissors'&& input2 === 'paper'))
    {
      swal('Player Wins!');
      return 1;
    }
    {
      swal('Computer Wins!');
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



});
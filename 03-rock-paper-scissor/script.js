let score=JSON.parse(localStorage.getItem('score'))||{
  Wins:0,
  Losses:0,
  Tie:0
  }

  /*
if(score===null){
  score={
    Wins:0,
    Losses:0,
    Tie:0
  }
}
*/

updateScore();


function playGame(playerMove){
  const computerMove =pickComputerMove();
  let result='';

  if (playerMove==='Scissor'){
    if (computerMove === 'Rock'){
    result='You lose.';
  } else if (computerMove === 'Paper'){
    result='You win.';
  } else if (computerMove === 'Scissor'){
    result= 'Tie.';
  }


  }else if (playerMove==='Paper'){
  if (computerMove === 'Rock'){
    result='You win.';
  } else if (computerMove === 'Paper'){
    result='Tie.';
  } else if (computerMove === 'Scissor'){
    result= 'You lose.';
  }

  
  }else if (playerMove === 'Rock'){
  if (computerMove === 'Rock'){
    result='Tie.';
  } else if (computerMove === 'Paper'){
    result='You lose.';
  } else if (computerMove === 'Scissor'){
    result= 'You win.';
}
  }

  if(result==='You win.'){
    score.Wins +=1;
  }else if (result==='You lose.'){
    score.Losses +=1;
  }else if(result==='Tie.'){
    score.Tie +=1;
  }

  localStorage.setItem('score',JSON.stringify(score));

  updateScore();

  document.querySelector('.js-result')
    .innerHTML = result;


  document.querySelector('.js-moves').innerHTML 
  = `You
<img src="images/${playerMove}-emoji.png" class="move-icon">
<img src="images/${computerMove}-emoji.png" class="move-icon">
Computer`;
}

function updateScore(){
  document.querySelector('.js-score')
  .innerHTML=`Wins :${score.Wins} , Losses :${score.Losses} , Tie :${score.Tie}`;
}

function pickComputerMove(){
  const randomNumber = Math.random();
  let computerMove = '';
  if (randomNumber >= 0 && randomNumber <1/3){
    computerMove ='Rock';
  } else if(randomNumber >= 1/3 && randomNumber <2/3){
    computerMove ='Paper';
  } else if(randomNumber >= 2/3 && randomNumber <1) {
    computerMove ='Scissor';
  }

  return computerMove;
}

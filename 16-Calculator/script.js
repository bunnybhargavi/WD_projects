var userInput = document.getElementById("details");

var expression = '';


//to clear the whole expression
function erase(){
  expression ='';
  userInput.value = expression;
}


//to show the expression
function press(num){
  expression += num;
  userInput.value = expression;
}

//to get answer
function equal(){
  userInput.value = eval(expression);
  expression = '';
}


function click_btn(num){
  userInput.value = expression*0.01;
}

//to clear one digit in an expression
function delone(){
  userInput.value = userInput.value.slice(0,-1);
  expression = userInput.value;
}
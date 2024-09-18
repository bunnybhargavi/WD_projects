const flashcards = document.getElementsByClassName("flashcard")[0];
const createbox = document.getElementsByClassName("box")[0];
const question = document.getElementById("question");
const answer = document.getElementById("answer");
const contentArray = localStorage.getItem("items") ? JSON.parse(localStorage.getItem("items")): [];

contentArray.forEach(divMaker);
function divMaker(text){
  var div = document.createElement("div");
  var h2_question = document.createElement("h2");
  var h2_answer = document.createElement("h2");
  div.className = 'flashcards';

  h2_question.setAttribute('style',"border-top:2px solid rgb(79, 181, 240) ;  padding:15px; margin-top:30px; color:rgb(237, 90, 105)");
  h2_question.innerHTML = text.my_question;



  h2_answer.setAttribute('style',"text-align:center; display:none; color:rgb(102, 237, 111)");
  h2_answer.innerHTML = text.my_answer;

  div.appendChild(h2_question);
  div.appendChild(h2_answer);

  div.addEventListener('click',function(){
    if(h2_answer.style.display == 'none')
      h2_answer.style.display = 'block';
    else
      h2_answer.style.display = 'none';
  });
  flashcards.appendChild(div);
}

function addflashCard(){
  var flashcard_info = {
    'my_question' : question.value,
    'my_answer' : answer.value
  }
  contentArray.push(flashcard_info);
  localStorage.setItem('items',JSON.stringify(contentArray));
  divMaker(contentArray[contentArray.length -1]);
  question.value='';
  answer.value='';
}

function deleteCard(){
  localStorage.clear();
  flashcards.innerHTML='';
  contentArray = [];
}

function createnewCard(){
  createbox.style.display = "block";
}

function hideflashCard(){
  createbox.style.display = "none";
}
var number = 0;

function increaseNumber(){
  number++;
  document.getElementById("counter").innerHTML =  number;
}

function decreaseNumber(){
  number--;
  document.getElementById("counter").innerHTML = number;
}
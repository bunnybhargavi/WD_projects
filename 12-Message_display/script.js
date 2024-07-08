var messageName= document.getElementById("message");

messageName.addEventListener("keydown",function(event){
  if(event.key == "Enter")
    messageDisplay();
})

function messageDisplay(){
  document.getElementById("para3").innerHTML = messageName.value;
  messageName.value = "";
}
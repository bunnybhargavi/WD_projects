var eraser = document.getElementById("erase");
var taskimg = document.getElementById("taskimg");
var userInput =document.getElementById("list");
var allItems = document.getElementById("allitems");

eraser.addEventListener("click",function(){
  allItems.innerHTML="";
})

userInput.addEventListener("keydown",function(event){
  if(event.key == "Enter")
    addItems();
})

function addItems(){
  var h2 = document.createElement("h2");
  h2.innerHTML= '~ ' + userInput.value;
  taskimg.style.display = "none";

  h2.addEventListener("click",function(){
    h2.style.textDecoration = "line-through";
  })


  allItems.insertAdjacentElement("beforeend",h2);
  userInput.value = "";
}
function changeColor(){
  var hex_value=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];

  var hexcount="";
  
  for(i=0;i<6;i++){
    var hex_index=Math.floor(Math.random()*hex_value.length);
    hexcount += hex_value[hex_index];
  }
  document.getElementById("hex_value").innerHTML = hexcount;
  document.getElementById("container").style.backgroundColor = "#"+ hexcount;
}
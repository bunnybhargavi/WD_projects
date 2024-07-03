var x,y,z,color;
function changeColor(){
  x=Math.round(Math.random()*256);
  y=Math.round(Math.random()*256);
  z=Math.round(Math.random()*256);
  color='rgb('+ x +',' + y + ',' + z +' )';
  document.getElementById("container").style.backgroundColor= color;
}
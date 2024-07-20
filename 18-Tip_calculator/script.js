var amount = document.getElementById("amount");
var guest = document.getElementById("guests");
var feedback = document.getElementById("service");
var tipAmount = document.getElementById("tip-amount");

Calculate = () =>{
  var tip = ((amount.value*feedback.value)/(guest.value)).toFixed(2);
  //here tofixed is used to get the value upto to two decimal places

  amount.value = '';
  guest.value = '';
  feedback.value = '';

  if(tip === 'NaN'){
    tipAmount.innerHTML = "Tip $0 each";
    DisplayTipAmount();
  }
  else{
    tipAmount.innerHTML = 'Tip $'+ tip + ' each';
    DisplayTipAmount(); 
  }
}

DisplayTipAmount = () =>{
  var x = tipAmount;
  x.className = 'show';
  setTimeout(function(){x.className=x.className.replace('show','')},3000);
}
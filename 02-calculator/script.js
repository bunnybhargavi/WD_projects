let calculation = (localStorage.getItem('calculation')||'');

    //display when the page loads
    displayCalculation();

    function updateCalculation(value){
      calculation += value;
      //console.log(calculation);
      localStorage.setItem('calculation',calculation);

      //display the calculation on the page instead of console.log
      displayCalculation();
    }
    
    function displayCalculation(){
      document.querySelector('.js-calculation')
        .innerHTML = calculation;
    }
let calculation = localStorage.getItem('calculation') || ''; displayCalculation ();

    

    function updateCalculation(value) {
      calculation += value;
      //return calculation;

      displayCalculation ()

      localStorage.setItem('calculation', calculation);

    }

    function displayCalculation () {
      document.querySelector('.js-calculation')
      .innerHTML = calculation;
    }
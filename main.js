document.addEventListener('DOMContentLoaded', () => {
    let validInput = document.querySelector(".valid-input");
    let goBack = document.querySelector('#goBack');

      goBack.addEventListener('click', ()=> {
          validInput.style.display = 'none';
      });
 });

function mortgageCal(){
    let principal = parseFloat(document.querySelector(".input-style-2 input").value.replace(/,/g, ''));
    let loanTerm =  parseFloat(document.querySelector(".mortage-team-input-style-1 input").value);
    let annualIntrest = parseFloat(document.querySelector(".inner-mortage-team-input-style-1 input").value);
    let validInput = document.querySelector(".valid-input");
    let monthlyRepayment = document.querySelector('.result h2' );
    let monthlyIntrest = annualIntrest/12/100;
    let monthlyLoanTerm = loanTerm * 12 ;
   
    if(isNaN(principal) || isNaN(loanTerm) || isNaN(annualIntrest)){
        validInput.style.display = 'flex';
  } else{
     validInput.style.display = 'none';
  }


    // Calculate the monthly payment using the formula for an annuity

     let monthlyMortagePayment = principal * monthlyIntrest /  1 - Math.pow((1 + monthlyIntrest), -monthlyLoanTerm )
        monthlyMortagePayment =  monthlyMortagePayment.toFixed(2);
       monthlyRepayment.textContent ='$' + monthlyMortagePayment;
      console.log('$' + monthlyMortagePayment);
      // Calculate the total amount paid over the term of the mortgage
}   
 
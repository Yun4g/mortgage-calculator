
// document.addEventListener('DOMContentLoaded', () =>{
//      validInput = document.querySelector(".valid-input");
//        let goBack = document.querySelector("#goBack")
//     goBack.addEventListener('click',  () =>{
//            validInput.style.display = 'none';
//     });
//   });

function mortgageCal(goBack){
let mortgageAmount = parseFloat(document.querySelector(".input-style-2 input").value.replace(/,/g, ""));
// console.log(mortgageAmount)

let mortgageYears = parseFloat(document.querySelector(".mortage-team-input-style-1 input").value);
// console.log(mortgageYears);

let mortgageIntrest = parseFloat(document.querySelector(".inner-mortage-team-input-style-1 input").value);
// console.log(mortgageIntrest)

let mortgageType = document.querySelector('input[name="Mortgage"]:checked').value;
let validInput = document.querySelector("#valid");



let monthlyInterest = mortgageIntrest / 12 / 100;
let totalPayments = mortgageYears * 12;



let  monthlyMortgagePayment;
let yearlymortgagePayment;
let monthlyPayment = document.querySelector(".result h2");
let yearlyPayment = document.querySelector(".yearly-result p");
let totalAmountPaid = mortgageYears * 12;
console.log(monthlyPayment);


    if(isNaN(mortgageAmount) || isNaN(mortgageYears) || isNaN(mortgageIntrest)){
         validInput.style.display = "flex";
       
    } 
     else{
         validInput.style.display = "none";
     }
    
    
     if (mortgageType === "Repayment") {
        // Calculate the monthly mortgage payment for a repayment mortgage
        monthlyMortgagePayment = (mortgageAmount * monthlyInterest) / (1 - Math.pow(1 + monthlyInterest, -totalPayments));
      } else if (mortgageType === "Interest") {
        // Calculate the monthly payment for an interest-only mortgage
        monthlyMortgagePayment = mortgageAmount * monthlyInterest;
      }
     monthlyMortgagePayment = monthlyMortgagePayment.toFixed(2);
     yearlymortgagePayment = monthlyMortgagePayment * totalAmountPaid.toFixed(2);

     monthlyPayment.textContent = "$"+ monthlyMortgagePayment;
     yearlyPayment.textContent = "$" + yearlymortgagePayment;

}


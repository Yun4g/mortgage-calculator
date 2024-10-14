function mortgageCal() {
    let mortgageAmount = parseFloat(document.querySelector(".input-style-2 input").value.replace(/,/g, ""));
    let mortgageYears = parseFloat( document.querySelector(".mortage-team-input-style-1 input").value );
    let mortgageIntrest = parseFloat( document.querySelector(".inner-mortage-team-input-style-1 input").value );
    let mortgageType = document.querySelector( 'input[name="Mortgage"]:checked' ).value;

    // Calculate monthly interest
    let monthlyInterest = mortgageIntrest / 12 / 100;

    // Validate inputs after all necessary values have been calculated
    if (isNaN(mortgageAmount) || mortgageAmount <= 0 || isNaN(mortgageYears) || mortgageYears <= 0 || isNaN(monthlyInterest) || monthlyInterest <= 0 || !mortgageType) {
    let modal= document.querySelector(".modal");
    let overlay = document.querySelector(".overlay");
    console.log(overlay);

    modal.style.transform =  'translate(-50%, -50%)';
    overlay.style.display = 'flex';


    }
   
document.querySelector("#goBack").addEventListener('click', ()=>{
    let modal= document.querySelector(".modal");
    let overlay = document.querySelector(".overlay");
    console.log(overlay);

    modal.style.transform =  'translate(-50%, -300%)';
    overlay.style.display = 'none';
})

    let totalPayments = mortgageYears * 12;

    let monthlyMortgagePayment;
    let yearlymortgagePayment;
    let monthlyPayment = document.querySelector(".result h2");
    let yearlyPayment = document.querySelector(".yearly-result p");

    if (mortgageType === "Repayment") {
        // Calculate the monthly mortgage payment for a repayment mortgage
        monthlyMortgagePayment =
            (mortgageAmount * monthlyInterest) /
            (1 - Math.pow(1 + monthlyInterest, -totalPayments));
    } else if (mortgageType === "Interest") {
        // Calculate the monthly payment for an interest-only mortgage
        monthlyMortgagePayment = mortgageAmount * monthlyInterest;
    }
    monthlyMortgagePayment = monthlyMortgagePayment.toFixed(2);
    yearlymortgagePayment = (monthlyMortgagePayment * 12).toFixed(2);

    // Display the results
    monthlyPayment.textContent = "$" + monthlyMortgagePayment;
    yearlyPayment.textContent = "$" + yearlymortgagePayment;







}



const clear = () => {
    console.log("Clear function triggered");
    let monthlyPayment = document.querySelector(".result h2");
    let yearlyPayment = document.querySelector(".yearly-result p");

    monthlyPayment.textContent = "$000,000,000";
    yearlyPayment.textContent = "$000,000,000";
};




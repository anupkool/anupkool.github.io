function calculator() {
    const loanstruct = {
    loanAmount:document.getElementById("amount").value,
    annualInterestrate:document.getElementById("apr").value,
    loanDuration:document.getElementById("tenure").value
    };
  console.log(loanstruct)
  function EMIVal2(loan){
      interest = loan.annualInterestrate/1200;
      let term = loan.loanDuration*12;
      let top = Math.pow((1+interest),term);
      let bottom = top - 1;
      let ratio = top/bottom;
      EMI = loan.loanAmount * interest * ratio;
      Total = EMI*term;
      const EMIObj = {
        EMI:EMI.toFixed(2),
        Total:Total.toFixed(2)
        };
      return EMIObj
  }
  console.log(EMIVal2(loanstruct));
  document.getElementById("EMICapt").innerHTML='<P><b>EMI: $ </b>' + EMIVal2(loanstruct).EMI + '<br>' + '<b> Total: $ </b>' + EMIVal2(loanstruct).Total +'</P>';

  return false
}
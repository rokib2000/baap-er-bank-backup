// add event handler in withdraw button
document.getElementById("withdraw-submit").addEventListener("click", function () {
  // get value form withdraw input field
  const withdrawFieldElement = document.getElementById("withdraw-field");
  const withdrawFieldString = withdrawFieldElement.value;
  //string to number
  const withdrawFieldAmount = parseFloat(withdrawFieldString);

  //clear input field
  withdrawFieldElement.value = "";

  // input validation
  if (isNaN(withdrawFieldAmount)) {
    alert("Please provide a valid number");
    return;
  }

  // get value form withdraw total
  const withdrawTotalElement = document.getElementById("withdraw-total");
  const withdrawTotalString = withdrawTotalElement.innerText;
  //string to number
  const withdrawTotalAmount = parseFloat(withdrawTotalString);

  // get balance total amount
  const balanceTotalElement = document.getElementById("balance-total");
  const balanceTotalString = balanceTotalElement.innerText;
  //string to number
  const balanceTotal = parseFloat(balanceTotalString);

  //balance validation
  if (withdrawFieldAmount > balanceTotal) {
    alert("Baap er bank a ato tk nai");
    return;
  }

  // calculation withdraw total
  const currentWithdrawTotal = withdrawTotalAmount + withdrawFieldAmount;

  // set the value in the page
  withdrawTotalElement.innerText = currentWithdrawTotal;

  // calculation balance total
  const currentBalanceTotal = balanceTotal - withdrawFieldAmount;

  // set the value in the page
  balanceTotalElement.innerText = currentBalanceTotal;
});

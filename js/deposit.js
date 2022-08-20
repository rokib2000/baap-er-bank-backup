// add event handler submit button
document.getElementById("deposit-submit").addEventListener("click", function () {
  //get amount in input field
  const inputDepositAmount = document.getElementById("deposit-field");
  const depositAmountString = inputDepositAmount.value;
  //convert string to number
  const depositAmount = parseFloat(depositAmountString);

  // clear input field
  inputDepositAmount.value = "";

  // input validation
  if (isNaN(depositAmount)) {
    alert("Please provide a valid number");
    return;
  }

  // get amount deposit total
  const depositTotalElement = document.getElementById("deposit-total");
  const depositTotalString = depositTotalElement.innerText;
  const depositTotal = parseFloat(depositTotalString);

  // calculation deposit total
  const currentDepositTotal = depositTotal + depositAmount;

  // set total value in bank page
  depositTotalElement.innerText = currentDepositTotal;

  // get balance total amount
  const balanceTotalElement = document.getElementById("balance-total");
  const balanceTotalString = balanceTotalElement.innerText;
  const balanceTotal = parseFloat(balanceTotalString);

  // calculation balance total
  const currentBalanceTotal = balanceTotal + depositAmount;

  // set the value in the page
  balanceTotalElement.innerText = currentBalanceTotal;
});

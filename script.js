// Get all required DOM elements
const billTotalInput = document.querySelector("#billTotal");
const tipInput = document.querySelector("#tipInput");
const numOfPeopleInput = document.querySelector("#numOfPeople");
const tipOutput = document.querySelector("#tipOutput");
const tipAmountOutput = document.querySelector("#tipAmount");
const totalBillWithTipOutput = document.querySelector("#totalBillWithTip");
const tipPerPersonOutput = document.querySelector("#tipPerPerson");
const totalBillWithTipPerPersonOutput = document.querySelector("#totalBillWithTipPerPerson");

// Calculate and update results on input change
function calculateTip() {
  // Get input values
  const billTotal = parseFloat(billTotalInput.value);
  const tipPercent = parseInt(tipInput.value);
  const numOfPeople = parseInt(numOfPeopleInput.value);

  // Calculate tip amount, total bill with tip, tip per person, and total bill with tip per person
  const tipAmount = (billTotal * tipPercent) / 100;
  const totalBillWithTip = billTotal + tipAmount;
  const tipPerPerson = tipAmount / numOfPeople;
  const totalBillWithTipPerPerson = totalBillWithTip / numOfPeople;

  // Update results
  tipOutput.innerHTML = tipPercent + "%";
  tipAmountOutput.value = tipAmount.toFixed(2);
  totalBillWithTipOutput.value = totalBillWithTip.toFixed(2);
  tipPerPersonOutput.value = tipPerPerson.toFixed(2);
  totalBillWithTipPerPersonOutput.value = totalBillWithTipPerPerson.toFixed(2);
}

// Add event listeners to inputs
billTotalInput.addEventListener("input", calculateTip);
tipInput.addEventListener("input", calculateTip);
numOfPeopleInput.addEventListener("input", calculateTip);

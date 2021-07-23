const billForDivision = document.getElementById('billForDivision');
const tip5 = document.getElementById('tip5');
const tip10 = document.getElementById('tip10');
const tip15 = document.getElementById('tip15');
const tip25 = document.getElementById('tip25');
const tip50 = document.getElementById('tip50');

const tipCustom = document.getElementById('tipCustom');
const NumberOfPeople = document.getElementById('NumberOfPeople');

billForDivision.addEventListener('change', recalculateBill);
NumberOfPeople.addEventListener('change', recalculateBill);


function recalculateBill() {
  let bill = billForDivision.value / NumberOfPeople.value;
  console.log(bill);
}

let billForDivision = document.getElementById('billForDivision');
const tip5 = document.getElementById('tip5');
const tip10 = document.getElementById('tip10');
const tip15 = document.getElementById('tip15');
const tip25 = document.getElementById('tip25');
const tip50 = document.getElementById('tip50');

const tip = document.querySelectorAll('.tip');

const tipCustom = document.getElementById('tipCustom');
let numberOfPeople = document.getElementById('numberOfPeople');
const totalPerPerson = document.getElementById('totalPerPerson');
let tipPerPerson = document.getElementById('tipPerPerson');
const btnReset = document.querySelector('.btn');




tip.forEach((input) => {
  input.addEventListener('click', recalculateTip);


});


tip.forEach((input) => {
  input.addEventListener('click', recalculateBill);


});


function recalculateTip() {

  tipPerPerson.value = ((billForDivision.value * this.value / 100) / numberOfPeople.value).toFixed(2);


}





function recalculateBill() {



  let bill = (billForDivision.value / numberOfPeople.value) + Number(tipPerPerson.value);


  if (numberOfPeople.value != '' && billForDivision.value != '') {
    totalPerPerson.value = bill.toFixed(2);

    console.log(Number(tipPerPerson.value));

  } else {

    totalPerPerson.value = '0.00';
  };

};

function reset() {
  totalPerPerson.reset();
  tipPerPerson.reset();
}








billForDivision.addEventListener('input', recalculateBill);
numberOfPeople.addEventListener('input', recalculateBill);
btnReset.addEventListener('click', reset);

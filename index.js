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
var newItem = document.createElement('span');

var howManyPpl = document.querySelector('.HowManyPeople');

var textNode = document.createTextNode("Can't be 0");
newItem.appendChild(textNode);


tip.forEach((input) => {
  input.addEventListener('click', recalculateBill);


});



function recalculateBill() {

  let variableChecked = document.querySelector('input[type="radio"]:checked');


  const tipPourcentage = variableChecked ? variableChecked.value : 0;
  tipPerPerson.value = ((billForDivision.value * tipPourcentage / 100) / numberOfPeople.value).toFixed(2);


  let bill = (billForDivision.value / numberOfPeople.value) + Number(tipPerPerson.value);


  if (numberOfPeople.value === '0') {


    howManyPpl.insertBefore(newItem, howManyPpl.childNodes[2]);

    tipPerPerson.value = '0.00';


  } else if (numberOfPeople.value != '' && billForDivision.value != '') {

    totalPerPerson.value = bill.toFixed(2);
    console.log(typeof billForDivision.value);


  } else {
    newItem.remove();
    totalPerPerson.value = '0.00';
    tipPerPerson.value = '0.00';
  };

};

function reset() {
  billForDivision.value = '0';
  numberOfPeople.value = '1';
  recalculateBill();


}








billForDivision.addEventListener('input', recalculateBill);
numberOfPeople.addEventListener('input', recalculateBill);
btnReset.addEventListener('click', reset);

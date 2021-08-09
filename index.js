const billForDivision = document.getElementById('billForDivision');
const tip5 = document.getElementById('tip5');
const tip10 = document.getElementById('tip10');
const tip15 = document.getElementById('tip15');
const tip25 = document.getElementById('tip25');
const tip50 = document.getElementById('tip50');

const tip = document.querySelectorAll('.tip');

const tipCustom = document.getElementById('tipCustom');
const numberOfPeople = document.getElementById('numberOfPeople');
const totalPerPerson = document.getElementById('totalPerPerson');
let tipPerPerson = document.getElementById('tipPerPerson');


let onePersonPays = 0;








tip.forEach((input) => {
  input.addEventListener('click', recalculateBill);


});


function recalculateBill() {




  tipPerPerson.value = (billForDivision.value * parseInt(this.value) / 100) / numberOfPeople.value;


  let bill = (billForDivision.value / numberOfPeople.value) + tipPerPerson.value;




  console.log(bill);
  totalPerPerson.value = bill;





};






billForDivision.addEventListener('input', recalculateBill);
numberOfPeople.addEventListener('change', recalculateBill);

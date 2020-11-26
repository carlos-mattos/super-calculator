window.addEventListener('load', start);

let num1 = 0;
let num2 = 0;

function start() {
  let inputNum1 = document.querySelector('#num1');
  let inputNum2 = document.querySelector('#num2');

  inputNum1.focus();

  inputNum1.addEventListener('keyup', handleInputNum1);
  inputNum2.addEventListener('keyup', handleInputNum2);

  preventFormSubmit();
}

function handleInputNum1(event) {
  value = (event.target.value) ? event.target.value : 0;
  num1 = parseFloat(value);
  render();
}

function handleInputNum2(event) {
  value = (event.target.value) ? event.target.value : 0;
  num2 = parseFloat(value);
  render();
}

function render() {
  sum();
  sub1();
  sub2();
  multi();
  div1();
  div2();
  quad2();
  divint2();
  fat2();
  quad1();
  divint1();
  fat1();
}


function preventFormSubmit() {
  function handleFormSubmit(event) {
    event.preventDefault();
  }

  let form = document.querySelector('form');
  form.addEventListener('submit', handleFormSubmit);
}

function sum() {
  let sum = document.querySelector('#sum');
  let op = num1 + num2;
  sum.value = op;
}

function sub1() {
  let sub1 = document.querySelector('#sub1');
  let op = num1 - num2;
  sub1.value = op;
}

function sub2() {
  let sub2 = document.querySelector('#sub2');
  let op = num2 - num1;
  sub2.value = op;
}

function multi() {
  let multi = document.querySelector('#multi');
  let op = num1 * num2;
  multi.value = op;
}

function div1() {
  let div1 = document.querySelector('#div1');
  let op = num1 / num2;
  div1.value = op;
}

function div2() {
  let div2 = document.querySelector('#div2');
  let op = num2 / num1;
  div2.value = op;
}

function quad1() {
  let quad1 = document.querySelector('#quad1');
  let op = num1 ** 2;
  quad1.value = op;
}

function quad2() {
  let quad2 = document.querySelector('#quad2');
  let op = num2 ** 2;
  quad2.value = op;
}

function divint1() {
  let divint1 = document.querySelector('#divint1');
  let divisores = [];
  if (num1 > 0) {
    for (let i = 1; i <= num1; i++) {
      if (num1 % i == 0) {
        divisores.push(i);
      }
    }
    divint1.value = `${divisores} (${divisores.length})`;
  }
  else {
    divint1.value = 0;
  }
}

function divint2() {
  let divint2 = document.querySelector('#divint2');
  let divisores = [];
  if (num2 > 0) {
    for (let i = 1; i <= num2; i++) {
      if (num2 % i == 0) {
        divisores.push(i);
      }
    }
    divint2.value = `${divisores} (${divisores.length})`;
  }
  else {
    divint2.value = 0;
  }
}

function fat1() {
  let fat1 = document.querySelector('#fat1');
  let op = num1;
  if (num1 <= 21) {
    for (let i = num1 - 1; i >= 1; i--) {
      op = op * i;
    }
    fat1.value = op;
  }
  else {
    fat1.value = "Número muito grande";
  }
}

function fat2() {
  let fat2 = document.querySelector('#fat2');
  let op = num2;
  if (num2 <= 21) {
    for (let i = num2 - 1; i >= 1; i--) {
      op = op * i;
    }
    fat2.value = op;
  }
  else {
    fat2.value = "Número muito grande";
  }
}
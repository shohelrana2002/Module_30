// default man =0; ba ja isaw tai hoite pay
function number(num1 = 0, num2 = 4545, num3 = 0) {
  const sum = num1 + num2 + num3;
  console.log(num1, num2, num3, sum);
}

// number(5, 5);
// number(5);
number();

// all a default function perameter
function name(fastName, lastName = "") {}

function array(array = []) {}

function object(obj = {}) {}
function buliyan(buliyan = true) {}

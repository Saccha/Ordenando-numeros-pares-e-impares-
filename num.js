let val = [];
let n = parseInt(gets());

for (i=1; i <= n; i++) {
  val.push(parseInt(gets()));
}

let pares = val.filter((num) => {
  return (num % 2 == 0);
});

let impares = val.filter((num) => {
  return (num % 2 != 0);
});

function cpares(a, b) {
  return a-b;
}

function cimpares(a, b) {
  return b-a;
}

pares.sort(cpares);
impares.sort(cimpares);

for (i=0; i < pares.length; i++) {
  console.log(pares[i]);
}

for (i=0; i < impares.length; i++) {
  console.log(impares[i]);
}

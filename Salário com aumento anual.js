// Versão fixa
let salario = 1000;
let ano = 1996;
let aumento = 0.0015;

while (ano <= 2025) {
  salario += salario * aumento;
  aumento *= 2;
  ano++;
}

console.log("Salário atual:", salario.toFixed(2));

// Versão com prompt
let salarioInicial = parseFloat(prompt("Digite o salário inicial:"));
let salario2 = salarioInicial;
let ano2 = 1996;
let aumento2 = 0.0015;

while (ano2 <= 2025) {
  salario2 += salario2 * aumento2;
  aumento2 *= 2;
  ano2++;
}

console.log("Salário atual:", salario2.toFixed(2));

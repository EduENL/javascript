document.write('<h2 style="color: blue;">Resolução</h2><br>');


document.write('1º Exemplo: <br><br>');

// Digite a resolução do 1º exemplo aqui e visualize o resultado no navegador

document.write('<br><br>');

let numero1 = 2;
let numero2 = 2;
let numeros = numero1 + numero2;

document.write(`A soma dos números <strong>${numero1} + ${numero2}</strong> é igual a: <strong>${numeros}</strong> <br>`);
document.write('__________________________________________________________<br><br>');

document.write('2º Exemplo: <br><br>');

// Digite a resolução do 2º exemplo aqui e visualize o resultado no navegador

let number = 5;
let number1 = 3;

document.write(`O número 1 (${number}) é menor que o número 2 (${number1})? <br>`);

if (number < number1) {
    document.write('true');
} else {
    document.write('false');
}
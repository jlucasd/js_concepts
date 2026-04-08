/*
Autor: João Damiani
Criado em: 08/04/2026
*/

// Inserindo um texto no parágrafo
document.getElementById("texto").innerHTML = "Meu primeiro texto <b>JS</b>!";
alert(10 + 5);
console.log("Oi isso é um console.log!");
let a, b, c; a = 5; b = 6; c = 7;
let pessoa = "João";
function minhafuncao() {
    document.writeln(5 * 5);
}
console.log(5 + 5); // Números
console.log("5" + "5"); // Strings

// Variáveis
var d;
let e;
const f = 0;

var x = a * b;
console.log(x);


// Aprendendo variáveis

var pote = "Bombom";
alert(pote);

// Declaração de variáveis
var x, y, z;

// Atribuição de valores
x = 2;
y = 3;
z = x + y;

alert(z);

var nome, sobrenome, nomeCompleto, idade;

nome = "João";
sobrenome = "Damiani";
idade = 32;
nomeCompleto = nome + " " + sobrenome;

pessoa = idade + nome;

document.getElementById("texto").innerHTML = pessoa;


// Let torna a variável única - usado para praticamente tudo

let person = "John";

{
    let person = "Marie";
}

console.log(person); // ficará sendo João

// Const nunca pode mudar - usado para valores que não mudam

const pi = 3.14159265359;


// /*
// Autor: João Damiani
// Criado em: 08/04/2026
// */

// // Inserindo um texto no parágrafo
// document.getElementById("texto").innerHTML = "Meu primeiro texto <b>JS</b>!";
// alert(10 + 5);
// console.log("Oi isso é um console.log!");
// let a, b, c; a = 5; b = 6; c = 7;
// let pessoa = "João";
// function minhafuncao() {
//     document.writeln(5 * 5);
// }
// console.log(5 + 5); // Números
// console.log("5" + "5"); // Strings

// // Variáveis
// var d;
// let e;
// const f = 0;

// var x = a * b;
// console.log(x);


// // Aprendendo variáveis

// var pote = "Bombom";
// alert(pote);

// // Declaração de variáveis
// var x, y, z;

// // Atribuição de valores
// x = 2;
// y = 3;
// z = x + y;

// alert(z);

// var nome, sobrenome, nomeCompleto, idade;

// nome = "João";
// sobrenome = "Damiani";
// idade = 32;
// nomeCompleto = nome + " " + sobrenome;

// pessoa = idade + nome;

// document.getElementById("texto").innerHTML = pessoa;


// // Let torna a variável única - usado para praticamente tudo

// let person = "John";

// {
//     let person = "Marie";
// }

// console.log(person); // ficará sendo João

// // Const nunca pode mudar - usado para valores que não mudam

// const pi = 3.14159265359;


//  Operadores

//  Operador Aritmẽtico
// Operador de Atribuição
// Operador de Sequência
// Operador de Comparação
// Operador Condicional (Ternário)
// Operadores Lógicos

// var valor1, valor2, total;
// valor1 = 5;
// valor2 = 2;

// // Aritmético
// total = valor1 + valor2;
// total = valor1 - valor2;
// total = valor1 * valor2;
// total = valor1 / valor2;
// total = ++valor1; // Coloca 1 a mais
// total = --valor1; // Coloca 1 a mais
// alert(total);
// alert('O valor 1 ficou: ' + valor1);

// // Atribuição / Aritmético
// valor1 = valor1 + valor2;
// valor1 += valor2;
// valor1 -= valor2;
// valor1 *= valor2;
// valor1 /= valor2;

// // Sequência
// var nome, sobreNome, nomeCompleto;
// nome = "Dimitri ";
// sobreNome = "Teixeira";

// nomeCompleto = nome + sobreNome
// alert(nomeCompleto);

// // Lógicos
// var valor3;
// valor3 = "8";
// total = (valor1 == valor2); // igual
// total = (valor1 === valor3); // vai ver se o valor E o tipo são iguais
// total = (valor1 != valor2); // diferente
// total = (valor1 !== valor3); // vai ver se o valor E o tipo são diferentes
// total = (valor1 < 4); // menor
// total = (valor1 > 4); //maior
// total = (valor1 <= 4); // menor ou igual
// total = (valor1 >= 4); // maior ou igual
// alert(total);

// // Condicional
// var idade, eleitor, resultado;
// idade = 17;
// eleitor = (idade<18) ? "Não Eleitor" : "Sim, eleitor";

// alert("A resposta é: " + eleitor + " a idade dele é de: "+ idade);


// // Lógicos
// resultado = (idade > 60 && idade <70); // E
// resultado = (idade > 60 || idade <70); // OU


// Funções

var valor1, valor2, total;

function soma(valor1, valor2){
    return valor1 + valor2;
}

function realParaDolar(real, cotacaoDolar){
    return real * cotacaoDolar;
}

function alertaHello(){
    alert("Olá Mundo!!!!!")
}

function paraCelsius(valorFahrenheit){
    return (5/9) * (valorFahrenheit - 32);
}

function colocaTexto(total){
    document.getElementById("texto").innerHTML = total;
}

total = soma(2, 2);

colocaTexto(total);

total = realParaDolar(10, 5.10);

colocaTexto(total);

total = paraCelsius(80);

colocaTexto(total);
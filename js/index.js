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

// var valor1, valor2, total;

// function soma(valor1, valor2){
//     return valor1 + valor2;
// }

// function realParaDolar(real, cotacaoDolar){
//     return real * cotacaoDolar;
// }

// function alertaHello(){
//     alert("Olá Mundo!!!!!")
// }

// function paraCelsius(valorFahrenheit){
//     return (5/9) * (valorFahrenheit - 32);
// }

// function colocaTexto(total){
//     document.getElementById("texto").innerHTML = total;
// }

// total = soma(2, 2);

// colocaTexto(total);

// total = realParaDolar(10, 5.10);

// colocaTexto(total);

// total = paraCelsius(80);

// colocaTexto(total);

// Objetos

// const carro = {
//     marca:"Ford", 
//     modelo:"Ka", 
//     ano:2015, 
//     placa:"ABC-1234",
//     buzina: function() {alert('Biiiiiiiii')},
//     completo: function(){
//         return "A marca é: "+ this.marca + " e o modelo é: "+ this.modelo
//     }
// }; //É comum usar o const para objetos

// console.log(carro.completo());


// Eventos

// Existem muitos eventos. Veja os mais utilizados:


//Click
// onclick -> Disparado quando recebe um click.
// ondblclick -> Disparado quando clique duplo.

//Mouse
// onmouseover -> Disparado quando o mouse está sobre.
// onmouseout -> Disparado quando o mouse é movido para fora do elemento.
// onmousemove -> Disparado quando o mouse é movido no elemento.
// onmousedown -> Disparado quando o clique do botão foi pressionado.
// onmouseup -> Disparado quando o clique do botão é liberado

//Inputs / Forms
// onfocus -> Disparado quando o elemento recebe o foco. Válido para input, s
// onchange -> Disparado quando existe uma mudança no conteúdo. "Ao mudar".
// onblur -> Disparado quando o elemento perde o foco.

// Evento de tecla pressionada
// onkeydown -> Disparado quando uma tecla é pressionada.
// onkeypress -> Disparado quando uma tecla é pressionada e solta.
// onkeyup -> Disparado quando uma tecla é solta sobre um elemento.


// Evento de tela
// onload -> Disparado quando a página terminou de ser carregada. Body.
//onresize -> Disparado quando há um redimensionamento da janela.

// // onclick()

// function eventoClick() {
//     // alert("Acionou o evento de click!");
//     document.body.style.backgroundColor = "yellow";
// }

// // ondblclick

// function eventoDblClick() {
//     alert("Acionou o evento de duplo click!");
// }

// // onmouseover

// function eventoMouseOver() {
//     let div = document.getElementById("quadrado")
//     div.style.backgroundColor = "red";
// }

// // onmouseout

// function eventoMouseOut() {
//     let div = document.getElementById("quadrado")
//     div.style.backgroundColor = "blue";
//     div.innerHTML = "";
// }

// // onmousemove

// function eventoMouseMove() {
//     let p = document.getElementById("texto")
//     p.append("Mouse se movendo<br>");
// }

// // onfocus

// function eventoOnFocus() {
//     let input = document.getElementById("cadastro");
//     input.value = "";
// }

// // onchange

// function eventoOnChange() {
//     let select = document.getElementById("itens");
//     alert("O valor digitado foi: " + select.value);
// }

// // onBlur

// function eventoOnBlur() {
//     eventoClick()
// }

// // onkeypress

// function eventoOnKeyPress() {
//     let input = document.getElementById("cadastro").value;
//     console.log(input)
// }

// // onkeydown

// function eventoOnKeyDown() {
//     let input = document.getElementById("cadastro").value;
//     console.log(input)
// }

// // onkeyup

// function eventoOnKeyUp() {
//     let input = document.getElementById("cadastro").value;
//     console.log(input)
// }

/* ARRAYS
Os arrays JavaScript são usados para armazenar vários valores
em uma única variável. Diferente dos objetos, que funcionam com
propriedades ou "nomes" que você dá para os itens dentro dele, os
arrays não possuem propriedades. O item dentro dele é encontrado pela
posição.

Imagine um array como uma lista de itens, com controle, por ordem de
posição dentro dele.

Ex: const lista = ["arroz","feijão","macarrão","leite"];

A lista[0] (lista na posição 0) vai conter o valor "arroz".
A lista[1] (lista na posição 1) vai conter o valor "feijão".

E assim por diante.
*/

const lista = ["arroz", "feijão", "macarrão", "leite"];

const lista_nova = [];
lista_nova[0] = "arroz";
lista_nova[1] = "feijão";
lista_nova[2] = "macarrão";
lista_nova[3] = "leite";

const lista_frutas = new Array("banana", "maçã", "laranja", "uva");

lista[0] = "Café";

console.log(lista);


const pessoa = ["João", "Damiani", 32, "Masculino"]; //array
const pessoa_obj = { nome: "João", sobrenome: "Damiani", idade: 32, genero: "Masculino" }; //objeto

pessoa[0];
pessoa_obj.nome;

pessoa.length;
alert(pessoa[pessoa.length - 1]); // mostra o último elemento
pessoa.push("Brasileiro"); //adiciona um elemento no final

Array.isArray(pessoa); //verifica se é um array.

pessoa.pop(); // remove o último elemento
pessoa.shift(); // remove o primeiro elemento
pessoa.unshift("Pai"); // adiciona um elemento no início
pessoa.splice(1, 0, "sobrenome", "do Baba"); // remove um elemento pelo índice e adiciona um novo elemento

const super_lista = lista.concat(lista_frutas); // concatena arrays com 1 ou mais.

const jogadores = ["Biro Biro", "Ribamar", "Romário", "Zico", "Pelé", "Neymar", "Cristiano Ronaldo", "Vampeta"]
const craques = jogadores.slice(2, 7); // corta a lista com os elementos do índice 2 ao 4 (não incluso)

const jogadores_ordenados = jogadores.sort(); // ordena em ordem alfabética
const jogadores_ordenados_reverso = jogadores.reverse(); // inverte a ordem alfabética

const numeros = [40, 100, 1, 5, 25, 10];
const numeros_ordenados = numeros.sort(function (a, b) { return a - b }); // ordena em ordem crescente
const maior_20 = numeros.filter(filtroNumeros);

function maiorNumero(arr) {
    return Math.max.apply(null, arr);
}

function menorNumero(arr) {
    return Math.min.apply(null, arr);
}

function filtroNumeros(value, index, array) {
    return value > 20;
}



document.getElementById("texto").innerHTML = maior_20;

// delete pessoa[0]; // remove um elemento pelo índice, mas não altera os indices, deixa buracos. NÃO USAR!


/* IF e ELSE */

var interruptor = "on";

if (interruptor == "on") {
    alert("A lampada está ligada");
} else {
    alert("A lampada está desligada");
}

var hora = new Date().getHours();

if (hora < 12) {
    alert("Bom dia!");
} else if (hora < 18) {
    alert("Boa tarde!");
} else {
    alert("Boa noite!");
}

function verificar() {
    let nome = document.getElementById("nome").value;
    let p = document.getElementById("texto");
    if (nome == "" || nome == null) {
        p.innerHTML = "Digite seu nome!";
        p.style.color = "red";
    } else {
        p.innerHTML = "Tudo certo!!!"
        p.style.color = "green";
    }
}



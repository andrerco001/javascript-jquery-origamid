// Javascript Fondamentals

console.log('Hello World!');

var nome = 'Andre';
var idade = 37;

var x = 25;
var y = 10;
var resultado = x + x * y / x;
console.log(resultado);

// Variables types
var name1 = 'André'; // string
var age = 37; // number
var probability = true; // boolean
var job; // undefined

// typeof to verify the value type of a variable
var name = 'André';
console.log(typeof name); // string

// Concatenar
var name = 'Lilys';
var sobreNome = 'Oliveira';
console.log(name + ' ' + sobreNome);

// Number
var gols = 1000;
var ages = 16;
var golsByYear = gols / age;
console.log(golsByYear);

// Decimal
var peso = 92.5;
console.log(typeof peso);

// NaN - Not a Number
var number1 = 80;
var unity = 'Kg';
var peso = number1 + unity;
var pesoByTwo = peso / 2;
console.log(pesoByTwo);

// operadores
// + - * / % **

// Adiciona e atribui valor
var x = 30;
x += 40;
x *= 20;
x /= 5;

// Comparacao
var teste1 = 20 == '2';
var teste2 = 20 === '20';
var teste3 = 10 != '10';

// > >= < <=

// Lógicos && || 


// functions
function areaQuadrado(lado){
    var area = lado * lado;
    return area;
}

console.log(areaQuadrado(4));


function imc(peso, altura){
    var imcTotal = peso / (altura * altura);
    return imcTotal;
}

console.log(imc(94, 1.84));








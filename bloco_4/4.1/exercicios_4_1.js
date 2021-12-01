dedede// Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.
// let num1 = 10;
// let num2 = 5;
// if (num1 > num2) {
//     console.log("num1 > num2")
// } else {
//     console.log("nun2 > num1")
// }
//Faça um programa que retorne o maior de três números. 
//Defina no começo do programa três constantes com os valores que serão comparados.
let num1 = 6;
let num2 = 8;
let num3 = 7;
if (num1 > num2 && num1 > num3) {
    console.log(num1);
} 
else if (num3> num2 ){
    console.log(num3 );
} 
else  {
    console.log (num2);
} 


// Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, 
// "negative" se for negativo e "zero" caso contrário.   
// let num1 = -1;
// let num2 = 2;
// if ( num1 > 0) {
//     console.log("num1 é positive");
// } 
// else if ( num1 < 0 ) {
//     console.log("num1 é negative");
// }  
// else  {
//     console.log("num1 é zero");
// }
// Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. 
// Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. 
// Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

// let a = 60;
// let b = 40;
// let c = 80;
// let mult = a*b*c;
// let sum = a+b+c;

// if (  mult <= 0 || sum > 180 || sum < 180) {
//     console.log(false);
// } else {
//     console.log(true);
// }

//Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
// let peca = "rorre";
// peca = peca.toLocaleLowerCase();
// switch (peca){
//     case "peão":
//         console.log("movimento linha vertical casa a casa");
//         break;

//     case "rainha":
//         console.log("movimento qq direção múltiplas casas");
//         break;

//     case "rei":
//         console.log("movimento qq direção casa a casa");
//         break;

//     case "bispo":
//         console.log("movimento diagonal múltiplas casas");
//         break;

//     case "cavalo":
//         console.log("movimento em L. tres casas");
//         break;

//     case "torre":
//         console.log("movimento linha reta vertical horizontal múltiplas casas");
//         break;
    
//     default:
//         console.log("Peça inexistente");
//         break;
// } 


// // Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
// let nota = -100;

// if (nota < 50 && nota >= 0) {
//     console.log("Nota F");
// }
// if (nota >= 50 && nota < 60){
//     console.log("Nota E");
// }
// if (nota >= 60 && nota < 70){
//     console.log("Nota D");
// }
// if (nota >= 70 && nota < 80){
//     console.log("Nota C");
// }
// if (nota >= 80 && nota < 90){
//     console.log("Nota B");
// }
// if (nota >= 90 ){
//     console.log("Nota A");
// }
// if (nota < 0 || nota > 100){
//     console.log("nota digitada errada")
// }



// Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par.
// Caso contrário, ele retorna false .

// Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. 
// Caso contrário, ele retorna false .

// Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. 
// A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto)
// a empresa terá ao vender mil desses produtos.

// Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. 
// Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.

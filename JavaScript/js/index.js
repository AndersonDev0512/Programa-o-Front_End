/*AULA 152


//String 

var texto = "Curso de JavaScript";

//number 
var numeroInteiro = -7;
var numeroFracionado = 111210.75

//boolean
var teste = true 
var teste = false

//alert(numeroFracionado) //abrir um dialog
//document.write(texto)
//alert(texto)
console.log(texto);

*/
/*AULA 153
var nome = prompt("Digitre o seu nome");
var idade = prompt("Digite a sua idade");
document.write('<h1> Olá '+nome,' tudo bem? Estou vendo aqui que você possui '+idade,' anos </h1>');
*/

/*AULA 155
//null
var teste = null;

var teste2;

console.log(teste);
console.log(teste2);

//undefined 
*/
//AULA 161
/*
var nota = prompt("Digite a nota do aluno:");
var media = 7;

if (nota >= media) {
    document.write("Você foi aprovado");
}
else {
    document.write("Você está reprovado");
}
*/

//AULA 162
/*
var variavel1 = 10;
var variavel2 = 20;

//variavel1 = parseInt(variavel1);
//variavel2 = parseFloat(variavel2);

console.log(variavel1);
console.log(variavel2);

document.write(variavel1.toString() + variavel2.toString());
*/
//AULA 164

//true

var nome = prompt("Digite o seu nome");
var altura = prompt("Digite a sua altura em Centimetros");
var peso = prompt("Digite o seu peso");
var classificacao
peso = parseFloat(peso);
altura = parseFloat(altura);
altura = altura/100;
var imc = peso / (altura *altura);

if (imc <16) {
     classificacao = "Baixo peso muito grave";
}
else if (imc >=16 && imc <=16.99) {
    classificacao = "Baixo Peso Grave";
}
else if (imc >=17 && imc <=18.49) {
    classificacao = "Baixo Peso";
}
else if (imc >=18.50 && imc <=24.99) {
    classificacao = "Peso Normal";
}
else if (imc >=25 && imc <=29.99) {
    classificacao = "Sobrepeso";
}
else if (imc >=30 && imc <=34.99) {
    classificacao = "Obesidade Grau 1";
}
else if (imc >=35 && imc <=39.99) {
    classificacao = "Obesidade Grau 2";
}
else if (imc >40) {
    classificacao = "Obesidade Grau 3";
}
    document.write(nome+ " Possui índice de massa corporal igual a ", imc.toFixed(2) + " sendo classificado como: " + classificacao);

//document.write(M);





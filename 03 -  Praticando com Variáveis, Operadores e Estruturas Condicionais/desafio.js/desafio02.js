/* 2) O IMC – Indice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta. 

Formula do IMC:
IMC = peso / (altura * altura)

Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

IMC em adultos Condição:
- Abaixo de 18.5 Abaixo do peso;
- Entre 18.5 e 25 Peso normal;
- Entre 25 e 30 Acima do peso;
- Entre 30 e 40 Obeso;
- Acima de 40 Obsesidade Grave; */

const peso = 70;
const altura = 1.58;
const IMC = peso / Math.pow(altura, 2);

if (IMC < 18.5) {
    console.log(`Seu IMC é ${IMC.toFixed(2)}. Você está abaixo do Peso`);
} else if (IMC < 25) {
    console.log(`Seu IMC é ${IMC.toFixed(2)}. Seu peso está normal`);
} else if (IMC < 30){
    console.log(`Seu IMC é ${IMC.toFixed(2)}. Você está acima do Peso`);
} else if (IMC < 40){
    console.log(`Seu IMC é ${IMC.toFixed(2)}. Você está obeso`);
}else {
    console.log(`Seu IMC é ${IMC.toFixed(2)}. Você está com obesidade Grave`);
}
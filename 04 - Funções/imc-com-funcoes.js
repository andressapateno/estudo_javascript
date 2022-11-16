/* 2) O imc – Indice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta. 

Formula do IMC:
IMC = peso / (altura * altura)

Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

IMC em adultos Condição:
- Abaixo de 18.5 Abaixo do peso;
- Entre 18.5 e 25 Peso normal;
- Entre 25 e 30 Acima do peso;
- Entre 30 e 40 Obeso;
- Acima de 40 Obsesidade Grave; */

function calcularimc(peso, altura) {
    return peso / Math.pow(altura, 2);
}

function classificarimc(imc) {
    if (imc < 18.5) {
        return `Seu IMC é ${imc.toFixed(2)}. Você está abaixo do Peso`;
    } else if (imc < 25) {
        return `Seu IMC é ${imc.toFixed(2)}. Seu peso está normal`;
    } else if (imc < 30) {
        return `Seu IMC é ${imc.toFixed(2)}. Você está acima do Peso`;
    } else if (imc < 40) {
        return `Seu IMC é ${imc.toFixed(2)}. Você está obeso`;
    } else {
        return `Seu IMC é ${imc.toFixed(2)}. Você está com obesidade Grave`;
    }
}

function main() {
    const peso = 71;
    const altura = 1.58;

    const imc = calcularimc(peso, altura);
    console.log(classificarimc(imc));
}

main();


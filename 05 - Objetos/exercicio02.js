/* 2) Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do Meu IMC (IMC = peso / (altura * altura));
Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor
do seu IMC; */

class Pessoa {
    nome;
    peso;
    altura

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularImc() {
        return (this.peso / (this.altura * this.altura)).toFixed(2)
    }

    classificarIMC() {

        const imc = this.calcularImc();

        if (imc < 18.5) {
            return `Meu IMC é ${imc}. Estou abaixo do Peso`;
        } else if (imc < 25) {
            return `Meu IMC é ${imc}. Meu peso está normal`;
        } else if (imc < 30) {
            return `Meu IMC é ${imc}. Estou acima do Peso`;
        } else if (imc < 40) {
            return `Meu IMC é ${imc}. Estou obeso`;
        } else {
            return `Meu IMC é ${imc}. Estou com obesidade Grave`;
        }
    }
}

const jose = new Pessoa('José', 70, 1.75);

console.log(`Me chamo ${jose.nome} tenho ${jose.peso} kg e ${jose.altura}m de altura. ${jose.classificarIMC()}`);



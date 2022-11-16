/* 1) Crie uma classe para representar carros. 
Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
gasto em reais para realizar este percurso. */

class Carro {
    marca;
    cor;
    gastoMedioCombustivel;

    constructor (marca, cor, gastoMedioCombustivel) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioCombustivel = gastoMedioCombustivel;
    }

    calcularViagem(valorCombustivel,distanciaEmKm){
        return distanciaEmKm * this.gastoMedioCombustivel * valorCombustivel;

    }
}



const soul = new Carro('Kia', 'Preto', 1/12);

console.log(soul.calcularViagem(5,70));
const palio = new Carro('Fiat', 'Vermelho', 1/10);

console.log(palio.calcularViagem(5,70));
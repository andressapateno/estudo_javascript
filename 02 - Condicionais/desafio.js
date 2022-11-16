/*Faça um programa para calcular o valor de uma viagem.

Você terá 5 variáveis. Sendo elas:
 1 - Preço do etanol;
 2 - Preço do gasolina;
 3 - O tipo de combustível que está no seu carro;
 4 - Gasto médio de combustível do carro por KM;
 5 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem.*/

const precoEtanol = 5.79;
const precoGasolina = 6.66;
let tipoDeCombustivel = 'gasolina';
const kmPorLitro = 12;
const distancia = 1380;
const litrosConsumidos = distancia / kmPorLitro;

tipoDeCombustivel = 'alcool';
tipoDeCombustivel = 'gasolina';
tipoDeCombustivel = 'alcool';

if (tipoDeCombustivel === 'gasolina') {
    console.log((litrosConsumidos * precoGasolina).toFixed(2));
} else {
    console.log((litrosConsumidos * precoEtanol).toFixed(2));
}




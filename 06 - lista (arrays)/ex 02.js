//2) Crie um programa que seja capaz de percorrer uma lista de números e imprima o número par encontrado.

const numeros = [7, 12, 24, 69];


for (let i = 0; i < numeros.length; i++) {
   const numero = numeros[i];
   const numeroPar = (numero % 2) === 0;

   if (numeroPar) {
    console.log(`${numero} é Par!`);
   }
    
}
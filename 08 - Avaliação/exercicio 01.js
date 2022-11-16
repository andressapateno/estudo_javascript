// 1) Faça um programa que receba a média de um aluno.
// Caso a média seja < 5 imprima "Reprovado"
// Caso a média seja >= 5 e < 7 imprima "Recuperação"
// Caso a média seja >= 7 imprima "Aprovado"

//     Exemplo:
//         Entrada:
//             5.5
//         Saída:
//             Recuperação

const { gets, print } = require('./funcoes-auxiliares-ex1');

const media = gets();


if (media < 5) {
    print(`A média foi ${media}, o aluno esta Reprovado`);
} else if (media < 7) {
    print(`A média foi ${media}, o aluno esta em Recuperação`);
} else {
    print(`A média foi ${media}, o aluno esta Aprovado`);
}


print(media);




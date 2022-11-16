function escreverNome(nome) {
    console.log(`Meu nome é ${nome}.`);
}
const nome = 'Andressa';
const idade = 11
escreverNome(nome);




function verificarIdade(idade){

    if (idade>=18) {
        return `${nome} você tem ${idade} anos, você é maior de idade.`
    } else {
        return `${nome} você tem ${idade} anos, você é menor de idade.`
    }
}

console.log (verificarIdade(idade));
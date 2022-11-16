
// Classe:

class Pessoa {
    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2022 - idade;
    }

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`)
    }
}

//Instância:
const vitor = new Pessoa();
vitor.nome = 'Vitor J Guerra';
vitor.idade = 25;

const renan = new Pessoa();
renan.nome = 'Renan J Paula';
renan.idade = 30;

vitor.descrever();
renan.descrever();

// Por constante:

/* const pessoa = {
    nome: 'Vitor J Guerra',
    idade: 25,

    descrever: function () {
        console.log (`Meu nome é ${this.nome} e minha idade é ${this.idade}`);

    }
};


pessoa.descrever();

console.log(pessoa['nome']);
pessoa['nome'] = 'teste';
pessoa.nome = 'teste'; */



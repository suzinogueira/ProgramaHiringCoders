const pessoa = {
    nome: "Joana",
    idade:"25",
    cidade:"São Paulo"
}

//Notação de ponto

console.log(pessoa.nome);

//Notação de colchetes

console.log(pessoa['idade'])//

//desestruturar o objeto

const {nome, idade, cidade} = pessoa;

console.log(nome);
console.log(idade);
console.log(cidade);
// Arrays 
const alunasGama = ['Suzi', 'Juliana', 'Stela', 'Joana'];

console.log(alunasGama[3]);

// Spread (...)

const alunasXp = [...alunasGama, "Simara"];

console.log(alunasXp);

//Métodos de iteração

// for (let i = 0; i < alunasXp.length; i++){
//     console.log(alunasXp[i]);
// }

//Map
alunasXp.map(aluna => console.log(aluna));

//Filter
const numeros = [34,45,67,90,55,76];

const numerosImpar = numeros.filter(numeros => numeros % 2 != 0);
console.log(numerosImpar);

const numerosPar = numeros.filter(numeros => numeros % 2 == 0);
console.log(numerosPar);

//find

const produtos = ["geladeira", "fogão", "cama", "mesa"];

console.log(produtos.find(produtos => produtos === "mesa"));
console.log(produtos.find(produtos => produtos === "geladeira"));

//sort

const numerosOrdemCrescente  = numeros.sort();
console.log(numerosOrdemCrescente);

const numerosOrdemDecrescente  = numeros.sort((a,b)=> b-a); //importante = altera o array original
console.log(numerosOrdemDecrescente);

//reduce - reduz o nosso array a um resultado de uma operação matemática

const numbers = [1, 34, 35];

const somaReduce = numbers.reduce((valorAnterior, valorAtual) => {
    return valorAnterior + valorAtual;
},5);

console.log(somaReduce);


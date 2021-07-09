
// | Exemplo 33 | Descrição |
// | --- | --- |
// | `Impar/par` | Crie uma função que retorna a palavra (impar/par) de acordo com seu parâmetro.|

function parImpar(n1){
    if(n1 % 2 === 0){
        return n1+ " = Par";
    }
    else{
        return n1+ " = Ímpar";
    }
}

console.log(parImpar(4));
console.log(parImpar(3));
console.log(parImpar(1));
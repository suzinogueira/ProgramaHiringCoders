// | Exemplo 18 | Descrição |
// | --- | --- |
// | `Porcentagem` | Crie uma função que calcula 5% de desconto retornando o valor do desconto.|

function desconto(valor){
    return `5% de ${valor} é: `+valor * 0.05;
}

console.log(desconto(1000));
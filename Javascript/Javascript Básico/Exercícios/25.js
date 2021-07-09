// | Exemplo 25 | Descrição |
// | --- | --- |
// | `É par` | Crie uma função que recebe 2 parâmetros e retorna o resultado da divisão entre eles. 
// Além disso, se o resto dessa divisão for zero deverá imprimir no console o valor e dizer que ele é par.|

function Par(n1, n2){
    let result = (n1 / n2).toFixed(2);
    if(result % 2 === 0){
        return `${n1} / ${n2} = ${result}. O resultado é Par!`;
    }else{
        return `${n1} / ${n2} = ${result}. O resultado não é par!`;
    }
}

console.log(Par(6,3));
// | Exemplo 32 | Descrição |
// | --- | --- |
// | `Números` | Elabore um algoritmo que receba dois números e determine qual é o maior entre eles,
//  se os números forem iguais, mostre uma mensagem no console "Os números são iguais".|

function maior(n1, n2){
    if(n1 === n2){
        return "Ambos os números são iguais";
    }
    if(n1 > n2){
        return `${n1} é maior que ${n2}`;
    }
    if(n2 > n1){
        return `${n2} é maior que ${n1}`;
    }
}

console.log(maior(2,2));
console.log(maior(4,1));
console.log(maior(4,6));


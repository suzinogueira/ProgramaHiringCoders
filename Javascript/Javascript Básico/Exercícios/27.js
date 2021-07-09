// | Exemplo 27 | Descrição |
// | --- | --- |
// | `Calculadora` | Vamos criar uma calculadora com as 4 operações matemáticas básicas? rs

//     a) Deverá ser possível escolher uma operação aritimética em forma de string: 'soma', 
//     'multiplicacao', 'divisao' e 'subtracao'
//     b) Deverá ser possível passar 2 números para a operação escolhida
//     c) Deverá retornar o resultado e imprimir no console|

function calculadora(n1,n2,operacao){
    let resultado;
    if(operacao == "soma"){
        resultado = n1+n2;
        return `Soma de ${n1} + ${n2} = ${resultado}`;
    }
    if(operacao == "multiplicacao"){
        resultado = n1*n2;
        return `Multiplicação de ${n1} * ${n2} = ${resultado}`;
    }
    if(operacao == "divisao"){
        resultado = n1/n2;
        return `Divisão de ${n1} / ${n2} = ${resultado}`;
    }
    if(operacao == "subtracao"){
        resultado = n1-n2;
        return `Subtração de ${n1} - ${n2} = ${resultado}`;
    }
}

console.log(calculadora(2,5,"soma"));
console.log(calculadora(60,6,"multiplicacao"));
console.log(calculadora(30,3,"divisao"));
console.log(calculadora(405,59,"subtracao"));
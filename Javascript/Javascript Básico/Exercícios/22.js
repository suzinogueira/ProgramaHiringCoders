// | Exemplo 22 | Descrição |
// | --- | --- |
// | `conta bancária` | Vamos criar uma conta bancária com as 3 operações básicas? rs
//     a) A conta deverá iniciar com o saldo de 100
//     b) Deverá ser possível escolher uma operação em forma de string: 'depositar', 'sacar', 'consultar saldo'
//     c) Deverá ser possível passar 1 valor para a operação escolhida
//     d) Deverá retornar o resultado e imprimir no console o saldo atual|

var saldo = 100;
var valor = 200;
var operacao = "sacar";

switch (operacao){
    case "depositar":
        saldo+=valor;
        console.log( "Você depositou o valor de R$"+valor.toFixed(2));
        break;
    case "sacar":
        if(valor <= saldo){
            saldo -= valor;
            console.log("Você sacou o valor de R$"+valor.toFixed(2));
        }
        else{
            console.log("Você não tem esse valor para saque disponível, porquê seu saldo é de R$"+saldo.toFixed(2));
        }
        break;
    case "consultar saldo":
        console.log("Seu saldo é de: R$"+saldo.toFixed(2));
}
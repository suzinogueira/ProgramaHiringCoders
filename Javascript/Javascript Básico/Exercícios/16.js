// | Exemplo 16 | Descrição |
// | --- | --- |
// | `Fatorial` | Crie uma função que irá receber um número e retornar o fatorial dele. 
// por exemplo:  3! = 3 * 2 * 1 // 6 |


var fat = 5;
var execucao = fat+"! = ";

function resultado(fatorial){
    let final = fatorial;
    execucao+=" "+fatorial+" * ";
    for(var i = fatorial-1; i >= 1; i--){
        if(i === 1){
            execucao+=" "+i;    
        }
        else{
            execucao+=" "+i+" * ";
        }
        final *= i;
        console.log(execucao);
    }

    return execucao+" = "+final;
}
console.log(resultado(fat));


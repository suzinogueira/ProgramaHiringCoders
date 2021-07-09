// | Exemplo 35 | Descrição |
// | --- | --- |
// | `Maior de idade` | Crie uma função que recebe o ano de nascimento da pessoa informando se ela é 
// maior de idade ou menor.|


function maiorIdade(nascimento){
    let idade = 2021-nascimento;
    if(idade >= 18){
        return "Você já é maior de idade. Você tem: "+idade+" anos";
    }
    else{
        return "Você é menor de idade. Você tem: "+idade+" anos";
    }
}

console.log(maiorIdade(1993));
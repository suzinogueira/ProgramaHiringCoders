// | Exemplo 11 | Descrição |
// | --- | --- |
// | `IMC` | Vamos criar uma função que calcula o IMC de uma pessoa, dado a altura em m e a massa em kg. |

var altura = 1.63;
var peso = 50;

function resultado(){
    let imc = peso/(altura * altura);
    console.log("IMC: "+imc);
    if (imc < 16.9){
        return "Muito abaixo do peso";
    }
    if (imc <= 18.4 && imc >= 17){
        return "Abaixo do peso";
    }
    if (imc <= 24.9 && imc >= 18.5){
        return "Peso normal";
    }
    if (imc >= 25){
        return "Acima do peso";
    }
}
console.log(resultado());


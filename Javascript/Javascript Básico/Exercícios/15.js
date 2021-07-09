// | Exemplo 15 | Descrição |
// | --- | --- |
// | `Conversor de temperatura` | Crie uma função que recebe uma 
// temperatura em graus celsius retorna o valor convertido em Fahrenheit. |

function convertToFahrenheit(value){
    return value * 1.8 + 32;
}

let celsius = 30;
let result = convertToFahrenheit(celsius);
console.log("Conversão de Celsius para Fahrenheit: ");
console.log(`Celsius: ${celsius} | Fahrenheit : ${result}`);
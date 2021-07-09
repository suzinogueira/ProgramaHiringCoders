// | Exemplo 19 | Descrição |
// | --- | --- |
// | `Conversor de moeda` | Crie uma função que irá converter uma quantia de real
//  para dolar utilizando a cotação do dia. |

const dolarHoje = 5.26;

function conversaoRealDolar(real){
    let result = real / dolarHoje;
    return `R$${real},00 equivale à: ${result.toFixed(2)} Dólar americano`;
}

console.log(conversaoRealDolar(10));

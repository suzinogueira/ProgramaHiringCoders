// | Exemplo 28 | Descrição |
// | --- | --- |
// | `Desconto` | Solicite o preço de uma mercadoria e o percentual de desconto. 
// Exiba no console o valor do desconto e o preço a pagar.|

var preco = 500;
var desconto = 15;

var totalDesc = preco * (desconto/100);

console.log(`O preço é ${preco.toFixed(2)} e o desconto: ${desconto}% (R$${totalDesc.toFixed(2)}).
     Total à pagar com desconto: ${(preco-totalDesc).toFixed(2)}`);
// | Exemplo 30 | Descrição |
// | --- | --- |
// | `Jantar` | Crie um algoritmo que leia o valor de um jantar, 
// calcule e informe o valor da taxa do garçom (10%) e o valor total a ser pago.|


let jantar = 100;
let garcom =  (jantar * 0.1).toFixed(2);
let total = (jantar * 1.1).toFixed(2);

console.log(`Valor do jantar: ${jantar.toFixed(2)}`);
console.log(`Taxa do garçom: ${garcom}`);
console.log(`Total para pagamento: ${total}`);
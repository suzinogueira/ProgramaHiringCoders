// | Exemplo 04 | Descrição |
// | --- | --- |
// | `Quero lucrar` | Crie um programa que me diga como lucrar nesta situação: quero 
// vender uma bicicleta que 60% do seu valor é R$300,
//  por quanto devo vendê-la para lucrar 25%? |

var pBike = 100 * 300 / 60;
var lucro = pBike * 1.25;

console.log(`O valor da bicicleta é R$${pBike},00, e para lucrar 25% preciso vender por R$${lucro},00! Assim,
terei um lucro de R$${lucro-pBike},00 (25%).`);
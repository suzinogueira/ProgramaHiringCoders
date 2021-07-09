// | Exemplo 29 | Descrição |
// | --- | --- |
// | `Viagem` | Calcule o tempo de uma viagem de carro. Pergunte a distância a percorrer e a 
// velocidade média esperada para a viagem..|

var distancia = 250;
var velocidade = 90;

var tempo = (distancia/velocidade).toFixed(2);

console.log(`Para uma viajem de ${distancia}km de distância,em uma velocidade de ${velocidade}km/h,`+
        ` o tempo aproximado será de ${tempo} horas.`);

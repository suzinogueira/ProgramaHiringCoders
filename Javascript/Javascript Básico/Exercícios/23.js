// | Exemplo 23 | Descrição |
// | --- | --- |
// | `5 em 5` | Crie um algoritmo que imprime no console de 10 a 60, iterando a cada 5, exceto para os 
// numeros 35 e 45 que irão ser substituidos pela palavra "PULOU".|

var valor = 10;

while(valor <= 60){
    if(valor == 35 || valor == 45){
        console.log("PULOU !");
        valor+=5;
    }
    console.log(valor);
    valor+=5;
}

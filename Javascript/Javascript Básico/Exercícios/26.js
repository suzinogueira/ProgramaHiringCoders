// | Exemplo 26 | Descrição |
// | --- | --- |
// | `Repetição` | Utilize a estrutura de repetição for para imprimir no console conforme instruções abaixo: 
//     a) números de 1 a 100  
//     b) quando chegar no número 50 interrompa a instrução e pare o loop 
//     c) quando chegar no número 50 pule a instrução |


console.log("*** A ***");

for(var i = 1; i <=100; i++){
    console.log(i);
}

console.log("*** B ***");
for(var i = 1; i <=100; i++){
    console.log(i);
    if(i == 50){
        break;
    }
}


console.log("*** C ***");
for(var i = 1; i <=100; i++){
    if(i == 50){
        i++;
    }
    console.log(i);
}
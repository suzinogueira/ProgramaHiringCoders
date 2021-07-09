// | Exemplo 08 | Descrição |
// | --- | --- |
// | `Semaforo, sinal ou sinaleira?` | Utilizando os conceitos que estudamos, 
// vamos criar um programa que funcionará como um sinal de transito. |

var cor = "verde";

switch (cor){
    case "vermelho":
        console.log("Pare! ");
        break;
    case "amarelo":
        console.log("Atenção - vai ficar vermelho oO ");
        break;
    case "verde":
        console.log("Pode prosseguir ..");
        break;
    default:
        console.log("Essa cor não existe no semáforo.. ");
}
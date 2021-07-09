// | Exemplo 10 | Descrição |
// | --- | --- |
// | `É dia de aula?` | Utilizando os conceitos que estudamos, 
//  criar um programa que irá nos informar os dias de aula para a nossa turma. |

var dia = "domingo";

if (dia == "segunda-feira" || dia == "terça-feira" || dia == "quarta-feira" ||
    dia == "quinta-feira" || dia == "sexta-feira"){
        console.log("Aulaa hoje !!! Uhuuull !!");
    }
else if (dia == "sábado" || dia == "domingo"){
    console.log("Não tem aula hoje, mas o estudo continua.. ;)");
}
else{
    console.log("Esse dia não existe ...");
}
// | Exemplo 31 | Descrição |
// | --- | --- |
// | `Dia da semana` | Elabore um algoritmo que receba um número (1-7) e devolva o dia da semana correspondente.|


function diaSemana(dia){
    if(dia == 1){
        return "Domingo"; 
    }
    if(dia == 2){
        return "Segunda-feira"; 
    }
    if(dia == 3){
        return "Terça-feira"; 
    }
    if(dia == 4){
        return "Quarta-feira"; 
    }
    if(dia == 5){
        return "Quinta-feira"; 
    }
    if(dia == 6){
        return "Sexta-feira"; 
    }
    if(dia == 7){
        return "Sábado"; 
    }
}

console.log(diaSemana(1));

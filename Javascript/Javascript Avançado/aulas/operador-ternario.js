// if...else 


function calculaIdade(idade){

    if(idade >= 18){
        return "Maior de idade";
    }else{
        return "Menor de idade";
    }
    
}


function calculaIdade2(idade){

    return idade >= 18 ? "Maior de idade" : "Menor de idade";
    
}

console.log(calculaIdade(15));
console.log(calculaIdade2(20));
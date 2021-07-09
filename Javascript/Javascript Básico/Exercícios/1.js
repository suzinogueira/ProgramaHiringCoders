// Vamos criar variaveis usando let, const e var, atribuir valores, 
// identificar comportamentos e saídas quando tentarmos recuperar. 


const a = 1;
let b = 2;
var c = 3;


function variaveis(){
    c = 4;
    b = 5;
    let d = a + b + c;
    return d;
}

console.log("let da função: "+variaveis());
console.log("Const:"+a+", let: "+b+", var: "+c);
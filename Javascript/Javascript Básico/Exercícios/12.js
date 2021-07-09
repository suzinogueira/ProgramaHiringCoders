// | Exemplo 12 | Descrição |
// | --- | --- |
// | `Par ou Impar` | Crie uma função que determina se um número é par ou impar.  |

function parImpar(num){
    if(num % 2 == 0){
        return num+" é Par";
    }
    else{
        return num+" é Ímpar";
    }
}

console.log(parImpar(3));
console.log(parImpar(4));
console.log(parImpar(5));
console.log(parImpar(7));
console.log(parImpar(14));

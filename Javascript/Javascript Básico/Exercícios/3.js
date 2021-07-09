// | Exemplo 03 | Descrição |
// | --- | --- |
// | `Média entre números` | Crie uma variavel e atribua como valor 
// uma operacao de média entre 5 números inteiros e positivos. |


function media5num(n1,n2,n3,n4,n5){
    var media = (n1+n2+n3+n4+n5) / 5;
    return media;
}

console.log(`Média: ${media5num(2,4,5,6,7)}`);
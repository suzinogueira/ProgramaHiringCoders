// Exercícios - Mód Javascript Básico

// FizBuzz
// Divisível por 3 => 'Fizz',
// Divisível por 5 => 'Buzz',
// Divisível por 3 e 5 => 'FizzBuzz',
// Se não for um número => 'Não é um número'
// Se não for divisível nem por 3 e nem por 5 => Entrada

let resultadoFizBuzz = fizzBuzz(false);
console.log("Teste FizzBuzz = "+resultadoFizBuzz);

function fizzBuzz(entrada){
        if (typeof entrada !== 'number'){
            return 'Não é um número';
        }
        if((entrada % 3 === 0) && (entrada % 5 === 0)){
            return 'FizBuzz';
        }
        if(entrada % 3 === 0){
            return 'Fizz';
        }
        if (entrada % 5 === 0){
            return 'Buzz';
        }

        return entrada;
}


// Reverse string

let newStr = '';

function reverseAString(str){
    for(let i = str.length - 1; i >= 0; i--){
        newStr += str[i];
    }
    console.log("Resultado Reverso de "+str+" = "+newStr);
}

let resultadoReverse = reverseAString('Hello Gama Academy !');

//Convert Celsius to Fahrenheit

function convertToFahrenheit(value){
    return value * 1.8 + 32;
}

let celsius = 30;
let result = convertToFahrenheit(celsius);
console.log("Conversão de Celsius para Fahrenheit: ");
console.log(`Celsius: ${celsius} | Fahrenheit : ${result}`);
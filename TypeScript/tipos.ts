//Boolean

const contaPaga: boolean = false;

//Number
const idade: number = 23;
const avaliacao: number = 4.5;

//String
const nome: string = 'Suzi Nogueira';

//Array
const idades: number[] = [23,45,65,43];
const idades2: Array<number> = [34,54,23,51];

//Tuple
let jogadores: [string, string, string];
jogadores = ['João', 'Manoel', 'Vitor'];

//Enum
enum StatusAprovacao{
    Aprovado = '001',
    Pendente = '002',
    Rejeitado = '003'
}

const statusDaAprovacao: StatusAprovacao = StatusAprovacao.Aprovado;

//Any
const retornoDaAPI: any[] = [123, 'Suzi', false];
const retornoDaAPI2: any = {
    // ........ 
};

//Void
function printarNaTela(msg: string): void{
    console.log(msg);

}

//null e Undefined

const u: undefined = undefined;
const n: null = null;

//Object
function criar(Object:object){
    // ...
}

criar({
    propriedade: 1, 
})

// criar('Suzi');//dá erro

//Never
function loopInfinito(): never{
    while(true){
    }
}

function erro(mensagem: string) : never {
    throw new Error(mensagem);
}

function falha(){
    return erro('Algo falhou');
}

//Union Types
function exibirNota(nota: number | string){
    console.log(`A nota é ${nota}`);
}

exibirNota('10');
exibirNota(10);

//Alias

type Funcionario = {
    nome: string;
    sobrenome: string;
    dataNascimento: Date;
}

// type Funcionarios = Array<Funcionario>;
const funcionarios: Funcionario[] = [{
    nome: 'Suzi',
    sobrenome: 'Nogueira',
    dataNascimento: new Date()
},{
    nome: 'Joana',
    sobrenome: 'Santos',
    dataNascimento: new Date()
}];

function tratarFuncionarios(funcionarios: Funcionario[]){
    for (let funcionario of funcionarios){
        console.log('Nome do funcionario: ', funcionario.nome);
    }
}

let altura : number | null = 1.6;
altura = null;

type Contato = {
    nome: string;
    telefone1: string;
    telefone2?: string; //o operador ? assinala que esse campo é opcional, não sou obrigado a declarar, que aí ficará undefined
}

const contato: Contato = {
    nome:'Suzi',
    telefone1:'123456'
}

//Type Assertion
const minhaIdade: any = 23;
(minhaIdade as number).toString();
<number>minhaIdade.toString();

// const input = document.getElementById("numero1") as HTMLInputElement;
const input = <HTMLInputElement>document.getElementById("numero1");

console.log(input.value);


class Data{
    // dia: number;
    // mes: number;
    // ano: number;

    constructor(public dia: number,public mes: number, public ano:number = 1970){
        // this.dia = dia;
        // this.mes = mes;
        // this.ano = ano;
    }

}

const data = new Data (1, 1, 2021);
console.log(data.dia);
console.log(data.mes);
console.log(data.ano);

const data2 = new Data(1,1);


class Carro {

    private velocidadeAtual: number = 0;

    constructor(
        public marca: string,
        public modelo: string,
        private velocidadeMaxima: number = 220
    ){}

    private alterarVelocidade(delta: number){
        //validacao de aceleração e frenagem
        const novaVelocidade = this.velocidadeAtual + delta;

        if(novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima){
            this.velocidadeAtual = novaVelocidade;
        }else{
            this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0;
        }
    }
    acelerar (){
        this.alterarVelocidade(5);
    }

    frear(){
        this.alterarVelocidade(-5);

    }   

}

const carro = new Carro('Fiat', 'Palio', 250);
carro.acelerar();


//herança
class Camaro extends Carro{
    private turbo = false;

    constructor(){
        super('Chevrolet', 'Camaro', 500);
    }

    ligarTurbo(){
        this.turbo = true;
    }

}

const camaro = new Camaro();
camaro.acelerar();
camaro.frear();
camaro.ligarTurbo();
interface Usuario{
    nome: string;
    email: string;
    address?: string;
}

function getUser(): Usuario{
    return {
        nome: 'Suzi',
        email: 'suzi@suzi.com'
    }
}

function setUser(usuario: Usuario){
    //..
}
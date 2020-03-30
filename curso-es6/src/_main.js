//import { soma, sub } from './funcoes';
//console.log(soma(1, 5));
//console.log(sub(4, 2));

import axios from 'axios';

class Api {
    static async getUserInfo(username){
        try{
            const response = await axios.get('https://api.github.com/users/' + username);
            console.log(response);
        }
        catch(erro){
            console.warn('Falha na requisição. Erro: ' + erro);
        }
    }
}
Api.getUserInfo('lucashelion');

const minhaPromise = () => new Promise((resolve, reject) => {
    setTimeout( () => { resolve('Tudo OK'); }, 2000);
});

//minhaPromise()
//    .then(response => { console.log(response); });

async function executarPromise(){
    const response = await minhaPromise();
    console.log(response);
    console.log(await minhaPromise());
    console.log(await minhaPromise());
}
executarPromise();

class Lista{
    constructor(){
        this.data = [];
    }

    add(item){
        this.data.push(item);
        console.log(this.data);
    }
}

class TodoList extends Lista{
    constructor(){
        super();
        this.usuario = 'Lucas';
    }

    mostraUsuario(){
        console.log('Usuário: ' + this.usuario);
    }
}

class Matematica{
    static soma(a, b){
        return a + b;
    }
}

const arr = [1, 3, 4, 5, 8, 9];

const newArr = arr.map(function(item){
    return item * 2;
});
console.log(newArr);

const filtro = arr.filter(function(item){
    return (item % 2) === 0;
});
console.log(filtro);

const MinhaLista = new TodoList();

document.getElementById('btn_novotodo').onclick = function(){
    MinhaLista.add('Novo todo');
};

MinhaLista.mostraUsuario();

console.log(Matematica.soma(1, 5));

import api from './api';

class App {
    constructor(){
        this.repositories = [];
        this.formEl = document.getElementById('repo-form');
        this.listEl = document.getElementById('repo-list');
        this.inputEl = document.querySelector('input[name=repository]');
        this.registrarEventos();
        this.render();
    }

    registrarEventos(){
        this.formEl.onsubmit = event => this.addRepositorio(event);
    }

    setCarregando(carregando = true){
        if(carregando === true){
            let carregandoEl = document.createElement('span');
            carregandoEl.appendChild(document.createTextNode('Carregando...'));
            carregandoEl.setAttribute('id', 'carregando');

            this.formEl.appendChild(carregandoEl);
        }
        else{
            document.getElementById('carregando').remove();
        }
    }

    async addRepositorio(event){
        event.preventDefault();

        const repoInput = this.inputEl.value;
        if(repoInput.length === 0) return;

        this.setCarregando();
        try {
            const response = await api.get('/repos/' + repoInput);

            var { name, description, html_url, owner: { avatar_url } } = response.data;

            this.repositories.push({
                name,
                description,
                avatar_url,
                html_url,
            });

            this.render();   
        } catch (error) {
            alert('O repositório não foi encontrado');
        }
        this.setCarregando(false);
    }

    render(){
        this.listEl.innerHTML = '';
        
        this.repositories.forEach(repo => {
            let imgEl = document.createElement('img');
            imgEl.setAttribute('src', repo.avatar_url);

            let titleEl = document.createElement('strong');
            titleEl.appendChild(document.createTextNode(repo.name));

            let descriptionEl = document.createElement('p');
            descriptionEl.appendChild(document.createTextNode(repo.description));

            let linkEl = document.createElement('a');
            linkEl.setAttribute('target', '_blank');
            linkEl.setAttribute('href', repo.html_url);
            linkEl.appendChild(document.createTextNode('Acessar'));

            let listItemEl = document.createElement('li');
            listItemEl.appendChild(imgEl);
            listItemEl.appendChild(titleEl);
            listItemEl.appendChild(descriptionEl);
            listItemEl.appendChild(linkEl);

            this.listEl.appendChild(listItemEl);
        });
    }
}

new App();
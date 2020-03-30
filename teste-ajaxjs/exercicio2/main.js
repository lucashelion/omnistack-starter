var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');
var listElement = document.querySelector('#app ul');

function buscarRepo(){
    var usuario = inputElement.value;
    if(usuario == '' || usuario == null){
        alert('Por favor, digite um usuário');
        return;
    }

    var url = 'https://api.github.com/users/' + usuario + '/repos'
    axios.get(url)
        .then(function(response) {
            //console.log(response.data);
            listElement.innerHTML = '';
            if(response.data.length > 0){
                for(item of response.data){
                    var repoElement = document.createElement('li');
                    var textElement = document.createTextNode(item.name + ' ');
                    repoElement.appendChild(textElement);

                    listElement.appendChild(repoElement);
                }
            }
            else{
                alert('Nenhum repo encontrado para esse usuário');
            }
        })
        .catch(function(error) {
            alert('Erro ao buscar usuário. Verifique se foi digitado corretamente');
        });
}
buttonElement.onclick = buscarRepo;
function checaIdade(idade){
    return new Promise(function(resolve, reject){
        if(idade >= 18){
            resolve();
        }
        else{
            reject();
        }
    });
}

checaIdade(18)
    .then(function() {
        console.log("Maior que 18 anos");
    })
    .catch(function() {
        console.log("Menor que 18 anos");
    });

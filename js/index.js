'use strict'
document.addEventListener('DOMContentLoaded',function(){
    var button = document.querySelector('#button');
    var content = document.querySelector('#contenido');
    button.addEventListener('click',function(){
        fetch('https://randomuser.me/api/')
        .then(function(req){
            if(req.ok){
                return req.json();
            }
        })
        .then(function(res){
           var random = res.results['0'];
           var template = `
                <img src="${random.picture.large}" class="img-fluid rounded-circle" alt="username">
                <p>Nombre:${random.name.first}</p>
            `;

          content.innerHTML = template;
        })
    });
});
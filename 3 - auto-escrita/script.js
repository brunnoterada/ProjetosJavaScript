const text ='Seu texto automático vai aqui 💔'

let index = 0;

function escrevaTexto(){

    document.body.innerText = text.slice(0,index);

    index ++;

    if(index> text.length){
        index = 0;
    }
}

setInterval(escrevaTexto,100);
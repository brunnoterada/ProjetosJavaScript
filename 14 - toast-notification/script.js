// const que armazena o elementos com os seguintes ID 'btn' e 'container'


const btn = document.getElementById('btn');
const container = document.getElementById('container');


// o click no botão dispara esse evento, faz com que a função 
//createNotification seja disparada
btn.addEventListener('click',()=>{
    createNotification();
});

//função que faz a notificação surgir
function createNotification(){
    //cons que armazena o elemento criado
    const notif = document.createElement('div');

    //adiciona a class no elemento criado 
    notif.classList.add('toast');

    // escreve dentro do elemento criado
    notif.innerText = 'Sua notificação aqui';

    // adiciona no continar o elemento criado
    container.appendChild(notif);

    /*ali na parte de cima ele adicionou a class, 
    já nesse ele remove a class que foi adicionado, 
    dentro de um tempo, é sempre em milesegundos*/
    setTimeout(()=>{
        notif.remove();
    },3000);

}
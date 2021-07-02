
//variavel que armazena o id 
const btn = document.getElementById("btn");
const nav = document.getElementById("nav");
const close = document.getElementById("nav");


//quando o evento de click ocorre no botão ele aciona essa função para
//nessa função é adicionado ou removida a classe 'active' dos seguintes id 'btn' e 'nav'
btn.addEventListener("click", () => {
    nav.classList.toggle("active");
    btn.classList.toggle("active");
});

//função faz fechar o menu hamburguer
close.addEventListener("click", () => {
    nav.classList.toggle("active");
    btn.classList.toggle("active");
});
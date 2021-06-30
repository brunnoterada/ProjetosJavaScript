//arrowfunc que valida se é o usuario digitou somente número
const eNumero = (numero) => /^[0-9]+$/.test(numero);
//valida se tem apenas 8 números
const cepValido = (cep) => cep.length == 8 && eNumero(cep);

//funcão async para pegar o retorno do api
const pesquisarCep = async () => {
  const cep = document.getElementById("cep").value;
  const url = `http://viacep.com.br/ws/${cep}/json/`;

  //if valida se é um número valido
  if (cepValido(cep)) {
    const Data = await fetch(url);
    const endereco = await Data.json();

    //if valida se volta erro da api
    if (endereco.hasOwnProperty("erro")) {
      main.innerHTML = `<div class="info_container"><h2>CEP '${cep} ' não encontrado</h2></div>`;
    } else {
      changeMain(endereco);
    }
  } else {
    main.innerHTML = `<div class="info_container"><h2>CEP '${cep} ' não encontrado</h2></div>`;
  }
};

//função que altera o html do site
function changeMain(endereco) {
  console.log(endereco);
  const main = document.getElementById("main");
  main.innerHTML = `<div class="info_container">
    <h2>Detalhes do CEP ${endereco.cep}</h2>
    <p>Rua: ${endereco.logradouro}</p>
    <p>Bairro: ${endereco.bairro}</p>
    <p>Cidade: ${endereco.localidade}</p>
    <p>Estado: ${endereco.uf}</p>
    <p>DDD: ${endereco.ddd}</p>
  </div>
 `;
}

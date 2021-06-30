"use strict";
// funções para validar se o cep está de acordo
const eNumero = (numero) => /^[0-9]+$/.test(numero);
const cepValido = (cep) => cep.length == 8 && eNumero(cep);

//função que pesquisa o cep
const pesquisarCep = async () => {
  const cep = document.getElementById("cep").value;
  const url = `http://viacep.com.br/ws/${cep}/json/`;
  //condição
  if (cepValido(cep)) {
    cleanForm();
    const Data = await fetch(url);
    const endereco = await Data.json();
    if (endereco.hasOwnProperty("erro")) {
      document.getElementById("endereco").value = " Endereço não encontrado";
    } else {
      preencherFormulario(endereco);
    }
  } else {
    document.getElementById("endereco").value = " Endereço não encontrado";
  }
};

//função para limpar os campos
const cleanForm = () => {
  document.getElementById("endereco").value = "";
  document.getElementById("bairro").value = "";
  document.getElementById("cidade").value = "";
  document.getElementById("estado").value = "";
};

//função para autocompletar o form em javascript
const preencherFormulario = (endereco) => {
  document.getElementById("endereco").value = endereco.logradouro;
  document.getElementById("bairro").value = endereco.bairro;
  document.getElementById("cidade").value = endereco.localidade;
  document.getElementById("estado").value = endereco.uf;
};
document.getElementById("cep").addEventListener("focusout", pesquisarCep);

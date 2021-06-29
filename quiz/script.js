const quizData = [
  {
    questao: "Quantos anos eu tem?",
    a: "20",
    b: "21",
    c: "22",
    d: "23",
    correct: "c",
  },
  {
    questao: "Qual minha cor favorita?",
    a: "Preto",
    b: "Branco",
    c: "Rosa",
    d: "Cinza",
    correct: "a",
  },
  {
    questao: "Qual minha comida favorita?",
    a: "Churrasco",
    b: "Hamburguer",
    c: "Pizza",
    d: "Comida Japa",
    correct: "a",
  },
  {
    questao: "Quantos irmãos eu tenho?",
    a: "3",
    b: "4",
    c: "5",
    d: "2",
    correct: "b",
  },
];
const cabeca = document.getElementById('quiz-header');
const respostasEls = document.querySelectorAll('.resposta');
const questaoEl = document.getElementById('questaoTitle');
const a_texto = document.getElementById('a_texto');
const b_texto = document.getElementById('b_texto');
const c_texto = document.getElementById('c_texto');
const d_texto = document.getElementById('d_texto');
const submitBtn = document.getElementById('enviar')

let QuestaoAtual= 0;
let resultado = 0;

loadQuiz();


function loadQuiz() {
  deselectResposta();
  const QuestaoAtualDados = quizData[QuestaoAtual];
  questaoEl.innerText = QuestaoAtualDados.questao;
  a_texto.innerText=QuestaoAtualDados.a;
  b_texto.innerText=QuestaoAtualDados.b;
  c_texto.innerText=QuestaoAtualDados.c;
  d_texto.innerText=QuestaoAtualDados.d;

}

function getSelected(){
  let resposta = undefined; 
  respostasEls.forEach((respostaEl)=>{
    if(respostaEl.checked){
      resposta = respostaEl.id;
    }
  });
  return resposta;
}
function deselectResposta(){
  respostasEls.forEach((respostaEl)=>{
    respostaEl.checked=false;
  });
  

}

submitBtn.addEventListener('click',()=>{

  const resposta = getSelected();
if(resposta){
  if(resposta === quizData[QuestaoAtual].correct){
    resultado++;
  }
  QuestaoAtual++
    if(QuestaoAtual< quizData.length){
        loadQuiz();
    }else{
        cabeca.innerHTML = `<h2>Você acertou ${resultado}/${quizData.length} </h2>`;
    }
  } 
});
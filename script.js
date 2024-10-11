const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPergunta = document.querySelector('.caixa-pergunta');
const caixaAlternativa = document.querySelector('.caixa-alternativa');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.texto-resultado');

const perguntas = [     //serve para abrir lista de perguntas
    {   //abre o objeto das perguntas
        enunciado: "Você pratica esportes ?",
        alternativas: [
            {texto: "Sim, eu pratico ",
            afirmação:"eu gosto muito da prática esportiva"}, 

            {texto: "Não, não curto muito",
            afirmação:"Não gosto, prefiro ficar tranquilo"}]
    },
    { 
        enunciado: "Você acha que as escolas deveriam icentivar o esporte ?",
        alternativas: [
            {texto: "Sim, é importante",
            afirmação:"É importante para que tenhamos ótimos atletas"}, 
                
            {texto: "Não, não acho",
            afirmação:"O  objetivo da escola é ensinar os alunos e só"}]
    },
    { 
        enunciado: "Você acha que o esporte pode conectar as pessoas?",
        alternativas: [
            {texto: "Sim",
            afirmação:"Sim,ela pode ajudar no convivo"}, 
                
            {texto: "Não",
            afirmação:"Não, cada um faz no seu canto"}]
    },
]
let posicao = 0;
let perguntaAtual;
let respostas = "";


function mostraPergunta() {
    if (posicao>=perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[posicao];
    caixaPergunta.textContent = perguntaAtual.enunciado;
    caixaAlternativa.textContent = " ";
    mostraAlternativas();
}
function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click",  () => respostasSelecionadas(alternativa));
        caixaAlternativa.appendChild(botaoAlternativas);
    }
}
function respostasSelecionadas(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmação;
    respostas += afirmacoes + " ";
    posicao++;
    mostraPergunta();
}
function mostraResultado(){
    caixaPergunta.textContent = "Confira suas respostas: ";
    textoResultado.textContent = respostas; 
    caixaAlternativa.textContent = "";
}
mostraPergunta();
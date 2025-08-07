const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas =[
    {
        enunciado: "Quem foi o campeão mundial de futebol no ano de 2007?",
        alternativas: [
            {
                texto:"Milan",
                afirmação:"Resposta correta",
                pontos:1
            },
            {
                texto:"Barcelona",
                afirmação:"Resposta errada",
                pontos:0
            }
        ]
    },
     {
        enunciado: "Quem foi o campeão mundial de futebol no ano de 2000?",
        alternativas: [
            {
                texto:"Corinthias",
                afirmação:"Resposta correta",
                pontos:1
            },
            {
                texto:"Milan",
                afirmação:"Resposta errada",
                pontos:0
            }
        ]
    },
    {
        enunciado: "Quem foi o campeão mundial de futebol no ano de 2019?",
        alternativas: [
            {
                texto:"Liverpool",
                afirmação:"Resposta correta",
                pontos:1
            },
            {
                texto:"Inter de Milão",
                afirmação:"Resposta errada",
                pontos:0
            }
        ]
    },
    {
        enunciado: "Quem foi o campeão mundial de futebol no ano de 2023?",
        alternativas: [
            {
                texto:"Manchester City",
                afirmação:"Resposta correta",
                pontos:1
            },
            {
                texto:"palmeiras",
                afirmação:"Resposta errada",
                pontos:0
            }
        ]
    },
    {
        enunciado: "Quem foi o campeão mundialde futebol no ano de 1961?",
        alternativas: [
            {
                texto:"Peñarol",
                afirmação:"Resposta correta",
                pontos:1
            },
            {
                texto:"Boca Juniors",
                afirmação:"Resposta errada",
                pontos:0
            }
        ]
    },
]
    

let atual=0;
let perguntasAtual;
let historiafinal="";
let pontos=0;

function mostraPerguntas(){
    perguntasAtual=perguntas[atual];
    caixaPerguntas.textContent=perguntaAtual.enunciado;
    caixaAlternativas.textContent="";
    mostraAlternativas ();
}
function mostraAlternativas(){
    for (const alternativa of perguntasAtual.Alternativas){
        const botaoalternativas=document.createElement("button");
        botaoalternativas.textContent=alternativa.texto;
        botaoalternativas.addEventListener("click",()=> respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoalternativas);
    }
}


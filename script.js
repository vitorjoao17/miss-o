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
let perguntaAtual;
let historiaFinal="";
let pontos=0;

function mostraPergunta(){
    perguntaAtual=perguntas[atual];
    caixaPerguntas.textContent=perguntaAtual.enunciado;
    caixaAlternativas.textContent="";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}
function respostaSelecionada(alternativa) { 
    const afirmacao = alternativa.afirmacao; 
    historiaFinal = afirmacao; 
    pontos += alternativa.pontos;  
    atual++; 

    if (atual < perguntas.length) { 
        mostraPergunta();  
    } else {
        exibeResultado();  
    }
}

function exibeResultado() { 
    caixaPerguntas.textContent = "Fim do Quiz!"; 
    caixaAlternativas.textContent = "";  
    textoResultado.textContent = `Sua pontuação final é: ${pontos} pontos.`;  

    if (pontos === perguntas.length) {
        textoResultado.textContent += " Parabéns! Você acertou todas as questões!"; 
    } else if (pontos > perguntas.length / 2) {
        textoResultado.textContent += " Bom trabalho, você teve um desempenho legal!"; 
    } else {
        textoResultado.textContent += " Você pode melhorar! Tente novamente!"; 
    }
}

mostraPergunta();
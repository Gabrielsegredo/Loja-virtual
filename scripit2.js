let slideIndex = 0;

function mostraSlide(n) {
    const slides = document.getElementsByClassName("slide");
    
    if (n >= slides.length) {
        slideIndex = 0;
    } 
    
    if (n < 0) {
        slideIndex = slides.length - 1;
    }
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    slides[slideIndex].style.display = "block";
}

function avancaSlide(n) {
    slideIndex += n;
    mostraSlide(slideIndex);
}

mostraSlide(slideIndex);




// Elementos do DOM
const botaoProximo = document.getElementById('botaoProximo');
const conteudo = document.getElementById('conteudo');

// Conteúdo das páginas
const paginas = [
    "Conteúdo da página 1",
    "Conteúdo da página 2",
    "Conteúdo da página 3",
];

let paginaAtual = 0;

// Função para exibir a próxima página
function mostrarProximaPagina() {
    paginaAtual++;
    if (paginaAtual >= paginas.length) {
        paginaAtual = 0;
    }
    conteudo.textContent = paginas[paginaAtual];
}

// Adicionar um ouvinte de evento para o botão "Próximo"
botaoProximo.addEventListener('click', mostrarProximaPagina);

// Inicialize a página com o conteúdo da primeira página
conteudo.textContent = paginas[paginaAtual];



 // Seleciona o botão pelo ID
 var botao = document.getElementById("botaoContinuar");

 // Adiciona um evento de clique ao botão
 botao.addEventListener("click", function() {
 alert("Você clicou em Continuar! Redirecionando para outra página...");
   // Você pode redirecionar para outra página usando window.location.href
   // window.location.href = "outra_pagina.html";
});



// Função para alternar entre os modos claro e escuro
function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
}

// Evento de clique para alternar o modo claro/escuro
const toggleModeButton = document.getElementById('toggleMode');
toggleModeButton.addEventListener('click', toggleDarkMode);


/* Função para voltar para a página anterior*/
  function voltarParaPaginaAnterior() {
    window.history.back();
  };



  
  
  document.addEventListener("DOMContentLoaded", function () {
    const curtirButtons = document.querySelectorAll(".curtir-btn");
    const likedList = document.getElementById("liked-list");

    curtirButtons.forEach((button, index) => {
        let curtido = false;
        button.addEventListener("click", function () {
            if (!curtido) {
                curtido = true;
                button.innerText = "Descurtir";
                likedList.innerHTML += `<li><img src="imagem${index + 1}.jpg" alt="Imagem Curtida"></li>`;
            } else {
                curtido = false;
                button.innerText = "Curtir";
                const images = likedList.querySelectorAll("li");
                if (images.length > 0) {
                    likedList.removeChild(images[images.length - 1]);
                }
            }
        });
    });
});

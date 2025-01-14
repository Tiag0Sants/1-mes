// Função para criar corações animados
function createHearts() {
    const body = document.body;

    for (let i = 0; i < 10; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');

        // Configuração de posição e animação
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.bottom = '0'; // Começa na base da tela
        heart.style.animationDuration = Math.random() * 3 + 2 + 's';
        heart.style.opacity = 0.8; // Aumentando a opacidade para mais visibilidade
        heart.style.backgroundColor = getRandomColor();

        body.appendChild(heart);

        // Removendo o coração após a animação
        setTimeout(() => {
            heart.remove();
        }, 5000); // Tempo de vida de 5 segundos
    }
}

// Função para gerar cores aleatórias
function getRandomColor() {
    const colors = ['#FF5C5C', '#FF8C5C', '#FF5CCB', '#FFB75C'];
    return colors[Math.floor(Math.random() * colors.length)];
}

// Criar corações a cada 1 segundo
setInterval(createHearts, 1000);

// Função para gerenciar o carrossel
function startCarousel() {
    const carouselInner = document.getElementById('carousel-inner');
    const images = carouselInner.querySelectorAll('.photo');
    let currentIndex = 0;

    // Ocultar todas as imagens, exceto a primeira
    images.forEach((img, index) => {
        img.style.display = index === 0 ? 'block' : 'none';
    });

    // Troca de imagens a cada 3 segundos
    setInterval(() => {
        images[currentIndex].style.display = 'none'; // Esconde a imagem atual
        currentIndex = (currentIndex + 1) % images.length; // Atualiza o índice
        images[currentIndex].style.display = 'block'; // Mostra a próxima imagem
    }, 3000);
}

// Função para tocar/pausar a música
function playMusic() {
    const audio = document.getElementById('audio');
    const icon = document.getElementById('audio-icon');

    // Verifica se o áudio está pausado ou tocando
    if (audio.paused) {
        audio.play()
            .then(() => {
                icon.classList.remove('fa-volume-mute');
                icon.classList.add('fa-volume-up');
            })
            .catch(err => console.error('Erro ao reproduzir áudio:', err));
    } else {
        audio.pause();
        icon.classList.remove('fa-volume-up');
        icon.classList.add('fa-volume-mute');
    }
}

// Inicializando o carrossel e outras funções
document.addEventListener('DOMContentLoaded', () => {
    startCarousel();
});

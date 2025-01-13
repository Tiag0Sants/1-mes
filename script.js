function createHearts() {
    const body = document.body;

    for (let i = 0; i < 5; i++) { // Apenas 5 corações por vez
        const heart = document.createElement('div');
        heart.classList.add('heart');

        // Posição inicial aleatória ao longo da largura da tela
        heart.style.left = Math.random() * 100 + 'vw';

        // Duração da animação de forma aleatória
        heart.style.animationDuration = Math.random() * 2 + 3 + 's';

        body.appendChild(heart);

        // Removendo o coração após o fim da animação
        setTimeout(() => {
            heart.remove();
        }, 5000);
    }
}

// Criar corações a cada 1,5 segundos
setInterval(createHearts, 1500);

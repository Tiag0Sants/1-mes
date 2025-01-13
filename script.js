function createHearts() {
    const body = document.body;

    // Criar apenas 3-5 corações por vez
    for (let i = 0; i < 3; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');

        // Posição inicial aleatória ao longo da largura da tela
        heart.style.left = Math.random() * 100 + 'vw';

        // Definindo uma duração aleatória da animação
        heart.style.animationDuration = Math.random() * 2 + 3 + 's';

        body.appendChild(heart);

        // Remover coração após animação
        setTimeout(() => {
            heart.remove();
        }, 5000);
    }
}

// Criar novos corações a cada 2 segundos
setInterval(createHearts, 2000);

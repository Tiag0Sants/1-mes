function createHearts() {
    const body = document.body;

    // Reduzindo o número de corações para 3 por vez
    for (let i = 0; i < 3; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');

        // Definindo uma posição inicial aleatória no eixo X
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.bottom = '0'; // Inicia da base da tela

        // Adicionando durações de animação aleatórias
        const duration = Math.random() * 4 + 3; // Entre 3s e 7s
        heart.style.animationDuration = `${duration}s`;

        // Adicionando variações no deslocamento lateral durante o movimento
        const translateX = (Math.random() - 0.5) * 50; // Movimento lateral aleatório
        heart.style.setProperty('--translate-x', `${translateX}vw`);

        // Adicionando cor aleatória ao coração
        heart.style.backgroundColor = getRandomColor();

        // Adiciona o coração no DOM
        body.appendChild(heart);

        // Remove o coração após a animação
        setTimeout(() => {
            heart.remove();
        }, duration * 1000);
    }
}

// Função para gerar cores aleatórias
function getRandomColor() {
    const colors = ['#FF5C5C', '#FF8C5C', '#FF5CCB', '#FFB75C'];
    return colors[Math.floor(Math.random() * colors.length)];
}

// Chamando a função para criar os corações a cada 2 segundos
setInterval(createHearts, 2000);

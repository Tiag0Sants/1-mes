function createHearts() {
    const body = document.body;

    // Gerar apenas 3 corações por vez
    for (let i = 0; i < 3; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');

        // Definindo a posição inicial aleatória no eixo X
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.bottom = '0'; // Corações começam da base da tela

        // Configurando durações de animação aleatórias
        const duration = Math.random() * 4 + 3; // Duração entre 3s e 7s
        heart.style.animationDuration = `${duration}s`;

        // Adicionando variações no deslocamento horizontal
        const translateX = (Math.random() - 0.5) * 50; // Movimento horizontal aleatório
        heart.style.setProperty('--translate-x', `${translateX}vw`);

        // Configurando cores aleatórias
        heart.style.backgroundColor = getRandomColor();

        // Adicionando o coração ao DOM
        body.appendChild(heart);

        // Removendo o coração após o término da animação
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

// Gerando corações a cada 2 segundos
setInterval(createHearts, 2000);

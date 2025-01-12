// Função para criar corações animados
function createHearts() {
    const body = document.body;

    for (let i = 0; i < 20; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');

        // Definindo a posição inicial aleatória do coração
        heart.style.left = Math.random() * 100 + 'vw';

        // Definindo a duração da animação de forma aleatória
        heart.style.animationDuration = Math.random() * 3 + 2 + 's';

        // Definindo a cor aleatória para o coração
        heart.style.backgroundColor = getRandomColor();

        // Adicionando o coração ao corpo da página
        body.appendChild(heart);

        // Removendo o coração após 5 segundos
        setTimeout(() => {
            heart.remove();
        }, 5000);
    }
}

// Função para obter uma cor aleatória
function getRandomColor() {
    const colors = ['#FF5C5C', '#FF8C5C', '#FF5CCB', '#FFB75C'];
    return colors[Math.floor(Math.random() * colors.length)];
}

// Chamando a função de criação de corações a cada 1 segundo
setInterval(createHearts, 1000);

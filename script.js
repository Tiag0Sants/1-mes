function createHearts() {
    const body = document.body;

    for (let i = 0; i < 10; i++) { // Reduzindo o número de corações
        const heart = document.createElement('div');
        heart.classList.add('heart');

        // Definindo a posição inicial aleatória do coração
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.bottom = '0'; // Definindo o início do movimento para a base da tela

        // Definindo a duração da animação de forma aleatória
        heart.style.animationDuration = Math.random() * 3 + 2 + 's';

        // Definindo a cor aleatória para o coração
        heart.style.backgroundColor = getRandomColor();

        body.appendChild(heart);

        // Removendo o coração após a animação
        setTimeout(() => {
            heart.remove();
        }, 5000);
    }
}

// Função para gerar cores aleatórias
function getRandomColor() {
    const colors = ['#FF5C5C', '#FF8C5C', '#FF5CCB', '#FFB75C'];
    return colors[Math.floor(Math.random() * colors.length)];
}

// Chamando a função para criar os corações a cada 1 segundo
setInterval(createHearts, 1000);

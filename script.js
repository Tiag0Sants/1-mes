function createHearts() {
    const body = document.body;

    for (let i = 0; i < 20; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 3 + 2 + 's';
        heart.style.backgroundColor = getRandomColor();

        body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }
}

function getRandomColor() {
    const colors = ['#FF5C5C', '#FF8C5C', '#FF5CCB', '#FFB75C'];
    return colors[Math.floor(Math.random() * colors.length)];
}



setInterval(createHearts, 1000);

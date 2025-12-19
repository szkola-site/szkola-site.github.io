const gif = document.getElementById('gif');
const btn = document.getElementById('btn');
const goose = document.getElementById('scary');
const input = document.getElementById('input');

input.addEventListener('keydown', search);

function search(e) {
    if (e.key === "Enter") { 
        window.open('https://www.google.pl/search?q=' + input.value);
    }
}

btn.addEventListener('click', () => {
    goose.style.opacity = "100%";
    goose.style.display = "block";
    spawnSmallGeese();
});
gif.addEventListener('click', () => {
    window.open('https://www.youtube.com/watch?v=yCm4c976wpg')
})
function getRandomPosition(element) {
    const margin = 100;
    const x = Math.random() * (window.innerWidth - element.width - margin) + margin;
    const y = Math.random() * (window.innerHeight - element.height - margin) + margin;
    return { x, y };
}

function rotateGoose(goose) {
    const randomAngle = Math.random() * 360;
    goose.style.transition = 'transform 0.5s ease-in-out'; 
    goose.style.transform = `rotate(${randomAngle}deg)`;

    
    const gooseWidth = goose.offsetWidth;
    const gooseHeight = goose.offsetHeight;
    const { x, y } = getRandomPosition(goose);
    
    goose.style.left = `${x}px`;
    goose.style.top = `${y}px`;

    const randomTime = Math.random() * 2500 + 1500;
    setTimeout(() => rotateGoose(goose), randomTime);
}

function spawnSmallGeese() {
    setInterval(() => {
        const smallGoose = document.createElement('img');
        smallGoose.src = 'goose.png';  
        smallGoose.classList.add('small-goose');
        document.body.appendChild(smallGoose);

        smallGoose.onload = () => {
            const { x, y } = getRandomPosition(smallGoose);
            smallGoose.style.position = 'absolute';
            smallGoose.style.left = `${x}px`;
            smallGoose.style.top = `${y}px`;

            rotateGoose(smallGoose);

            setTimeout(() => {
                smallGoose.remove();
            }, 50000);
        };
    }, 500);
}

function moveGif() {
    const gifWidth = gif.offsetWidth;
    const gifHeight = gif.offsetHeight;
    const { x, y } = getRandomPositionWithMargin(gifWidth, gifHeight);

    gif.style.transition = 'transform 7s ease-out'; 
    gif.style.transform = `translate(${x}px, ${y}px)`; 

    const randomTime = Math.random() * 2500 + 1500;
    setTimeout(moveGif, randomTime);
}

function getRandomPositionWithMargin(width, height) {
    const margin = 200;
    const maxX = window.innerWidth - width - margin;
    const maxY = window.innerHeight - height - margin;
    
    const x = Math.random() * maxX;
    const y = Math.random() * maxY;
    
    return { x, y };
}


window.onload = moveGif;

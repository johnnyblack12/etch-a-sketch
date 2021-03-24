const squares = Number(prompt('Welcome to Etch-a-Sketch. How many boxes on each side of the grid? (max 100)'));

const square = Math.floor(100/squares);

const sqHeight = String(square) + 'vh'

const area = squares ** 2;

const container = document.querySelector('.container');

let box;
let selection;

for (i=1;i<=area;i++) {
    box = document.createElement('div');
    box.setAttribute('id', i);
    box.addEventListener('mouseover', (e) => {
        selection = document.getElementById(e.fromElement.id);
        selection.classList.add('boxHover');
    });
    box.style.height = sqHeight;
    box.style.width = sqHeight;
    container.appendChild(box);
}



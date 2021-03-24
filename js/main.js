function go() { 
    const form = document.getElementById("squares");

    const squares = Number(form.value);

    const square = 100/squares

    const sqHeight = String(square) + 'vh'

    const area = squares ** 2;

    const container = document.querySelector('.container');

    let box;
    let selection;
    for (i=1;i<=area;i++) {
        box = document.createElement('div');
        box.setAttribute('id', i);
        box.setAttribute('name', 'box');
        box.addEventListener('mouseover', (e) => {
            selection = document.getElementById(e.fromElement.id);
            selection.classList.add('boxHover');
        });
        box.style.height = sqHeight;
        box.style.width = sqHeight;
        container.appendChild(box);
    }
}

const button = document.querySelector(".button");
button.addEventListener('click', go);



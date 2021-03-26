const container = document.querySelector('.container');
let clicked = false;
let pen = false;

function penToggle() {
    pen = !pen;
}

function go() {
    if (clicked==false) {
        clicked = true; 

        const form = document.getElementById('squares');
        const squares = Number(form.value);
        const square = 100/squares;
        const sqHeight = String(square) + 'vh';
        const area = squares ** 2;

        container.addEventListener('click', penToggle);

        let box;
        let selection;
        for (i=1;i<=area;i++) {
            box = document.createElement('div');
            box.setAttribute('id', i);
            box.setAttribute('name', 'box');
            box.addEventListener('mouseover', (e) => {
                selection = document.getElementById(e.fromElement.id);
                if(pen==true) {
                    selection.classList.add('boxHover');
                }
            });
            box.style.height = sqHeight;
            box.style.width = sqHeight;
            container.appendChild(box);
        }
    }
}

const button = document.querySelector('.button');
button.addEventListener('click', go);

const reset = document.querySelector('.reset');
reset.addEventListener('click', () => {
    boxList = Array.from(document.getElementsByName('box'));
    boxList.forEach(box => box.remove());

    pen = false;
    clicked = false;
    container.removeEventListener('click', penToggle);
    document.getElementById('squares').value = null;
});



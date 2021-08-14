const container = document.querySelector('.container');
const btnClear = document.querySelector(`#clear`);
const btnResize = document.querySelector(`#resize`);
const penColorPicker = document.querySelector('#pen-color');
const backgroundColorPicker = document.querySelector('#background-color');

let gridSize = 16;
let mousedown = false;
let penColor = 'white';
let backgroundColor = 'black';

gridCreate();

function gridCreate() {
    container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

    for (let i = 0; i < gridSize * gridSize; i++){
     const gridDiv= document.createElement('div');
     gridDiv.style.backgroundColor = backgroundColor;
     gridDiv.addEventListener(`mousedown`, setMouseDown);
     gridDiv.addEventListener(`mouseup`, setMouseUp);
     gridDiv.addEventListener(`mouseover`, changeColor);
     gridDiv.classList.add("grid-elements");
     container.appendChild(gridDiv);
    }

    const gridElements = document.querySelectorAll('.grid-elements');
    gridElements.forEach(gridElement => gridElement.style.backgroundColor = backgroundColor);
}

function setMouseDown(e) {
    mousedown = true;
    e.target.style.backgroundColor = penColor;
}

function setMouseUp() {
    mousedown = false;
}

function changeColor(e) {
    if(mousedown == true) {
        console.log(e.type);
        e.target.style.backgroundColor = penColor;
    }
}

btnClear.addEventListener('click', resetGrid);
btnResize.addEventListener('click', resizeGrid);

function resizeGrid(){
    gridSize = prompt(`Enter the grid size`);
    gridCreate();
}

function resetGrid(){
    gridCreate();
}

penColorPicker.addEventListener('input', setPenColor);
backgroundColorPicker.addEventListener('change', setBackgroundColor);

function setPenColor(e) {
    penColor = e.target.value;
}

function setBackgroundColor(e) {
    backgroundColor = e.target.value;
    gridCreate();
}
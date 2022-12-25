const body = document.querySelector('body');
const gridContainer = document.getElementById('grid-container');

function buildSketchPad(sideLength, sketchPadContainer) {
    for (i = 1; i < sideLength; i++) {
        const rowDiv = document.createElement('div');
        rowDiv.id = 'row-' + i;
        for (j = 1; j < sideLength; j++) {
            const div = document.createElement('div');
            div.id = 'row-' + i + '-col-' + j;
            const originalBackgroundColor = div.style.backgroundColor;
            div.addEventListener('mouseover', () => {
                div.style.backgroundColor = 'orange';
            });
            div.addEventListener('mouseout', () => {
                div.style.backgroundColor = originalBackgroundColor;
            });
            rowDiv.appendChild(div);
        }
        sketchPadContainer.appendChild(rowDiv);
    }
}

buildSketchPad(16, gridContainer)//builds the initial sketchpad with sideLength = 16.

const sizeButton = document.getElementById('set-size');
const buttonsDiv = document.getElementById('buttons');
const rangeInput = document.createElement('input');
rangeInput.type = 'range';
rangeInput.min = '1';
rangeInput.max = '100';
rangeInput.value = '50';

const rangeInputValueOutput = document.createElement('output');
rangeInputValueOutput.textContent = rangeInput.value;
rangeInputValueOutput.id = 'range-input-value-output';

rangeInput.addEventListener('input', (e) => {
    rangeInputValueOutput.textContent = e.target.value;
})

const sizeSubmitButton = document.createElement('button');
sizeSubmitButton.id = 'set-submit-button';
sizeSubmitButton.textContent = 'Submit';

sizeButton.addEventListener('click', () => {
    insertAfter(sizeButton, rangeInput);
    insertAfter(rangeInput, rangeInputValueOutput);
    buttonsDiv.removeChild(sizeButton);
    buttonsDiv.insertBefore(sizeSubmitButton, rangeInput);
})

let currentSketchPad = gridContainer;
sizeSubmitButton.addEventListener('click', () => {
    body.removeChild(currentSketchPad);
    currentSketchPad = document.createElement('div');
    currentSketchPad.id = 'grid-container';
    body.appendChild(currentSketchPad);

    buildSketchPad(rangeInput.value, currentSketchPad);
});

function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}
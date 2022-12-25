const gridContainer = document.getElementById('grid-container');

for (i = 1; i < 17; i++) {
    const rowDiv = document.createElement('div');
    rowDiv.id = 'row-' + i;
    for (j = 1; j < 17; j++) {
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
    gridContainer.appendChild(rowDiv);
}

const buttonsDiv = document.getElementById('buttons');
const rangeInput = document.createElement('input');
rangeInput.type = 'range';
rangeInput.min = '0';
rangeInput.max = '100';
rangeInput.value = '50';

rangeInput.addEventListener('input', (e) => {
    let output = document.getElementById('input-range-output');
    if (!buttonsDiv.contains(output)) {
        output = document.createElement('output');
        output.id = 'input-range-output';
    }
    output.textContent = e.target.value;
    insertAfter(rangeInput, output);
})

const sizeButton = document.getElementById('set-size');
sizeButton.addEventListener('click', () => {
    insertAfter(sizeButton, rangeInput);
})

function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}
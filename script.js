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

const size = document.getElementById('sizePicker');
const button = document.getElementById('createGrid');
const table = document.getElementById('pixelCanvas');


function clearGrid() {
  table.innerHTML = '';
}

size.addEventListener('submit', function(makeGrid) {
  makeGrid.preventDefault();
  clearGrid();
  const height = document.getElementById('inputHeight').value;
  const width = document.getElementById('inputWidth').value;

  for (let r = 1; r <= height; r++) {
    const row = document.createElement('tr');

    for (let c = 1; c <= width; c++) {
      const col = document.createElement('td');
      row.appendChild(col);
    }
    table.appendChild(row);
  }

});

table.addEventListener('click', function(event) {
  const color = document.getElementById('colorPicker').value;
  event.target.style.backgroundColor = color;
});
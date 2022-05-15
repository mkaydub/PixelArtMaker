// These are the relevant variables within this program.
const size = document.getElementById('sizePicker');
const button = document.getElementById('createGrid');
const table = document.getElementById('pixelCanvas');


//This clears the grid 
function clearGrid() {
  table.innerHTML = '';
}

// When the user adds rows and columns via the form, 
// the program creates a grid with those rows and columns. 
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

// When the user selects a color in the color picker,
// the program applies that color to the target click.
table.addEventListener('click', function(event) {
  const color = document.getElementById('colorPicker').value;
  event.target.style.backgroundColor = color;
});

const container = document.querySelector("#container");
let pickerColor = "";
createGrid(16);

function createGrid(squares){

  const grid = document.createElement("div");
  grid.classList.add("grid");
  container.appendChild(grid);

  for(let i = 0; i < squares; i++) {
  let column = document.createElement("div");
  column.classList.add("column");
  grid.appendChild(column);

  for(let j = 0; j < squares; j++){
    let div = document.createElement("div");
    div.classList.add("singleDiv");
    div.addEventListener("mouseover", hoverColor);
    column.appendChild(div);
  }
}
}

function hoverColor (event){
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  event.target.style.backgroundColor = "#" + randomColor;
  addBlack(event);
}

function addBlack (element){
  const style = getComputedStyle(element.target);
  let filter = style.filter;
  let br = filter.substring(
    filter.lastIndexOf("(") + 1, 
    filter.lastIndexOf(")")
  );
  event.target.style.filter = "brightness(" + (br - 0.1) + ")";
}

function clearGrid (){
  const grid = document.querySelector(".grid");
  if(grid) grid.remove();
  let squares = prompt("How many squares per rows do you want?", 16);
  if(squares) createGrid(squares);
}

const newBtn = document.querySelector("#newBtn");
newBtn.addEventListener("click", clearGrid);

jscolor.presets.default = {
  closeButton: true,        // display a close button
  height: 150,              // make the picker box a little bigger
  format: 'hex',            // format to display the color
  position: 'right',        // position the picker to the right of the target
  previewPosition: 'right', // display color preview on the right side
  previewSize: 40,          // make color preview bigger
};

function getColor(color) {
  pickerColor = color.value;
  let singleDivs = document.querySelectorAll(".singleDiv");
  singleDivs.forEach(element => {
    element.addEventListener("mouseover", changeColor);
  })
}

function changeColor(event) {
  event.target.style.backgroundColor = "" +pickerColor+ "";
}
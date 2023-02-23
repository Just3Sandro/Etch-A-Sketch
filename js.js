const DEFAULT_SIZE = 4
const DEFAULT_COLOR = 'black'

let currentSize = DEFAULT_SIZE
let currentColor = DEFAULT_COLOR

const container = document.querySelector('#container');

const ArroundPlatform = document.createElement('div');
ArroundPlatform.classList.add('ArroundPlatform')
container.appendChild(ArroundPlatform)

const Title = document.createElement('h1');
Title.classList.add('Title')
Title.textContent = "DRAW A THING"
ArroundPlatform.appendChild(Title)

const platform = document.createElement('div');
platform.classList.add('platform')
ArroundPlatform.appendChild(platform)
const sizeValue = document.getElementById('sizeValue')
const sizeSlider = document.getElementById('sizeSlider')

sizeSlider.onmousemove = (e) => updateSizeValue(e.target.value)
sizeSlider.onchange = (e) => changeSize(e.target.value)

function changeSize(value) {
  setCurrentSize(value)
  updateSizeValue(value)
  reloadGrid()
}

function updateSizeValue(value) {
  sizeValue.innerHTML = `${value} x ${value}`
}

function setCurrentSize(newSize) {
  currentSize = newSize;
}

function reloadGrid(){
  clearGrid();
  makeRows(currentSize);
}

function clearGrid()
{
  platform.innerHTML = ''
}

function makeRows(size)
{
  platform.style.setProperty('--grid-rows', size);
  platform.style.setProperty('--grid-cols', size);
  for (c = 0; c < (size * size); c++)
  {
    let cell = document.createElement("div");
      cell.addEventListener('mouseover', changeColor => {
        cell.setAttribute('style', 'background-color:'+currentColor+';');
      });
    platform.appendChild(cell).className = "grid-item";
  };
};



// const div = document.querySelectorAll('div');

// function random(min, max){
//     const num = Math.floor(Math.random() * (max - min)) + min;
//     return num;
// }

// function randomColor(){
//     return `rgb(${random(0,255)}, ${random(0,255)},${random(0,255)},)`;
// }

// function changeColor(e) {
//     if (e.type === 'mouseover' && !mouseDown) return
//     const color = randomColor();
//     e.target.style.backgroundColor = color;
//     //if (e.type === 'mouseover' && !mouseDown) return
//     // var e = document.getElementsByClassName("grid-item").style.background = "ff77ee";
//     //var c = window.getComputedStyle(e).backgroundColor;
//    // if (c === "rgb(0, 0, 0)"){
//     //document.getElementsByClassName("grid-item").style.background = "#ff77ee";
// }
window.onload = () => {
  makeRows(DEFAULT_SIZE);
}
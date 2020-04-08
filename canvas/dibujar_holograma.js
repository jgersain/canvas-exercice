let linesBox = document.getElementById('lines-box');
let button = document.getElementById('start');
let area1 = document.getElementById('box-1');
let area2 = document.getElementById('box-2');
let area3 = document.getElementById('box-3');
let area4 = document.getElementById('box-4');

// draw a line
let drawLine = (startX, startY, endX, endY, area, color) => {
  let lienzo = area.getContext("2d");
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(startX, startY);
  lienzo.lineTo(endX, endY);
  lienzo.stroke();
  lienzo.closePath();
};

// generate a rgba random color
let setColor = () => {
  let red = Math.floor(Math.random()*256); 
  let green = Math.floor(Math.random()*256);
  let blue = Math.floor(Math.random()*256);
  return `rgb(${red},${green},${blue})`;
}

// draw first canavas
let drawA = (area, numLines) => {
  let width = area.width
  let scale = width / numLines;
  let initial = 0;
  let xi, yf; 

  while (initial < numLines) {
    xi = scale * ((numLines - initial) - 1);
    yf = scale * initial;
    drawLine(xi, width, width, yf, area, setColor());
    initial++;
  }
};

let drawB = (area, numLines) => {
  let width = area.width
  let scale = width / numLines;
  let initial = 0;
  let xi, yf; 

  while (initial < numLines) {
    xi = scale * (initial + 1);
    yf = scale * initial;
    drawLine(xi, width, 0, yf, area, setColor());
    initial++;
  }
};

// for implementation
let drawC = (area, numLines) => {
  let width = area.width
  let scale = width / numLines;
  let xi, yf; 

  for (let initial = 0; initial < numLines; initial++) {
    xi = scale * (numLines - initial - 1);
    yf = scale * (numLines - initial);
    drawLine(xi, 0, width, yf, area, setColor());
  }
};

let drawD = (area, numLines) => {
  let width = area.width
  let scale = width / numLines;
  let xi, yf;  

  for (let initial = 0; initial < numLines; initial++) {
    xi = scale * (initial + 1);
    yf = scale * (numLines - initial);
    drawLine(xi, 0, 0, yf, area, setColor());
  }
};

button.addEventListener('click', function(){
  let lines = parseInt(linesBox.value);

  drawA(area1, lines);
  drawB(area2, lines);
  drawC(area3, lines);
  drawD(area4, lines);
});
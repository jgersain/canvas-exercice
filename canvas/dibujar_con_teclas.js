document.addEventListener('keyup', dibujarConTeclado);
let cuadro = document.getElementById('area');
let papel = cuadro.getContext('2d');
let x = 150;
let y = 150;

let teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
}

// draw a line
let drawLine = (startX, startY, endX, endY, lienzo, color, width) => {
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = width;
  lienzo.moveTo(startX, startY);
  lienzo.lineTo(endX, endY);
  lienzo.stroke();
  lienzo.closePath();
};

// generate a rgba random color
let setColor = () => {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  return `rgb(${red},${green},${blue})`;
}

function dibujarConTeclado(event) {
  let movimiento = 10;
  switch (event.keyCode) {
    case teclas.UP:
      drawLine(x, y, x, y-=movimiento, papel, setColor(), 3);
      break;
    case teclas.DOWN:
      drawLine(x, y, x, y+=movimiento, papel, setColor(), 3);
      break;
    case teclas.LEFT:
      drawLine(x, y, x-=movimiento, y, papel, setColor(), 3); 
      break;
    case teclas.RIGHT:
      drawLine(x, y, x+=movimiento, y, papel, setColor(), 3);
      break;
    default:
      break;
  }
}
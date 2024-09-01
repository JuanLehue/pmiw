//Lehue Juan Manuel 94773/6
//https://youtu.be/n8vyVWV-0B4
let cant, eje, alto, ancho, segundos;
let imagen;

function preload() {
  imagen = loadImage("data/opArt.jpg");
}

function setup() {
  createCanvas(800, 400);
  cant = 25;
  eje = 12;
  alto = width/cant;
  ancho = width/cant;
  segundos = 0;
}

function draw() {
  background(255);
  //Colocar imagen
  image(imagen, 0, 0, 400, 400);

  //Funcion principal
  grilla(ancho, alto, eje, cant);

  //Crear contador de segundos
  if (frameCount % 60 == 0) {
    segundos++;
  }

  //Crear cartel de aviso
  cartel(segundos);

  if (keyIsPressed) {
    if (eje >= 4 && eje < 18) {
      if (keyCode == RIGHT_ARROW) {
        eje +=1;
      }
    }
    if (eje <= 18 && eje > 4) {
      if (keyCode == LEFT_ARROW) {
        eje -= 1;
      }
    }
    if (keyCode == 32) {
      eje = 12;//Reiniciar al punto inicial
      segundos = 0;
    }
  }
}

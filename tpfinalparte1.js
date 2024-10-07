let textos = [];
let imagenes = [];
let bloque, mitadAn, mitadAl;
let foto;

function preload() {
  textos = loadStrings('data/textosNarrativos.txt');
  for (let i=1; i<16; i++) {
    imagenes[i] = loadImage("data/bloque"+i+".jpeg");
  }
  foto = loadImage('data/bloque1.jpeg');
}

function setup() {
  createCanvas(640, 480);
  bloque = 0;
  mitadAn = width/2;
  mitadAl = height/2;
  for (let i=1; i<16; i++) {
    imagenes[i].resize(640, 640)
  }
}


function draw() {
  background(225);
  if (bloque === 0) {
    cargarImagen(imagenes, bloque, mitadAn, mitadAl, CENTER);
    cargarTexto(textos, bloque, 50, 50, 500, LEFT);
  } else if (bloque === 1) {
    cargarImagen(imagenes, bloque, mitadAn, mitadAl, CENTER);
    cargarTexto(textos, bloque, 50, 50, 500, LEFT);
  } else if (bloque === 2) {
    cargarImagen(imagenes, bloque, mitadAn, mitadAl, CENTER);
    cargarTexto(textos, bloque, 50, 50, 500, LEFT);
  } else if (bloque === 3) {
    cargarImagen(imagenes, bloque, mitadAn, mitadAl, CENTER);
    cargarTexto(textos, bloque, 50, 50, 500, LEFT);
  } else if (bloque === 4) {
    cargarImagen(imagenes, bloque, mitadAn, mitadAl, CENTER);
    cargarTexto(textos, bloque, 50, 50, 500, LEFT);
  } else if (bloque === 5) {
    cargarImagen(imagenes, bloque, mitadAn, mitadAl, CENTER);
    cargarTexto(textos, bloque, 50, 50, 500, LEFT);
  } else if (bloque === 6) {
    cargarImagen(imagenes, bloque, mitadAn, mitadAl, CENTER);
    cargarTexto(textos, bloque, 50, 50, 500, LEFT);
  } else if (bloque === 7) {
    cargarImagen(imagenes, bloque, mitadAn, mitadAl, CENTER);
    cargarTexto(textos, bloque, 50, 50, 500, LEFT);
  } else if (bloque === 8) {
    cargarImagen(imagenes, bloque, mitadAn, mitadAl, CENTER);
    cargarTexto(textos, bloque, 50, 50, 500, LEFT);
  } else if (bloque === 9) {
    cargarImagen(imagenes, bloque, mitadAn, mitadAl, CENTER);
    cargarTexto(textos, bloque, 50, 50, 500, LEFT);
  } else if (bloque === 10) {
    cargarImagen(imagenes, bloque, mitadAn, mitadAl, CENTER);
    cargarTexto(textos, bloque, 50, 50, 500, LEFT);
  } else if (bloque === 11) {
    cargarImagen(imagenes, bloque, mitadAn, mitadAl, CENTER);
    cargarTexto(textos, bloque, 50, 50, 500, LEFT);
  } else if (bloque === 12) {
    cargarImagen(imagenes, bloque, mitadAn, mitadAl, CENTER);
    cargarTexto(textos, bloque, 50, 50, 500, LEFT);
  } else if (bloque === 13) {
    cargarImagen(imagenes, bloque, mitadAn, mitadAl, CENTER);
    cargarTexto(textos, bloque, 50, 50, 500, LEFT);
  } else if (bloque === 14) {
    cargarImagen(imagenes, bloque, mitadAn, mitadAl, CENTER);
    cargarTexto(textos, bloque, 50, 50, 500, LEFT);
  } else if (bloque === 15) {
    cargarImagen(imagenes, bloque, mitadAn, mitadAl, CENTER);
    cargarTexto(textos, bloque, 50, 50, 500, LEFT);
  } 
}

function mousePressed() {
  bloque++;
}

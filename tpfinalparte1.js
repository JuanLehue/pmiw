//Juan Lehue -- 94773/6
//Alex Palomeque -- 93077/3
//Continuidad de los parques
/*
  - FALTA TERMINAR LOS CREDITOS (TEXTO Y IMAGEN)
 - ACOMODAR LOS TEXTOS EN TODAS LAS PANTALLAS (AGREGAR CUADRADOS
 PARA EL CONTRASTE DE LOS TEXTOS)
 - TERMINAR DE DECORAR EN GENERAL
 - AGREGAR AUDIO
 */
let textos = [];
let imagenes = [];
let bloque, mitadAn, mitadAl;
let foto;

function preload() {
  textos = loadStrings('data/textosNarrativos.txt');
  for (let i=0; i<16; i++) {
    imagenes[i] = loadImage("data/bloque"+i+".jpeg");
  }
  foto = loadImage('data/bloque1.jpeg');
}

function setup() {
  createCanvas(640, 480);
  bloque = "salir";
  mitadAn = width/2;
  mitadAl = height/2;
  for (let i=1; i<16; i++) {
    imagenes[i].resize(640, 640)
  }
}


function draw() {
  background(225);
  if (bloque === "inicio") {
    cargarImagen(imagenes, 0, mitadAn, mitadAl, CENTER);
    cargarTexto(textos, 0, 100, 80, 380, 0, 0, LEFT, 30);
    fill(0, 200);
    rect(172, 150, 200, 200);
    boton(220, 200, 100, 30, "Empezar");
    boton(220, 280, 100, 30, "Creditos");
  } else if (bloque === "intro") {
    cargarImagen(imagenes, 1, mitadAn, mitadAl, CENTER);
    cargarTexto(textos, 1, 50, 330, 500, 500, 130, LEFT, 16);
    boton(270, 420, 130, 30, "Seguir leyendo");
    boton(420, 420, 100, 30, "Levantarse");
  } else if (bloque === "ignorar") {
    cargarImagen(imagenes, 2, mitadAn, mitadAl, CENTER);
    cargarTexto(textos, 2, 50, 350, 500, 500, 115, LEFT, 16);
    boton(400, 420, 130, 30, "Seguir leyendo");
  } else if (bloque === "vertigo") {
    cargarImagen(imagenes, 3, mitadAn, mitadAl, CENTER);
    cargarTexto(textos, 3, 50, 330, 500, 500, 130, LEFT, 16);
    boton(400, 420, 100, 30, "Continuar");
  } else if (bloque === "final1") {
    cargarImagen(imagenes, 4, mitadAn, mitadAl, CENTER);
    cargarTexto(textos, 4, 50, 350, 500, 500, 110, LEFT, 16);
    boton(400, 420, 140, 30, "Volver al inicio");
  } else if (bloque === "levantarse") {
    cargarImagen(imagenes, 5, mitadAn, mitadAl, CENTER);
    cargarTexto(textos, 5, 50, 350, 500, 500, 110, LEFT, 16);
    boton(270, 420, 100, 30, "Volver");
    boton(420, 420, 100, 30, "Investigar");
  } else if (bloque === "volver") {
    cargarImagen(imagenes, 6, mitadAn, mitadAl, CENTER);
    cargarTexto(textos, 6, 50, 350, 500, 500, 110, LEFT, 16);
    boton(400, 420, 130, 30, "Seguir leyendo");
  } else if (bloque === "salir") {
    cargarImagen(imagenes, 7, mitadAn, mitadAl, CENTER);
    cargarTexto(textos, 7, 50, 350, 500, 500, 110, LEFT, 16);
    boton(400, 420, 100, 30, "Continuar");
  } else if (bloque === "continuar") {
    cargarImagen(imagenes, 8, mitadAn, mitadAl, CENTER);
    //cargarTexto(textos, 8, 50, 50, 500, LEFT);
    boton(120, 400, 100, 30, "Volver");
    boton(320, 400, 130, 30, "Abrir la puerta");
  } else if (bloque === "empujar") {
    cargarImagen(imagenes, 9, mitadAn, mitadAl, CENTER);
    //cargarTexto(textos, 9, 50, 50, 500, LEFT);
    boton(220, 400, 100, 30, "Enfrentarlo");
  } else if (bloque === "enfrentamiento") {
    cargarImagen(imagenes, 10, mitadAn, mitadAl, CENTER);
    //cargarTexto(textos, 10, 50, 50, 500, LEFT);
    boton(220, 400, 100, 30, "Continuar");
  } else if (bloque === "final2") {
    cargarImagen(imagenes, 11, mitadAn, mitadAl, CENTER);
    //cargarTexto(textos, 11, 50, 50, 500, LEFT);
    boton(220, 400, 140, 30, "Volver al inicio");
  } else if (bloque === "miedo") {
    cargarImagen(imagenes, 12, mitadAn, mitadAl, CENTER);
    //cargarTexto(textos, 12, 50, 50, 500, LEFT);
    boton(120, 400, 130, 30, "Seguir leyendo");
    boton(320, 400, 130, 30, "Cerrar el libro");
  } else if (bloque === "atrapar") {
    cargarImagen(imagenes, 13, mitadAn, mitadAl, CENTER);
    //cargarTexto(textos, 13, 50, 50, 500, LEFT);
    boton(220, 400, 100, 30, "Continuar");
  } else if (bloque === "cerrar") {
    cargarImagen(imagenes, 14, mitadAn, mitadAl, CENTER);
    //cargarTexto(textos, 14, 50, 50, 500, LEFT);
    boton(220, 400, 100, 30, "Continuar");
  } else if (bloque === "final3") {
    cargarImagen(imagenes, 15, mitadAn, mitadAl, CENTER);
    //cargarTexto(textos, 15, 50, 50, 500, LEFT);
    boton(220, 400, 140, 30, "Volver al inicio");
  } else if (bloque === "creditos") {
    //cargarImagen(imagenes, 16, mitadAn, mitadAl, CENTER);
    cargarTexto(textos, 16, 50, 50, 500, LEFT);
    boton(220, 400, 140, 30, "Volver al inicio");
  }
}

function mousePressed() {
  if (bloque === "inicio") {
    if (detectarMouse(220, 200, 100, 30)) {
      bloque="intro";
    }
    if (detectarMouse(220, 280, 100, 30)) {
      bloque="creditos";
    }
  } else if (bloque === "intro") {
    if (detectarMouse(270, 420, 130, 30)) {
      bloque="ignorar";
    }
    if (detectarMouse(420, 420, 100, 30)) {
      bloque="levantarse";
    }
  } else if (bloque === "ignorar") {
    if (detectarMouse(400, 420, 130, 30)) {
      bloque="vertigo";
    }
  } else if (bloque === "vertigo") {
    if (detectarMouse(400, 420, 100, 30)) {
      bloque="final1";
    }
  } else if (bloque === "final1") {
    if (detectarMouse(400, 420, 140, 30)) {
      bloque="inicio";
    }
  } else if (bloque === "levantarse") {
    if (detectarMouse(270, 420, 100, 30)) {
      bloque="volver";
    }
    if (detectarMouse(420, 420, 100, 30)) {
      bloque="salir";
    }
  } else if (bloque === "volver") {
    if (detectarMouse(400, 420, 130, 30)) {
      bloque="vertigo";
    }
  } else if (bloque === "salir") {
    if (detectarMouse(400, 420, 100, 30)) {
      bloque="continuar";
    }
  } else if (bloque === "continuar") {
    if (detectarMouse(320, 400, 130, 30)) {
      bloque="empujar";
    }
    if (detectarMouse(120, 400, 130, 30)) {
      bloque="miedo";
    }
  } else if (bloque === "empujar") {
    if (detectarMouse(220, 400, 100, 30)) {
      bloque="enfrentamiento";
    }
  } else if (bloque === "enfrentamiento") {
    if (detectarMouse(220, 400, 100, 30)) {
      bloque="final2";
    }
  } else if (bloque === "final2") {
    if (detectarMouse(220, 400, 140, 30)) {
      bloque="inicio";
    }
  } else if (bloque === "miedo") {
    if (detectarMouse(120, 400, 130, 30)) {
      bloque="atrapar";
    }
    if (detectarMouse(320, 400, 130, 30)) {
      bloque="cerrar";
    }
  } else if (bloque === "atrapar") {
    if (detectarMouse(220, 400, 100, 30)) {
      bloque="final1";
    }
  } else if (bloque === "cerrar") {
    if (detectarMouse(220, 400, 100, 30)) {
      bloque="final3";
    }
  } else if (bloque === "final3") {
    if (detectarMouse(220, 400, 140, 30)) {
      bloque="inicio";
    }
  } else if (bloque === "creditos") {
    if (detectarMouse(220, 400, 140, 30)) {
      bloque="inicio";
    }
  }
}

function cargarTexto(texto, index, x, y, an, align) {
  textAlign(align);
  text(texto[index], x, y, an);
}

function cargarImagen(img, index, x, y, align) {
  imageMode(align);
  image(img[index+1], x, y);
}

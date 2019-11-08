function slideImages() {
  let imagenes = document.getElementsByClassName("slider-img");
  let mostrando = -1;
  let botones = document.getElementsByClassName("btn-img");
  for (let i = 0; i < imagenes.length; i++) {
    if (imagenes[i].classList.contains("mostrar")) {
      mostrando = i+1;
      imagenes[i].classList.remove("mostrar");
    }
    imagenes[i].classList.add("ocultar");
    botones[i].classList.remove("background-naranja");
  }
  if (mostrando == -1 || mostrando == imagenes.length) mostrando = 0;
  imagenes[mostrando].classList.remove("ocultar");
  imagenes[mostrando].classList.add("mostrar");
  botones[mostrando].classList.add("background-naranja");
}

function crearBotones() {
  let imagenes = document.getElementsByClassName("slider-img");
  let contenedorBotones = document.getElementById("img-btn-container");
  let codigoBotones = "";
  for (let i = 0; i < imagenes.length; i++) {
    codigoBotones += "<div class='btn-img btn'></div>";
  }
  contenedorBotones.innerHTML = codigoBotones;
}
crearBotones();
slideImages();
let timerID = setInterval(slideImages, 5000);

function addClickEvent() {
  let imagenes = document.getElementsByClassName("slider-img");
  let botones = document.getElementsByClassName("btn-img");
  for (let i = 0; i < imagenes.length; i++) {
    botones[i].addEventListener("click", function() {
      clearInterval(timerID);
      for (let j = 0; j < imagenes.length; j++) {
        imagenes[j].classList.add("ocultar");
        botones[j].classList.remove("background-naranja");
      }
      imagenes[i].classList.remove("ocultar");
      imagenes[i].classList.add("mostrar");
      botones[i].classList.add("background-naranja");
      timerID = setInterval(slideImages, 5000);
    });
  }
}

addClickEvent();

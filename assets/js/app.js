var img = document.getElementsByClassName("animal");
var select = document.getElementById("select");
select.onchange = function(){
  if (select.value == "original") {
    for (var i = 0; i < img.length; i++) {
      img[i].classList.add("original");
      img[i].classList.remove("sepia");
      img[i].classList.remove("blanco-negro");
      img[i].classList.remove("invertir-colores");
    }
  } else if (select.value == "sepia") {
    for (var i = 0; i < img.length; i++) {
      img[i].classList.remove("original");
      img[i].classList.add("sepia");
      img[i].classList.remove("blanco-negro");
      img[i].classList.remove("invertir-colores");
    }
  } else if (select.value == "blanco-negro") {
    for (var i = 0; i < img.length; i++) {
      img[i].classList.remove("original");
      img[i].classList.remove("sepia");
      img[i].classList.add("blanco-negro");
      img[i].classList.remove("invertir-colores");
    }
  } else if (select.value == "invertir-colores") {
    for (var i = 0; i < img.length; i++) {
      img[i].classList.remove("original");
      img[i].classList.remove("sepia");
      img[i].classList.remove("blanco-negro");
      img[i].classList.add("invertir-colores");
    }
  }
}

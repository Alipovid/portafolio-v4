/* CAMBIAR TEMA */

const btnTema = document.getElementById("btn-tema");

btnTema.addEventListener("click", function(){

document.body.classList.toggle("tema-negro");

});


/* SCROLL A PROYECTOS */

const btnProyectos = document.getElementById("ver-proyectos");

btnProyectos.addEventListener("click", function(){

document.getElementById("proyectos").scrollIntoView({
behavior:"smooth"
});

});


/* BOTON SUBIR ARRIBA */

const btnArriba = document.getElementById("btn-arriba");

btnArriba.addEventListener("click", function(){

window.scrollTo({
top:0,
behavior:"smooth"
});

});
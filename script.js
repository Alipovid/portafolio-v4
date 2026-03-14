const btnProyectos = document.getElementById("ver-proyectos");

btnProyectos.addEventListener("click", function(){
    document.getElementById("proyectos").scrollIntoView({
        behavior: "smooth"
    });
});

const btnTema = document.getElementById("btn-tema");

btnTema.addEventListener("click", function(){
    document.body.classList.toggle("dark-mode");
});


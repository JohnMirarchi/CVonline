let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

//Descargar Cv

let downloadButton = document.getElementById("download-button");
let downloadLink = document.getElementById("download-link");
let downloadOverlay = document.getElementById("download-overlay");

downloadButton.addEventListener("click", function() {
  downloadOverlay.style.display = "block";
  downloadLink.click();
});

downloadLink.addEventListener("click", function() {
  downloadOverlay.style.display = "none";
});

//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("adobepremier");
        habilidades[1].classList.add("aftereffects");
        habilidades[2].classList.add("photoshoplightroom");
        habilidades[3].classList.add("adobeiilustrator");
        habilidades[4].classList.add("htmlcssjs");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("proyect");
    }
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 
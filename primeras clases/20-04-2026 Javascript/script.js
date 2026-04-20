const agregarEstudiante = () => {
    const divContenedor = document.getElementById("contenedor");
    const itemEstudiante = document.createElement("p")
    itemEstudiante.innerText = "Mariano";
    divContenedor.appendChild(itemEstudiante);
}



/*const insertarEstudiante = () => {
    const titulo = document.getElementById("principal");
    titulo.style.background = "aqua";
    titulo.style.color = "white";
    titulo.innerText = "Lista de matriculado"
    console.log(titulo.textContent);
}*/


/*function saludar (){
    console.log("Hola");
}
saludar();*/
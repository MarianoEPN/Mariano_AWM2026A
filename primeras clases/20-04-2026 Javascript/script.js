/*const insertarEstudiante = () => {
    const titulo = document.getElementById("principal");
    titulo.style.background = "aqua";
    titulo.style.color = "white";
    titulo.innerText = "Lista de matriculado"
    console.log(titulo.textContent);
}


function saludar (){
    console.log("Hola");
}
saludar();
const estudiante = {id: 1, nombre:"Mariano Zambrano"}

lstEstudiantes.forEach((estudiante) => {
    console.log(estudiante);
    }
);

const agregarEstudiante = () => {
    const divContenedor = document.getElementById("contenedor");
    const itemEstudiante = document.createElement("p")
    itemEstudiante.innerText = estudiante.nombre;
    divContenedor.appendChild(itemEstudiante);
}*/

let lstEstudiantes = [
    {id: 1, nombre: "Mariano"},
    {id: 2, nombre: "Domenica"},
    {id: 3, nombre: "Harold"}
];
const renderizarListaEstudiantes = () => {
    const divContenedor = document.getElementById("contenedor");
    divContenedor.innerText = ""
    lstEstudiantes.forEach((estudiante) =>{
        const divEstudiante = document.createElement("div");
        divEstudiante.className = "divEstudiante";
        const itemEstudiante = document.createElement("p");
        itemEstudiante.innerText = estudiante.nombre;
        divEstudiante.appendChild(itemEstudiante);
        const botonEstudiante = document.createElement("button");
        botonEstudiante.innerText = "Eliminar";
        botonEstudiante.onclick = () => eliminarEstudiante(estudiante.id);
        //boton editar
        const botonEditar = document.createElement("button");
        botonEditar.innerText= "Editar";
        divEstudiante.appendChild(botonEstudiante);
        divContenedor.appendChild(divEstudiante);
    })
    
}

renderizarListaEstudiantes()

const insertarEstudiante = (event) => {
    event.preventDefault();
    const nombreIngresado = document.getElementById("txtNombre").value;
    lstEstudiantes.push({id: 0, nombre: nombreIngresado});
    renderizarListaEstudiantes()
}
const eliminarEstudiante = (idEstudiante) => {
    lstEstudiantes = lstEstudiantes.filter((estudiante)=>{
        return estudiante.id !== idEstudiante
    })
    renderizarListaEstudiantes();
}




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

const lstEstudiantes = [
    {id: 1, nombre: "Mariano"},
    {id: 2, nombre: "Domenica"},
    {id: 3, nombre: "Harold"}
];
const renderizarListaEstudiantes = () => {
    const divContenedor = document.getElementById("contenedor");
    divContenedor.innerText = ""
    lstEstudiantes.forEach((estudiante) =>{
        const itemEstudiante = document.createElement("p")
        itemEstudiante.innerText = estudiante.nombre;
        divContenedor.appendChild(itemEstudiante);
    })
    
}

renderizarListaEstudiantes()

const insertarEstudiante = (event) => {
    event.preventDefault();
    const nombreIngresado = document.getElementById("txtNombre").value;
    lstEstudiantes.push({id: 0, nombre: nombreIngresado});
    renderizarListaEstudiantes()
}




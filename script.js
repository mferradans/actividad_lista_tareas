//Funcion para agregar una nueva tarea donde se pueda eliminar también
function agregarTarea(){
    //Obtiene el elemento del campo de texto que pusimos en el HTML
    // y lo almacena en la constante nuevaTareaInput
    const nuevaTareaInput = document.getElementById('nuevaTarea');
    //Acá lo mismo, obtiene la lista por el ID pasado por parámetro
    const listaTarea = document.getElementById('listaTareas');
    //Se obtiene el valor del input de nuevaTareaInput y se le aplica el método trim()
    //para eliminar cualquier espacio en blanco adicional al principio y al final del texto.
    const nuevaTareaTexto = nuevaTareaInput.value.trim();
    if (nuevaTareaTexto !== "") {
        //e crea un nuevo elemento de lista (<li>)
        //utilizando el método createElement() del objeto document.
        const nuevaTarea=document.createElement("li");
        nuevaTarea.textContent = nuevaTareaTexto;

        const botonEliminar=document.createElement("button");
        botonEliminar.textContent="Eliminar";
        botonEliminar.className="delete";
        botonEliminar.onclick=function(){
            listaTarea.removeChild(nuevaTarea);
        };
        nuevaTarea.appendChild(botonEliminar);
        listaTarea.appendChild(nuevaTarea);
        nuevaTareaInput.value="";

    }
}

function marcarCompletada(tarea) {
    tarea.classList.toggle("completed");
}

var listaTarea =document.getElementById("listaTareas");
listaTarea.addEventListener("click",
function(event) {
    if (event.target.tagName === 'LI') {
        marcarCompletada(event.target);
    }
});


function mostrarCompletadas(){
    const listaTarea = document.querySelectorAll('li');
    listaTarea.forEach(tarea=>{
        if (tarea.classList.contains("completed")){
            tarea.style.display = "flex";
        }else{
            tarea.style.display = "none";
        }
    });
}
function mostrarPendientes() {
    const listaTarea = document.querySelectorAll("li");
    listaTarea.forEach(tarea => {
        if (!tarea.classList.contains("completed")) {
            tarea.style.display = "flex";
        } else { tarea.style.display = "none"; }
    });
}
function mostrarTodo(){
    const listaTarea = document.querySelectorAll("li");
    listaTarea.forEach(tarea => {
        tarea.style.display = "flex";
    }); 
}

document.getElementById("botonAgregar").addEventListener("click", agregarTarea);
document.getElementById("botonMostrarCompletadas").addEventListener("click", mostrarCompletadas);
document.getElementById("botonMostrarPendientes").addEventListener("click", mostrarPendientes);
document.getElementById("botonMostrarTodo").addEventListener("click", mostrarTodo);

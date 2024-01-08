function agregarTarea()
{
    var tarea = document.getElementById("nueva-tarea").value;
    var nuevoItem = document.createElement("li");
    nuevoItem.textContent = tarea;
    document.getElementById("tareas-lista").appendChild ("nuevoItem");
    document.getElementById("nueva-tarea").value = "";
    
}
function agregarTarea(){
    const entrada= document.getElementById("entrada")
    const texto= entrada.value.trim();

    if (texto!== ""){
        const div =document.createElement("div")
        div.className= "item";
        div.textContent= texto;

        const span = document.createElement("button")
        
        span.textContent ="text";

        const botonEliminar = document.createElement("button")
        botonEliminar.textContent = "Eliminar"
        botonEliminar.className ="eliminar";
        botonEliminar.onclick = function(){
            div.remove();
        };

        div.appendChild(botonEliminar);

        document.getElementById("tareas").appendChild(div);
        entrada.value ="";
    }
}
let container=document.querySelector('.text-section');
let hijo=document.querySelector('.child');
let botonEliminar=document.querySelector('#eliminar');
const eliminarElemento=()=>{
    container.removeChild(hijo);
}

botonEliminar.addEventListener('click',eliminarElemento);
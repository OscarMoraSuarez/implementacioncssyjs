let interruptor=false;
let botonCrear=document.querySelector('#crear');
let container=document.querySelector('.text-section');
console.log(container);
const crearElemento=()=>{
    if(!interruptor){
        let nuevoElemento=document.createElement('div');
        nuevoElemento.textContent='Nuevo Elemento Creado';
        nuevoElemento.style.backgroundColor='rgb(88, 244, 176)';
        nuevoElemento.style.color='#fff';
        nuevoElemento.style.width='100px';
        nuevoElemento.style.height='100px';
        nuevoElemento.style.border='2px solid black';
        nuevoElemento.style.marginLeft='10px';
        container.append(nuevoElemento);
        interruptor=true;
    }
}
botonCrear.addEventListener('click',crearElemento);




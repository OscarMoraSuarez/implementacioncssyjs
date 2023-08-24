
let interruptor=false;
let texto= document.querySelector('#texto');
let botonCambiarEstilo=document.querySelector('#botonCambiarEstilo');

const cambiarEstilo=()=>{
    if(!interruptor){
        let=clases= texto.classList;
        console.log(clases);
        texto.classList.add('nuevaClase');
        interruptor=true;
    }else{
        texto.classList.remove('nuevaClase');
        texto.classList.add('texto');
        interruptor=false;
    }

    
}
botonCambiarEstilo.addEventListener('click',cambiarEstilo);

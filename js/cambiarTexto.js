let texto= document.querySelector('#texto');
let textoDefault='Hola Mundo';
let textoInput=document.querySelector('#textoInput');
let botonCambiarTexto=document.querySelector('#botonCambiarTexto');
let reset=document.querySelector('#buttonReset');

texto.innerText=textoDefault;

const cambiarTexto=()=>{
    let match=/^[A-Za-z]+$/.test(textoInput.value);
    if(!match){
        alert('ingrese solo texto valido')
    }else{
    console.log(textoInput.value);
    (textoInput.value)?texto.innerText=textoInput.value:alert('ingrese un texto');
    }
    textoInput.value='';
}    
botonCambiarTexto.addEventListener('click',cambiarTexto);

const resetTexto=()=>{
    texto.innerText=textoDefault;
}
reset.addEventListener('click',resetTexto);



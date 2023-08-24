let nombres = ['Spiderman', 'Hulk', 'Batman', 'Superman'];
let lista = document.querySelector('.lista');
let nuevoNombre = document.querySelector('#textoInput');
let botonIngresar = document.querySelector('#ingresar');

const ingresarNuevo = () => {
  let match=/^[A-Za-z]+$/.test(nuevoNombre.value);
  if(!match){
    alert('ingrese solo letras');
  }else{
    nombres.push(nuevoNombre.value);
  actualizar();
  nuevoNombre.value = ''; 
  }
};

const actualizar = () => {
  lista.innerHTML = '';
  nombres.forEach((nombre) => {
    let item = document.createElement('li');
    item.innerText = nombre;
    lista.appendChild(item);
  });
};

document.addEventListener('DOMContentLoaded', actualizar);
botonIngresar.addEventListener('click', ingresarNuevo);







const miTitulo = document.querySelector('h1');
miTitulo.textContent = '¡Hola mundo!';
let miImage = document.querySelector('img');
miImage.onclick = function () {
    let miSrc = miImage.getAttribute('src');
    if (miSrc === 'images/logo.jpg') {
      miImage.setAttribute('src','images/firefox2.png');
    } else {
      miImage.setAttribute('src', 'images/logo.jpg');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function estableceNombreUsuario() {
  let miNombre = prompt('Ingrese su nombre.');
  if(!miNombre) {
    estableceNombreUsuario();
  } else {
    localStorage.setItem('nombre', miNombre);
    miTitulo.textContent = 'Mozilla is cool, ' + miNombre;
  }
}
if(!localStorage.getItem('nombre')) {
  estableceNombreUsuario();
} else {
  let nombreAlmacenado = localStorage.getItem('nombre');
  miTitulo.textContent = 'Mozilla es genial, ' + nombreAlmacenado;
}
myButton.onclick = function() {
  estableceNombreUsuario();
}


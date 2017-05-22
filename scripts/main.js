
/* 
// PrimerEjemplo: Funcion y mensaje de alerta

var miTitulo = document.querySelector('h1');
miTitulo.innerHTML = multiplica(3.5,2);


function multiplica(num1, num2)
{
	var resultado = num1 * num2;
	return resultado;
}

document.querySelector('html').onclick = function()
{
	alert('Ouch! no me pinches!');
}
// Fin PrimerEjemplo
*/


// SegundoEjemplo: Cambio de imagenes al hacer click en ella
// y solicitud de dato para nombre.
var miImage = document.querySelector('img');

miImage.onclick = function()
{
	var miSrc = miImage.getAttribute('src');
	if(miSrc === 'images/firefox-icon.png'){
		miImage.setAttribute('src','images/Snakee.png');
	} else {
		miImage.setAttribute('src','images/firefox-icon.png');
	}
}

var miBoton = document.querySelector('button');
var miTitulo = document.querySelector('h1');

if(!localStorage.getItem('nombre')){
	seleccionNombre();
} else {
	var storedName = localStorage.getItem('nombre');
	miTitulo.innerHTML = 'Snakee is ' + storedName;
}

miBoton.onclick = function(){
	seleccionNombre();
}

function seleccionNombre() {
	var miNombre = prompt('por favor ingresa tu nombre:');
	localStorage.setItem('nombre',miNombre);
	miTitulo.innerHTML = 'Snakee es ' + miNombre;
}
// Fin SegundoEjemplo.

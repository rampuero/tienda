// validar el localStorage

validStorage();

// llamar a los inputs

var btn = document.getElementById('add');
var nombre = document.getElementById('nombre');
var desct = document.getElementById('desct');
var img = document.getElementById('img');
var price = document.getElementById('price');

btn.addEventListener('click', function(){
	nuevoProducto(nombre.value,desct.value,img.value,price.value);
	alert('nuevo producto' + nombre.value + 'son creado');
	nombre.value = '';
	desct.value = '';
	img.value = '';
	price.value = '';	
});


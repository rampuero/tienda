function nuevoProducto(nombre,desct,img,price){
	var producto = {
		nombre:nombre,
		descripcion:desct,
		imagen:img,
		precio:price,
	}
	
	addProduct(producto);

}


function getStorage(){
	return JSON.parse(window.localStorage.getItem('productos'));
}

function setStorage(arr){
	window.localStorage.setItem('productos', JSON.stringify(arr));
}

function addProduct(obj){
	var nuevoArrayProductos = getStorage();
	nuevoArrayProductos.push(obj);
	setStorage(nuevoArrayProductos);
}

function validStorage(){
	if(getStorage() == null){
		setStorage([]);
		return getStorage();
	}else{
		return getStorage();
	}
		
}

function rederView(arr){
	var ul = document.getElementById("productoList");
	ul.innerHTML = '';
	
	arr.forEach(function(item,index){
		var li = document.createElement('li');
		var col1 = document.createElement('span');
		var col2 = document.createElement('span');
		var img = document.createElement('img');
		var titulo = document.createElement('h3');
		var desct = document.createElement('p');
		var price = document.createElement('span');
		
		titulo.innerText = item.nombre;
		desct.innerText = item.descripcion;
		price.innerText = '$ ' + item.precio;
		img.src = item.imagen;
				
		col1.appendChild(img);
		col2.appendChild(titulo);
		col2.appendChild(desct);
		col2.appendChild(price);
		li.appendChild(col1);
		li.appendChild(col2);
		ul.appendChild(li);
	});
}
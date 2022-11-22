const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const totalCarrito = document.querySelectorAll('#lista-carrito thead');
const vaciarCarritoBoton = document.querySelector('#vaciar-carrito');
const liProductos = document.querySelector('#lista-cursos');
let articuloCarrito =[];
let totalPedido = 0;
cargarEvento();
function cargarEvento(){
    liProductos.addEventListener('click',agregarProducto);
    vaciarCarritoBoton.addEventListener('click',vaciarProductos);
    carrito.addEventListener('click',eliminarProducto)
    articuloCarrito=[]
    limpiarHTML();
    limpiarHtmlTotal();
}
function agregarProducto(e){
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')){
        const productoSeleccionado = e.target.parentElement.parentElement
        leerDatos(productoSeleccionado);
    }
}

function vaciarProductos(){
    articuloCarrito=[];
    limpiarHTML()
}

function leerDatos(productos){
    const infoProductos={
        imagen:productos.querySelector('img').src,
        titulo:productos.querySelector('h4').textContent,
        precio:productos.querySelector('.precio span').textContent,
        cantidad:1,
        total:parseInt(productos.querySelector('.precio span').textContent.substr(1,productos.querySelector('.precio span').textContent.length)),
        id:productos.querySelector('a').getAttribute('data-id')
    }
/*     console.log(infoProductos)
    //agregamos el vector
    articuloCarrito=[...articuloCarrito,infoProductos];
    console.log("vector",articuloCarrito) */
    
    if(articuloCarrito.some( curso => curso.id === infoProductos.id)){
        const cursos = articuloCarrito.map( curso => {
            if(curso.id === infoProductos.id){
                /* console.log("cantidad de texto",curso.precio.length,"",curso.total); */
                curso.cantidad++;
                curso.total = curso.cantidad * parseInt(curso.precio.substr(1,curso.total.substr));
                return curso;
            }else{
                return curso;
            }
           
        })
        articuloCarrito = [...cursos];
    }else{
        articuloCarrito = [...articuloCarrito,infoProductos];
    }
    llenarcarritoHTML();
}
//elimina el producto by andres
function eliminarProducto(e) {
    e.preventDefault();
    if(e.target.classList.contains('borrar-curso')) {
        const cursoId = e.target.getAttribute('data-id')
        articuloCarrito = articuloCarrito.filter(curso => curso.id !== cursoId)
        llenarcarritoHTML();
    }
}

function llenarcarritoHTML(){
    //borrar el HTML del contenedor
    limpiarHTML();
    limpiarHtmlTotal();
    totalPedido = 0;
    articuloCarrito.forEach(producto =>{
        const fila = document.createElement('tr');
        fila.innerHTML = `
        <td><img src="${producto.imagen}"width="90"></td>
        <td> ${producto.titulo} </td>
        <td> ${producto.precio} </td>
        <td> ${producto.cantidad} </td>
        <td> ${producto.total} </td>
        <td> <a href="#" class="borrar-curso" data-id="${producto.id}"> X </a> </td>
        `;
        totalPedido =totalPedido+producto.total;
        contenedorCarrito.appendChild(fila);
        const filaTotal = document.createElement('tr');
        filaTotal.innerHTML = `
        <td>Total Pedido ${totalPedido} </td>
        `;
        contenedorCarrito.appendChild(fila);
        limpiarHtmlTotal();
        totalCarrito[1].appendChild(filaTotal)
    })
}

function limpiarHTML(){
    contenedorCarrito.innerHTML='';
}
function limpiarHtmlTotal(){
    totalCarrito[1].innerHTML='';
}
/* return {cargarEvento,agregarProducto,vaciarProductos,leerDatos,eliminarProducto,llenarcarritoHTML,limpiarHTML,limpiarHtmlTotal} */


<template>
  <v-app>
      <h1>Productos</h1>
      <p></p>
      <header id="header" class="header">
        <div class="container">
            <div class="row">
                <div class="four columns">
                    <img src="/img/logo (3).png" id="logo">
                </div>
                <div class="two columns u-pull-right">
                    <ul>
                        <li class="submenu">
                                <img src="../assets/carrito.png" id="img-carrito">
                                <div id="carrito">
                                        
                                        <table id="lista-carrito" class="u-full-width">
                                            <thead>
                                                <tr>
                                                    <th>Imagen</th>
                                                    <th>Nombre</th>
                                                    <th>Precio</th>
                                                    <th>Cantidad</th>
                                                    <th>Total</th>
                                                </tr>
                                            </thead>
                                            <tbody></tbody>
                                            <thead>
                                                
                                            </thead>
                                        </table>
    
                                        <a href="#" id="vaciar-carrito" class="button u-full-width">Vaciar Carrito</a>
                                </div>
                        </li>
                    </ul>
                </div>
            </div> 
        </div>
        </header>
      <div id="lista-cursos" class="container">
          <h1 id="encabezado" class="encabezado">MENÚ</h1>
          <h1 id="seccion" class="seccion">DESAYUNOS</h1>
          <div class="row">
              <div class="four columns">
                  <div class="card">
                      <img src="../assets/producto1.png" height="150px" class="imagen-curso u-full-width">
                      <div class="info-card">
                          <h4>Café y Pan con Queso</h4>
                          <p>Desayunos</p>
                          <img src="../assets/estrellas.png">
                          <p class="precio">$2500  <span class="u-pull-right ">$2000</span></p>
                          <a href="#" class="u-full-width button-primary button input agregar-carrito" data-id="1">Agregar Al Carrito</a>
                      </div>
                  </div> <!--.card-->
              </div>
              <div class="four columns">
                      <div class="card">
                          <img src="../assets/producto2.png" height="150px" class="imagen-curso u-full-width">
                          <div class="info-card">
                              <h4>Desayuno Americano</h4>
                              <p>Desayunos</p>
                              <img src="../assets/estrellas.png">
                              <p class="precio">$3000  <span class="u-pull-right ">$2500</span></p>
                              <a href="#" class="u-full-width button-primary button input agregar-carrito" data-id="2">Agregar Al Carrito</a>
                          </div>
                      </div>
              </div>
              <div class="four columns">
                      <div class="card">
                          <img src="../assets/producto3.jpg" height="150px" class="imagen-curso u-full-width">
                          <div class="info-card">
                              <h4>Desayuno Santandereano</h4>
                              <p>Desayunos</p>
                              <img src="../assets/estrellas.png">
                              <p class="precio">$4000  <span class="u-pull-right ">$3500</span></p>
                              <a href="#" class="u-full-width button-primary button input agregar-carrito" data-id="3">Agregar Al Carrito</a>
                          </div>
                      </div> <!--.card-->
              </div>
  
          </div> <!--.row-->
          <h1 id="seccion" class="seccion">ALMUERZOS</h1>
          <div class="row">
              <div class="four columns">
                  <div class="card">
                      <img src="../assets/producto4.jpg" height="150px" class="imagen-curso u-full-width">
                      <div class="info-card">
                          <h4>La Casa 
                          (Arroz, Papas fritas, Carne)
                          </h4>
                          <p>Almuerzos</p>
                          <img src="../assets/estrellas.png">
                          <p class="precio">$5000  <span class="u-pull-right ">$4500</span></p>
                          <a href="#" class="u-full-width button-primary button input agregar-carrito" data-id="4">Agregar Al Carrito</a>
                      </div>
                  </div> <!--.card-->
              </div>
              <div class="four columns">
                      <div class="card">
                          <img src="../assets/producto5.jpg" height="150px" class="imagen-curso u-full-width">
                          <div class="info-card">
                              <h4>Bandeja Paisa 
                              (Aguacate, huevo, chorizo, arepa, arroz, maduro, frijoles, carene molida)</h4>
                              <p>Almuerzos</p>
                              <img src="../assets/estrellas.png">
                              <p class="precio">$8000  <span class="u-pull-right ">$7500</span></p>
                              <a href="#" class="u-full-width button-primary button input agregar-carrito" data-id="5">Agregar Al Carrito</a>
                          </div>
                      </div> <!--.card-->
              </div>
              <div class="four columns">
                      <div class="card">
                          <img src="../assets/producto6.jpg" height="150px" class="imagen-curso u-full-width">
                          <div class="info-card">
                              <p>Almuerzos</p>
                              <img src="../assets/estrellas.png">
                              <p class="precio">$8000  <span class="u-pull-right ">$7500</span></p>
                              <a href="#" class="u-full-width button-primary button input agregar-carrito" data-id="6">Agregar Al Carrito</a>
                          </div>
                      </div> <!--.card-->
              </div>
          </div> <!--.row-->
          <h1 id="seccion" class="seccion">SOPAS</h1>
          <div class="row">
              <div class="four columns">
                  <div class="card">
                      <img src="../assets/producto7.jpg" height="150px" class="imagen-curso u-full-width">
                      <div class="info-card">
                          <h4>Sancocho 
                          (Gallina, Res, Platano maduro, Calabaza, Mazorca, Papas, Yuca)
                          </h4>
                          <p>Sopas</p>
                          <img src="../assets/estrellas.png">
                          <p class="precio">$3000  <span class="u-pull-right ">$2500</span></p>
                          <a href="#" class="u-full-width button-primary button input agregar-carrito" data-id="7">Agregar Al Carrito</a>
                      </div>
                  </div> <!--.card-->
              </div>
              <div class="four columns">
                      <div class="card">
                          <img src="../assets/producto8.jpg" height="150px" class="imagen-curso u-full-width">
                          <div class="info-card">
                              <h4>Sopa de Arroz</h4>
                              <p>Sopas</p>
                              <img src="../assets/estrellas.png">
                              <p class="precio">$3500  <span class="u-pull-right ">$2600</span></p>
                              <a href="#" class="u-full-width button-primary button input agregar-carrito" data-id="8">Agregar Al Carrito</a>
                          </div>
                      </div> <!--.card-->
              </div>
              <div class="four columns">
                      <div class="card">
                          <img src="../assets/producto1.png" height="150px" class="imagen-curso u-full-width">
                          <div class="info-card">
                              <h4>Sopa de pastas</h4>
                              <p>Sopas</p>
                              <img src="../assets/estrellas.png">
                              <p class="precio">$3500  <span class="u-pull-right ">$2600</span></p>
                              <a href="#" class="u-full-width button-primary button input agregar-carrito" data-id="9">Agregar Al Carrito</a>
                          </div>
                      </div> <!--.card-->
              </div>
          </div> <!--.row-->
          <h1 id="seccion" class="seccion">BEBIDAS</h1>
          <div class="row">
                  <div class="four columns">
                      <div class="card">
                          <img src="../assets/producto2.png" height="150px" class="imagen-curso u-full-width">
                          <div class="info-card">
                              <h4>Café</h4>
                              <p>Bebidas</p>
                              <img src="../assets/estrellas.png">
                              <p class="precio">$2500  <span class="u-pull-right ">$1500</span></p>
                              <a href="#" class="u-full-width button-primary button input agregar-carrito" data-id="10">Agregar Al Carrito</a>
                          </div>
                      </div> <!--.card-->
                  </div>
                  <div class="four columns">
                          <div class="card">
                              <img src="../assets/producto3.jpg" height="150px" class="imagen-curso u-full-width">
                              <div class="info-card">
                                  <h4>Coca-Cola Personal(350ml)</h4>
                                  <p>Bebidas</p>
                                  <img src="../assets/estrellas.png">
                                  <p class="precio">$3000  <span class="u-pull-right ">$2500</span></p>
                                  <a href="#" class="u-full-width button-primary button input agregar-carrito" data-id="11">Agregar Al Carrito</a>
                              </div>
                          </div> <!--.card-->
                  </div>
                  <div class="four columns">
                          <div class="card">
                              <img src="../assets/producto4.jpg" height="150px" class="imagen-curso u-full-width">
                              <div class="info-card">
                                  <h4>Blue Lagoon(Laguna Azul)</h4>
                                  <p>Bebidas</p>
                                  <img src="../assets/estrellas.png">
                                  <p class="precio">$20000  <span class="u-pull-right ">$14000</span></p>
                                  <a href="#" class="u-full-width button-primary button input agregar-carrito" data-id="12">Agregar Al Carrito</a>
                              </div>
                          </div> <!--.card-->
                  </div>
              </div> <!--.row-->
      </div>
<hr>
     
          <div class="contenedor">
              <div class="nav-footer">
                  <h1 class="titulo-footer">footer</h1>
                  <nav class="menu">
                      <a>RESTAURANTE EL BUEN SABOR</a>
                      <a>restauranteelbuensabor@gnail.com</a>
                      <a>Doña Elisabeth y Don Israel</a>
                      <a>(607)6313514</a>
                      <a>calle 12# 11-08</a>
                  </nav>
              </div>
          </div>
  </v-app>
</template>

<script>
export default{
  data(){
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

const title = document.querySelector('.contenido-hero h2')
title.textContent = 'Muebles Casa Vieja'
title.style.fontFamily = 'Arial Black'
title.style.textAlign = 'center'
title.style.fontSize = '100px'

const subtitle = document.querySelector('#encabezado')
subtitle.textContent = '¡Muebles Para El Hogar!'
subtitle.style.fontFamily = 'Arial Black'

}
}
</script>

<style scoped>
h1 {
  text-align: center;
}
.container:after,
.row:after,
.u-cf {
content: "";
display: table;
clear: both; }


.container {
  position: relative;
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  padding: 0 20px;
  box-sizing: border-box;
 }
.column,
.columns {
  width: 100%;
  float: left;
  box-sizing: border-box; }

/* For devices larger than 400px */
@media (min-width: 400px) {
  .container {
    width: 85%;
    padding: 0; }
}

/* For devices larger than 550px */
@media (min-width: 550px) {
  .container {
    width: 80%; }
  .column,
  .columns {
    margin-left: 4%; }
  .column:first-child,
  .columns:first-child {
    margin-left: 0; }

  .one.column,
  .one.columns                    { width: 4.66666666667%; }
  .two.columns                    { width: 13.3333333333%; }
  .three.columns                  { width: 22%;            }
  .four.columns                   { width: 30.6666666667%; }
  .five.columns                   { width: 39.3333333333%; }
  .six.columns                    { width: 48%;            }
  .seven.columns                  { width: 56.6666666667%; }
  .eight.columns                  { width: 65.3333333333%; }
  .nine.columns                   { width: 74.0%;          }
  .ten.columns                    { width: 82.6666666667%; }
  .eleven.columns                 { width: 91.3333333333%; }
  .twelve.columns                 { width: 100%; margin-left: 0; }

  .one-third.column               { width: 30.6666666667%; }
  .two-thirds.column              { width: 65.3333333333%; }

  .one-half.column                { width: 48%; }

  /* Offsets */
  .offset-by-one.column,
  .offset-by-one.columns          { margin-left: 8.66666666667%; }
  .offset-by-two.column,
  .offset-by-two.columns          { margin-left: 17.3333333333%; }
  .offset-by-three.column,
  .offset-by-three.columns        { margin-left: 26%;            }
  .offset-by-four.column,
  .offset-by-four.columns         { margin-left: 34.6666666667%; }
  .offset-by-five.column,
  .offset-by-five.columns         { margin-left: 43.3333333333%; }
  .offset-by-six.column,
  .offset-by-six.columns          { margin-left: 52%;            }
  .offset-by-seven.column,
  .offset-by-seven.columns        { margin-left: 60.6666666667%; }
  .offset-by-eight.column,
  .offset-by-eight.columns        { margin-left: 69.3333333333%; }
  .offset-by-nine.column,
  .offset-by-nine.columns         { margin-left: 78.0%;          }
  .offset-by-ten.column,
  .offset-by-ten.columns          { margin-left: 86.6666666667%; }
  .offset-by-eleven.column,
  .offset-by-eleven.columns       { margin-left: 95.3333333333%; }

  .offset-by-one-third.column,
  .offset-by-one-third.columns    { margin-left: 34.6666666667%; }
  .offset-by-two-thirds.column,
  .offset-by-two-thirds.columns   { margin-left: 69.3333333333%; }

  .offset-by-one-half.column,
  .offset-by-one-half.columns     { margin-left: 52%; }

}
.u-full-width {
  color: #222;
  width: 100%;
  box-sizing: border-box; }
.u-max-full-width {
  max-width: 100%;
  box-sizing: border-box; }
.u-pull-right {
  float: right; }
.u-pull-left {
  float: left; }

  @media (min-width: 550px) {
      .card {
          text-align: left;
      }
  }

  #seccion{
      text-decoration: underline;
      font-weight: bold;
      font-family: italic;
      font-size: 20px;
      margin: 30px 0;
  }
#lista-cursos .row {
  margin-bottom:20px;
}

.card{
  transition: transform .5s;
}
.card:hover{
  transform: scale(1.1);
}
.card {
  text-align: center;
  border: 1px solid #e1e1e1;
  background: white;
}

@media (min-width: 550px) {
  .card {
      text-align: left;
  }
}


.boton {
  background-color: var(--claro);
  display: block;
  text-align: center;
  padding: 1rem;
  border-radius: 10px;
  color: var(--obscuro);
  font-size: 1.2rem;
  text-decoration: none;
  font-weight: 400;
  -webkit-box-shadow: 0px 14px 43px -21px rgba(0,0,0,1);
  -moz-box-shadow: 0px 14px 43px -21px rgba(0,0,0,1);
  box-shadow: 0px 14px 43px -21px rgba(0,0,0,1);
  transition: all .3s ease-in-out;
}
.boton:hover {
  background-color: var(--primario);
  color: var(--claro);
}

.info-card  {
  padding: 10px 20px;
  background-color: rgb(245, 243, 243);
}

.info-card p, 

.card h4 {
  margin-bottom: 5px;
}
.info-card .precio {
  text-decoration: line-through;
  font-size: 18px;
  margin-top: 10px;
}
.info-card .precio span {
  font-weight: 700;
  font-size: 22px;
}

/** Footer */

footer,
nav,
menu{
  display: block;
}
.footer {
  background-color: var(--claro);
  border-top: 1px solid var(--obscuro);
  position: fixed;
  bottom:-100%;
  transition: all 0.25s ease-in;
  width: 100%;
  padding: 20px 0 0 0;
  background: #b57c00; /* Old browsers */
  background: -moz-linear-gradient(left, #b57c00 0%, #f7d547 100%); /* FF3.6-15 */
  background: -webkit-linear-gradient(left, #b57c00 0%,#f7d547 100%); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(to right, #b57c00 0%,#f7d547 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#b57c00', endColorstr='#f7d547',GradientType=1 ); /* IE6-9 */  
  -webkit-box-shadow: 0px -18px 36px -16px rgba(0,0,0,0.52);
  -moz-box-shadow: 0px -18px 36px -16px rgba(0,0,0,0.52);
  box-shadow: 0px -18px 36px -16px rgba(0,0,0,0.52);
  padding: 3rem 0;
}

.footer .contenedor {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr) );
  grid-gap: 1rem;
}
.footer .nav-footer {
  padding: 1rem;
}
.footer .nav-footer h3 {
  font-size: 1.2rem;
}
.footer .menu a{
  background-color: #222;
  text-decoration: none;
  display: block;
  padding-top: .5rem;
  margin: 10px;
}

a{
  color: black; 
  text-align: center;
}
a:hover {
  color: white;  
}

.titulo-footer{
  font-size: 100%;
  font-weight: bolder;
  text-align: center;
}

h1 {
  font-size: 2em;
  margin: 0.67em 0;
}

h1 {
  text-align: center;
}
.imagen-curso u-full-width{
  width: auto;
  height: auto;
  max-width: 300px;
  max-height: 300px;
}
</style> 
<template>
    <v-app>
       <head>
        <link rel="stylesheet" href="../pages/custom.css">
        <link rel="stylesheet" href="../pages/normalize.css">
        <link rel="stylesheet" href="../pages/skeleton.css">
      </head>
        <header id="header" class="header">
          <div class="container">
              <div class="row">
                  <div class="four columns">
  
                  </div>
                  <div class="two columns u-pull-right">
                      <ul>
                          <li class="submenu">
                                  <img src="../assets/cart.png" id="img-carrito">
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
          <h1>Productos</h1>
          <div class="barra">
            <div class="container">
                <div class="row">
                        <div class="four columns icono icono1">
                            <p>Más de 150 diseños<br>
                            Explora  los diseños más recientes</p>
                        </div>
                        <div class="four columns icono icono2">
                            <p>Muebles diseñados a la medida<br>
                            Innovamos constantemente</p>
                        </div>
                        <div class="four columns icono icono3">
                            <p>Entregas inmediatas<br>
                            En más de 33 municipios</p>
                        </div>
                </div>
            </div>
    
        </div>
  
  
        <div id="lista-cursos" class="container">
          <h1 id="encabezado" class="encabezado">¡Trabajamos Para Darte Lo Mejor!</h1>
          <div class="row">
              <div class="four columns">
                  <div class="card">
                      <img src="../assets/producto1.png" class="imagen-curso u-full-width">
                      <div class="info-card">
                          <h4>Cama doble en madera</h4>
                          <p>Mireya Anaya</p>
                          <img src="../assets/estrellas.png">
                          <p class="precio">$1.000.000  <span class="u-pull-right ">$889990</span></p>
                          <a href="#" class="u-full-width button-primary button input agregar-carrito" data-id="1">Agregar Al Carrito</a>
                      </div>
                  </div> <!--.card-->
              </div>
  
              <div class="four columns">
                      <div class="card">
                          <img src="../assets/producto2.png"  class="imagen-curso u-full-width">
                          <div class="info-card">
                              <h4>Sofá Clásico Beige</h4>
                              <p>Mireya Anaya</p>
                              <img src="../assets/estrellas.png">
                              <p class="precio">$500.000  <span class="u-pull-right ">$449990</span></p>
                              <a href="#" class="u-full-width button-primary button input agregar-carrito" data-id="2">Agregar Al Carrito</a>
                          </div>
                      </div>
              </div>
  
              <div class="four columns">
                      <div class="card">
                          <img src="../assets/producto3.jpg" class="imagen-curso u-full-width">
                          <div class="info-card">
                              <h4>Bifé Clásico Color Café</h4>
                              <p>Juan Pedro</p>
                              <img src="../assets/estrellas.png">
                              <p class="precio">$500.000  <span class="u-pull-right ">$399990</span></p>
                              <a href="#" class="u-full-width button-primary button input agregar-carrito" data-id="3">Agregar Al Carrito</a>
                          </div>
                      </div> <!--.card-->
              </div>
  
          </div> <!--.row-->
          <div class="row">
              <div class="four columns">
                  <div class="card">
                      <img src="../assets/producto4.jpg" class="imagen-curso u-full-width">
                      <div class="info-card">
                          <h4>Ventana Café en Madera</h4>
                          <p>Mireya Anaya</p>
                          <img src="../assets/estrellas.png">
                          <p class="precio">$289.990  <span class="u-pull-right ">$239000</span></p>
                          <a href="#" class="u-full-width button-primary button input agregar-carrito" data-id="4">Agregar Al Carrito</a>
                      </div>
                  </div> <!--.card-->
              </div>
              <div class="four columns">
                      <div class="card">
                          <img src="../assets/producto5.jpg" class="imagen-curso u-full-width">
                          <div class="info-card">
                              <h4>Sofá Moderno Color Beige</h4>
                              <p>Mireya Anaya</p>
                              <img src="../assets/estrellas.png">
                              <p class="precio">$2.499.990  <span class="u-pull-right ">$2000000</span></p>
                              <a href="#" class="u-full-width button-primary button input agregar-carrito" data-id="5">Agregar Al Carrito</a>
                          </div>
                      </div> <!--.card-->
              </div>
              <div class="four columns">
                      <div class="card">
                          <img src="../assets/producto6.jpg" class="imagen-curso u-full-width">
                          <div class="info-card">
                              <h4>Comedor Para 8 Personas</h4>
                              <p>Mireya Anaya</p>
                              <img src="../assets/estrellas.png">
                              <p class="precio">$1.200.000  <span class="u-pull-right ">$979900</span></p>
                              <a href="#" class="u-full-width button-primary button input agregar-carrito" data-id="6">Agregar Al Carrito</a>
                          </div>
                      </div> <!--.card-->
              </div>
          </div> <!--.row-->
          <div class="row">
              <div class="four columns">
                  <div class="card">
                      <img src="../assets/producto7.jpg" class="imagen-curso u-full-width">
                      <div class="info-card">
                          <h4>Ventana Con Puertas en Madera</h4>
                          <p>Mireya Anaya</p>
                          <img src="../assets/estrellas.png">
                          <p class="precio">$450.000 <span class="u-pull-right ">$375900</span></p>
                          <a href="#" class="u-full-width button-primary button input agregar-carrito" data-id="7">Agregar Al Carrito</a>
                      </div>
                  </div> <!--.card-->
              </div>
              <div class="four columns">
                      <div class="card">
                          <img src="../assets/producto8.jpg" class="imagen-curso u-full-width">
                          <div class="info-card">
                              <h4>Combo Silla-Espejo</h4>
                              <p>Mireya Anaya</p>
                              <img src="../assets/estrellas.png">
                              <p class="precio">$767.800 <span class="u-pull-right ">$720150</span></p>
                              <a href="#" class="u-full-width button-primary button input agregar-carrito" data-id="8">Agregar Al Carrito</a>
                          </div>
                      </div> <!--.card-->
              </div>
              <div class="four columns">
                      <div class="card">
                          <img src="../assets/producto1.png" class="imagen-curso u-full-width">
                          <div class="info-card">
                              <h4>Cama Doble en Madera</h4>
                              <p>Mireya Anaya</p>
                              <img src="../assets/estrellas.png">
                              <p class="precio">$1.000.000  <span class="u-pull-right ">$889990</span></p>
                              <a href="#" class="u-full-width button-primary button input agregar-carrito" data-id="9">Agregar Al Carrito</a>
                          </div>
                      </div> <!--.card-->
              </div>
          </div> <!--.row-->
          <div class="row">
                  <div class="four columns">
                      <div class="card">
                          <img src="../assets/abajo1.jpg" class="imagen-curso u-full-width">
                          <div class="info-card">
                              <h4>Muebles Para Sala</h4>
                              <p>Muebles Casa Vieja</p>
                             
                              <p class="precio">  <span class="u-pull-right "></span></p>
                              <a href="#" class="u-full-width button-primary button input agregar-carrito" data-id="10">Ver más</a>
                          </div>
                      </div> <!--.card-->
                  </div>
                  <div class="four columns">
                          <div class="card">
                              <img src="../assets/abajo3.jpg" class="imagen-curso u-full-width">
                              <div class="info-card">
                                  <h4>Muebles para la Terraza</h4>
                                  <p>Muebles Casa Vieja</p>
                                 
                                  <p class="precio">  <span class="u-pull-right "></span></p>
                                  <a href="#" class="u-full-width button-primary button input agregar-carrito" data-id="11">Ver más</a>
                              </div>
                          </div> <!--.card-->
                  </div>
                  <div class="four columns">
                          <div class="card">
                              <img src="../assets/abajo2.jpg" class="imagen-curso u-full-width">
                              <div class="info-card">
                                  <h4>Muebles de Comedor</h4>
                                  <p>Muebles Casa Vieja</p>
                                 
                                  <p class="precio">  <span class="u-pull-right "></span></p>
                                  <a href="#" class="u-full-width button-primary button input agregar-carrito" data-id="12">Ver más</a>
                              </div>
                          </div> <!--.card-->
                  </div>
              </div> <!--.row-->
      </div>  
  
      <footer id="footer" class="footer">
          <div class="container">
              <div class="row">
                      <div class="four columns">
                              <nav id="principal" class="menu">
                                  <a class="enlace" href="#">Para tu Negocio</a>
                                  <a class="enlace" href="#">Conviertete en Instructor</a>
                                  <a class="enlace" href="#">Aplicaciones Móviles</a>
                                  <a class="enlace" href="#">Soporte</a>
                                  <a class="enlace" href="#">Temas</a>
                              </nav>
                      </div>
                      <div class="four columns">
                              <nav id="secundaria" class="menu">
                                  <a class="enlace" href="#">¿Quienes Somos?</a>
                                  <a class="enlace" href="#">Empleo</a>
                                  <a class="enlace" href="#">Blog</a>
                              </nav>
                      </div>
              </div>
          </div>
      </footer>
    </v-app>
  </template>

  
  <script>
  export default{
    
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
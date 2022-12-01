<template>
  <v-card>
    <MenuOne/>
  <v-app> 
    <router-view/>
  </v-app>
  <head>
    <meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Untitled</title>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css">
<link rel="stylesheet" href="assets/css/style.css">
</head>

<body>
    <div class="footer-clean">
        <footer>
            <div class="container">
                <div class="row-justify-content-center">
                  <!--   <div class="col-sm-4 col-md-3 item">
                        <h3>Servicios</h3>
                        <ul>
                          <li><a href="#"></a>Página oficial de la empresa</li>
                            <li><a href="#">material de alta calidad</a></li>
                            <li><a href="#">pregunta por nosotros</a></li>
                        </ul>
                    </div>
                    <div class="col-sm-4 col-md-3 item">
                        <h3>About</h3>
                        <ul>
                            <li><a href="#">Company</a></li>
                            <li><a href="#">Team</a></li>
                            <li><a href="#">Legacy</a></li>
                        </ul>
                    </div> -->
                    
            <div class="ubicacion"><img src="./assets/ubicacion.png" alt="ubicacion">
             <p>  <a class="texto" target="_blank" href="https://www.google.com/maps/place/Muebles+Casa+Vieja/@7.0403565,-73.0757384,16.5z/data=!4m5!3m4!1s0x8e6841533dcd8c53:0x8ca53026b7345757!8m2!3d7.040578!4d-73.07572?hl=es">Visítanos</a></p>
            </div>
            
            <div class="col-sm-4-col-md-3-item">
                             
              <h3>Dirección</h3>
              <ul>
                  <li><a href="#">Km 2, Via Floridablanca Piedecuesta, Autopista, Floridablanca, Santander</a></li>
                  <li><a href="#">Contáctanos: 3174816178 </a></li>
                  <li><a href="#">Mireya Anaya Suarez</a></li>
                 
              </ul>
          </div>
          <div class="col-lg-3 item social">
            <!-- <a href="www.facebook.com"><i class="icon ion-social-facebook"></i></a> -->
            <a target="_blank" class="icon ion-social-facebook" href="https://www.facebook.com/"></a>
               <!--  <a href="#"><i class="icon ion-social-twitter"></i></a>           
                     <a target="_blank" class="icon ion-social-twitter" href="https://www.twitter.com/"></a>
                     <a href="#"><i class="icon ion-social-snapchat"></i></a>  
                     <a target="_blank" class="icon ion-social-snapchat" href="https://www.snapchat.com/"></a> 
                     <a href="#"><i class="icon ion-social-instagram"></i></a> -->
                <a target="_blank" class="icon ion-social-instagram" href="https://www.instagram.com/mueblescasavieja.col/"></a>
            

              <p class="copyright">REDES OFICIALES DE CASA VIEJA</p>
            
             </div>
          </div>
         </div>
       </footer>
      </div>
</body>
</v-card>
</template>

<script>
import MenuOne from './components/MenuOne.vue'
export default {
  name: 'App',

  components: {
    MenuOne
    
},

  data: () => ({
    //
  }),
};
</script>

<style scoped>
.footer .contenedor {
  display: flex;
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
.footer-clean {
  padding:0px ;
  background-color:rgba(168, 64, 29, 0.507);
  color:#4b4c4d;
}

.footer-clean h3 {
  margin-top:0;
  margin-bottom:12px;
  font-weight:bold;
  font-size:16px;
}

.footer-clean ul {
  padding:0;
  list-style:none;
  line-height:1.6;
  font-size:14px;
  margin-bottom:0;
}

.footer-clean ul a {
  color:inherit;
  text-decoration:none;
  opacity:0.8;
}

.footer-clean ul a:hover {
  opacity:1;
}

.footer-clean .item.social {
  text-align:right;
}

@media (max-width:767px) {
  .footer-clean .item {
    text-align:center;
    padding-bottom:20px;
  }
}

@media (max-width: 768px) {
  .footer-clean .item.social {
    text-align:center;
  }
}

.footer-clean .item.social > a {
  font-size:24px;
  width:40px;
  height:40px;
  line-height:40px;
  display:inline-block;
  text-align:center;
  border-radius:50%;
  border:1px solid #ccc;
  margin-left:10px;
  margin-top:22px;
  color:inherit;
  opacity:0.75;
}

.footer-clean .item.social > a:hover {
  opacity:0.9;
}

@media (max-width:991px) {
  .footer-clean .item.social > a {
    margin-top:40px;
  }
}

@media (max-width:767px) {
  .footer-clean .item.social > a {
    margin-top:10px;
  }
}

.footer-clean .copyright {
  margin-top:14px;
  margin-bottom:0;
  font-size:13px;
  opacity:0.6;
}
.ubicacion{
width:230px;
height:40px;
text-align:center;
position:relative;
display: inline-block;
 left: -40%;
 right: 1%;
 top: 30px;
 

}

.texto{
color: #222;
}
.col-lg-3{
text-align:left;
display: inline-block;
left: -10%;
right: 60%;
top: -100px;

}
.col-sm-4-col-md-3-item{
text-align:initial;
position:relative;
display:inline-block;
left: 30%;
right: 20%;
top: -250px;

}
.row-justify-content-center{
text-align: center;
}
</style>


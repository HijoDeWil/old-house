<template>
    <v-card
    class="mx-auto overflow-hidden"
    height="400"
  >
    <v-app-bar
      color="primary"
      dark
    >
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title>Bienvenido</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="secundary"
        >
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item :to="'/Compras'">
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>compras</v-list-item-title>
          </v-list-item>
            <v-list-item :to="'/Ventas'">
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>ventas</v-list-item-title>
        </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <body bgcolor="#EAD1C2">
      <div>
          <img src="../assets/logomuebles.jpg" height="90px" border="2.5">
          <h1>Muebles Casa Vieja</h1>
          <header>
              <nav>
                   <ul class="navegacion">
                      <div class="contenedor">
                      <div class="barra">
                          <a href="#">Inicio</a>
                          <a href="#">Salas</a>
                          <a href="#">Comedores</a>
                          <a href="#">Escritorios</a>
                          <a href="#">Contactanos</a>
                      </div>
                      </div>
                  </ul>
              </nav>
          </header>
          <div class="field" id="searchform">
            <input type="text" id="searchterm" placeholder="Muebles, Camas, Recuadros..." />
            <button type="button" id="search">Buscar</button>
          </div>
      </div>
  </body>
  </v-card>
  
</template>
<script>
export default {
    data: () => ({
      drawer: false,
      group: null,
    }),
  }
</script>

<style>
v-app-bar{
  background: rgb(155, 100, 58);
  width: 100%;
  z-index: index 100%;
  position:absolute;
  height: 23px;
  margin-right: 5px;
}
header {
  background: rgb(155, 100, 58);
  width: 100%;
  z-index: index 100%;
  position:absolute;
  height: 23px;
  margin-right: 5px;
}

nav {
  float: center;
}

nav ul {
  list-style: none;
  overflow:hidden; 
}

nav ul a {
  
  padding: 20px;
  color: #fff;
  text-decoration:none;
  margin-right: 3px;
}
a:hover {
  background: #513111;
  border-radius: 10px;
}
@import url(http://fonts.googleapis.com/css?family=Montserrat+Alternates);

* {
  margin:2px;
  padding:1px;
  font:12pt;
}

body {
background-color:#e7bd97;
}

.field {

display:flex;
position:relative;
margin:2em auto;
width:70%;
flex-direction:row;
box-shadow:
 1px 1px 0 rgb(157, 96, 26),
 2px 2px 0 rgb(157, 96, 26),
 3px 3px 0 rgb(157, 96, 26),
 4px 4px 0 rgb(157, 96, 26),
 5px 5px 0 rgb(157, 96, 26),
 6px 6px 0 rgb(157, 96, 26),
 7px 7px 0 rgb(157, 96, 26)
;
}

.field>input[type=text],
.field>button {
display:block;
font:1.2em 'Montserrat Alternates';

}

.field>input[type=text] {
flex:1;
padding:0.6em;
border:0.2em solid rgb(157, 96, 26),
}

.field>button {
padding:0.6em 0.8em;
background-color:rgb(157, 96, 26);
color:white;
border:none;
cursor: pointer;
}
h1{
font-family: Arial Black;
font-size: 45px;
text-shadow: 1px 1px black;
color:saddlebrown;
}
a{
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
color: #fff;
font-size: 20px;

}


img{
height: 100px;
margin-top: 20px;
border-radius: 5px;
}

</style>
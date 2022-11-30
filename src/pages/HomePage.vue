<template>
  <div>
      <head>
          <link rel="stylesheet" href="style.css">
      </head>
      
      <body>
          <h1>Muebles de diferentes precios</h1>
          <div class="image-slider">
              <div class="image-slider-track">
                  <div class="slide">
                      <img src="../assets/producto1.png">
                  </div>
                  <div class="slide">
                      <img src="../assets/producto2.png">
                  </div>
                  <div class="slide">
                      <img src="../assets/producto3.jpg">
                  </div>
      
                  <div class="slide">
                      <img src="../assets/producto4.jpg">
                  </div>
                  <div class="slide">
                      <img src="../assets/producto5.jpg">
                  </div>
                  <div class="slide">
                      <img src="../assets/producto6.jpg">
                  </div>
      
                  <div class="slide">
                      <img src="../assets/producto7.jpg">
                  </div>
                  <div class="slide">
                      <img src="../assets/producto8.jpg">
                  </div>
                  <div class="slide">
                      <img src="../assets/mueble1.jpg">
                  </div>
      
                  <div class="slide">
                      <img src="../assets/mueble2.jpg">
                  </div>
                  <div class="slide">
                      <img src="../assets/mueble3.jpg">
                  </div>
                  <div class="slide">
                      <img src="../assets/closet7.jpg">
                  </div>
      
                  
              </div>
          </div>
      </body>

  </div>


</template>



<script>
export default {
data: () => ({
  loading: false,
  selection: 1,
}),

methods: {
  reserve () {
    this.loading = true

    setTimeout(() => (this.loading = false), 2000)
  },
},
}
</script>

<style scoped>

h1{
  color: rgb(255, 255, 255);
  background-color: rgb(231, 202, 164);
  text-shadow: 5cm;

}

body{
  min-height: 2cm;
  display: grid;
  place-items: center;
}

.slide{
  height: 150px;
  width: 200px;
  display: grid;
  place-items: center;
  padding: 15px;
  perspective: 100px;
}

img{
  height: 7cm;
  width: 5cm;
  transition: transform 1s;
}
.image-slider{
  display: grid;
  place-items: center;
  position: relative;
  overflow: hidden;
  height: 554px;
  width: 83%;
}
.image-slider-track{
  display: flex;
  width:calc(200px*12);
  animation: play 30s linear infinite;
}

@keyframes play{
  0%{
      transform: translateX(0);
  }

  100%{
      transform: translateX(calc(-250px*6));
  }
}

.image-slider::before,
.image-slider::after{
  background: linear-gradient(to right,rgba(255,255,255,1)0%,rgba(255,255,255,0)100%);
  content: '';
  height: 100%;
  width: 15%;
  z-index: 2;
  position: absolute;

  }

  .image-slider::before{
      left:0;
      top:0;
  }

  .image-slider::after{
      right:0;
      top:0;
      background: linear-gradient(to left,rgba(255,255,255,1)0%,rgba(255,255,255,0)100%);

  }

  img:hover{
      transform: translateZ(20px);
  }

</style>

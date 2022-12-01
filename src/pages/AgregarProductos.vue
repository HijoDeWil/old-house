<template>
    <div>
      <h3>A&ntilde;adir productos</h3>
  
      <div class="card" style="width: 35rem">
        <div class="card-body">
          <h5 class="card-title">Datos Producto</h5>
  
          
          <div class="form-group">
            <label for="formGroupExampleInput">Codigo</label>
            <input
              v-model="codigo"
              type="text"
              class="form-control"
              placeholder="Codigo producto"
            />
          </div>
          <div class="form-group">
            <label for="formGroupExampleInput">Nombre</label>
            <input
              v-model="nombre"
              type="text"
              class="form-control"
              placeholder="Ingrese Nombre del Producto"
            />
          </div>
          <div class="form-group">
            <!-- <label for="formGroupExampleInput2">E-mail</label>
            <input
              v-model="email"
              type="text"
              class="form-control"
              placeholder="aagudelo@gmail.com"
            /> -->
          </div>
          <div class="form-group">
            <label for="formGroupExampleInput2">Precio</label>
            <input
              v-model="precio"
              type="text"
              class="form-control"
              placeholder="$0000"
            />
          </div>
          <button class="btn btn-primary" @click="addPersona">
            A&ntilde;adir
          </button>
        </div>
      </div>
    </div>
  </template>
  
  
  <script>
  /*eslint-disable*/
  import {ref} from 'vue'
  import {useStore} from 'vuex'
  import {useRouter} from 'vue-router'
  import axios from 'axios'
  export default {
    setup(){
    const store = useStore()
    const router = useRouter()
      const nombre = ref("")
      const codigo = ref("")
      // const email = ref("")
      const precio = ref("")
      
      function addPersona(){
        if(nombre.value != '' && codigo.value != "" && precio.value != ""){
          const persona = {
            nombre:nombre.value,
            codigo:codigo.value,
            // email:email.value,
            precio:precio.value
          }
          /* store.dispatch("addPersona", persona);
          router.push('/print') */
          axios.post('https://casavieja-7b8f4-default-rtdb.firebaseio.com/.json',persona)
          .then(res => console.log(res))
          .catch(error => console.log(error))
        }
      }
  
      return{nombre,codigo, precio, addPersona}
    }
    // data() {
    //   return {
    //     nombre: "",
    //     email: "",
    //     aporte: "",
    //   };
    // },
    // methods: {
    //   addPersona() {
    //     if (this.nombre != "" && this.email != "") {
    //       const persona = {
    //         nombre: this.nombre,
    //         email: this.email,
    //         aporte: this.aporte,
    //       };
    //       this.$store.dispatch("addPersona", persona);
    //       this.$router.push('/print')
    //     }
    //   },
    // },
  };
  </script>
  
  <style scoped>
  h3{
    display: flex;
    text-align: center;
    list-style: none;
    padding: 10px;
    margin: 100px 520px;
  }
  .carduno{
    text-align: center;
    padding: 180px;
    margin: 1px 700px;
  }
  .card-bodyuno{
    position: absolute;
    width: 340px;
    height: 300px;
    top: 35%;
    left: 50%;
    margin-top: 0px;
    margin-left: -150px;;
    border: 5px solid #ced4da;
  }
  .button,
  button,
  input[type="submit"],
  input[type="reset"],
  input[type="button"] {
    display: inline-block;
    height: 38px;
    padding: 0 30px;
    color: #e37719;
    font-size: 11px;
    font-weight: 600;
    line-height: 38px;
    letter-spacing: .1rem;
    text-decoration: none;
    white-space: nowrap;
    background-color: transparent;
    border-radius: 4px;
    cursor: pointer;
    box-sizing: border-box;
  }
body{
    font-size: 1.5rem;
    line-height: 1.7;
    font-weight: 625;
    font-family: "Raleway","HelveticaNeue","Helvetica neue", Helvetica, Arial, sans-serif;
    color: #222;
}
  </style>
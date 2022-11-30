<template>
  <v-app>
  <div>
      <h3>A&ntilde;adir invitados</h3>
  
      <div class="card" style="width: 35rem">
        <div class="card-body">
          <h5 class="card-title">Datos Invitado</h5>
  
          <div class="form-group">
            <label for="formGroupExampleInput">Nombre</label>
            <input
              v-model="nombre"
              type="text"
              class="form-control"
              placeholder="Armando Agudelo"
            />
          </div>
          <div class="form-group">
            <label for="formGroupExampleInput2">E-mail</label>
            <input
              v-model="email"
              type="text"
              class="form-control"
              placeholder="aagudelo@elemail.com"
            />
          </div>
          <div class="form-group">
            <label for="formGroupExampleInput2">Aporta</label>
            <input
              v-model="aporte"
              type="text"
              class="form-control"
              placeholder="cer-ve-za ?"
            />
          </div>
          <button class="btn btn-primary" @click="addPersona">
            A&ntilde;adir
          </button>
        </div>
      </div>
    </div>
  </v-app>
</template>

<script>

</script>

<style scoped>

</style>
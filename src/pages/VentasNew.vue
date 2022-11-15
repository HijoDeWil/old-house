<template>
<v-app>
    <div>
        <h1>Soy ventas</h1>
        <h1>mi nombre es {{valornombre}}</h1>
    </div>
</v-app>

</template>
<script>
 export default{
    data(){
        return {
            valornombre:this.$store.state.nombre
        }
    } ,
    computed:{
        valorstore(){
            return this.$store.state
        }
    }
    }
</script>

<style>
</style>
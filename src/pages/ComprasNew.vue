<template>
    <v-app>
        <div>
            <h1>Soy compras</h1>
            <h1> Numero de usuario:{{valornumero}}</h1>
        </div>
    </v-app>
    
    </template>
    <script>
    export default{
    data(){
        return {
            valornumero:this.$store.state.numero
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
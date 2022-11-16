
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
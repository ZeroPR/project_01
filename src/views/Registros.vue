<template>
    <v-container fluid>
        <tabla-registro :actualizarRegistro="actualizarRegistro" :facturas="facturas"></tabla-registro>
    </v-container>
</template>
<script>
import TablaRegistro from '@/components/TablaRegistro.vue'
export default {
    data(){return {
        facturas: []
    }},
    beforeCreate(){
        if(!this.$session.exists()){
            this.$router.push('/')
        }
    },
    mounted(){
        this.obtenerFacturas()
    },
    methods: {
        obtenerFacturas(){
            this.$axios.get('http://localhost:5000/registros/obtener')
            .then(res => {
                this.facturas = res.data
            })
            .catch(err => {
                alert(err.message, 'ERROR')
            })
        },

        actualizarRegistro(data){
            this.facturas = data
        }
    },
    components: {
        TablaRegistro
    }
}
</script>

<template>
    <v-layout row wrap>
        <v-flex xs4>
            <v-card color="blue">
                <v-layout align-center justify-center>
                    <v-flex xs5>
                        <v-card-title primary-title>
                            <div class="headline text-xs-center">{{facturas_total}}</div>
                        </v-card-title>
                    </v-flex>
                    <v-flex xs7 color="red">
                        <v-card-title primary-title>
                            <div>
                                <div class="headline">Facturas</div>
                                <div>Total de Facturas</div>
                                <div>(2018)</div>
                            </div>
                        </v-card-title>
                    </v-flex>
                </v-layout>
            </v-card>
        </v-flex>
        <v-flex xs4>
            <v-card color="green">
                <v-layout align-center justify-center>
                    <v-flex xs5 color="blue">
                        <v-card-title primary-title>
                            <div class="headline">{{dinero_ganado | currency}}</div>
                        </v-card-title>
                    </v-flex>
                    <v-flex xs7 color="red">
                        <v-card-title primary-title>
                            <div>
                                <div class="headline">Dinero</div>
                                <div>Dinero ganado</div>
                                <div>(2018)</div>
                            </div>
                        </v-card-title>
                    </v-flex>
                </v-layout>
            </v-card>
        </v-flex>
        <v-flex xs4>
            <v-card color="primary">
                <v-layout align-center justify-center>
                    <v-flex xs5 color="blue">
                        <v-card-title primary-title>
                            <div class="headline">{{facturas_cobradas}}</div>
                        </v-card-title>
                    </v-flex>
                    <v-flex xs7 color="red">
                        <v-card-title primary-title>
                            <div>
                                <div class="headline custom--headline" style="">Facturas Cobradas</div>
                                <div>Facturas Confirmadas</div>
                                <div>(2018)</div>
                            </div>
                        </v-card-title>
                    </v-flex>
                </v-layout>
            </v-card>
        </v-flex>
    </v-layout>
</template>
<script>
export default {
    data(){return {
        dinero_ganado: 0,
        facturas_total: 0,
        facturas_cobradas: 0,
    }},
    mounted(){
        this.obtenerData()
    },
    methods: {
        obtenerData(){
            this.$axios.get('http://localhost:5000/home_data', {headers: {
                'x-access-token': this.$session.get('token')
            }})
            .then(res => {
                this.facturas_total = res.data.count,
                this.facturas_cobradas = res.data.facturas_cobradas
                this.dinero_ganado = res.data.dinero_cobrado
            })
            .catch(err => {
                alert(err.message, 'ERROR')
            })
        }
    }
}
</script>

<style scoped>
    .custom--headline {
    }
</style>

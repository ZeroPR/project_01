<template>
    <v-flex xs12>
        <v-card light>
            <v-toolbar color="primary">
                <v-toolbar-title class="white--text">Registrar</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-tooltip bottom>
                    <v-btn 
                    slot="activator" 
                    color="secondary"
                    @click="reset"
                    depressed>Clear</v-btn>
                    <span>Limpiar el Formulario</span>
                </v-tooltip>
            </v-toolbar>
            <v-form ref='registrarForm'>
                <v-container grid-list-sm>
                    <v-layout row wrap>
                        <v-flex xs6>
                            <v-text-field
                            label="ID Factura"
                            v-model="id_factura"
                            box>
                            </v-text-field>
                        </v-flex>
                        <v-flex xs6>
                            <v-text-field
                            label="ID Orden"
                            v-model="id_orden"
                            box>
                            </v-text-field>
                        </v-flex>
                        <v-flex xs12>
                             <v-textarea
                            label="Descripcion"
                            v-model="descripcion"
                            box>
                            </v-textarea>
                        </v-flex>

                        <!-- Fechas -->
                        <v-flex xs6>
                            <fecha-input :setFecha="setFechaAjudicacion" label="Fecha Ajudicacion"></fecha-input>
                        </v-flex>
                        <v-flex xs6>
                            <fecha-input :setFecha="setFechaFacturacion" label="Fecha Facturacion"></fecha-input>
                        </v-flex>

                        <!-- Montos -->
                        <v-flex xs6 sm4 md4>
                            <v-text-field
                            label="Monto"
                            v-model="monto"
                            box
                            append-icon="fas fa-dollar-sign">
                            </v-text-field>
                        </v-flex>
                        <v-flex xs6 sm4 md4>
                            <v-text-field
                            label="IVU"
                            v-model="ivu"
                            :value="computedIvu"
                            box
                            append-icon="fas fa-dollar-sign">
                            </v-text-field>
                        </v-flex>
                        <v-flex xs6 sm4 md4>
                            <v-text-field
                            label="Monto Total"
                            v-model="monto_total"
                            box
                            append-icon="fas fa-dollar-sign">
                            </v-text-field>
                        </v-flex>

                        <!-- Checkboxes -->
                        <v-flex xs6 md6>
                            <v-checkbox
                            label="Facturado"
                            v-model="facturado"></v-checkbox>
                        </v-flex>
                        <v-flex xs6 md6>
                            <v-checkbox
                            label="Cobrado"
                            v-model="cobrado"></v-checkbox>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-form>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn 
                color="primary" 
                @click="procesar"
                :loading="loading">
                    Procesar
                    <v-icon right>fas fa-check</v-icon>
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-flex>
</template>
<script>
import FechaInput from '@/components/FechaInput.vue'
import moment from 'moment'
export default {
    data(){return {
        id_factura: '',
        id_orden: '',
        descripcion: '',
        fecha_ajudicacion: '',
        fecha_facturacion: '',
        monto: '',
        ivu: '',
        monto_total: '',
        facturado: false,
        cobrado: false,

        loading: false
    }},
    methods: {
        setFechaAjudicacion(fecha){
            this.fecha_ajudicacion = fecha
        },
        setFechaFacturacion(fecha){
            this.fecha_facturacion = fecha
        },

        procesar(){
            this.loading = true
            let data = {
                id_factura: this.id_factura,
                id_orden: this.id_orden,
                descripcion: this.descripcion,
                fecha_ajudicacion: new moment(this.fecha_ajudicacion).toISOString(),
                fecha_facturacion: new moment(this.fecha_facturacion).toISOString(),
                monto: this.monto,
                ivu: this.ivu,
                monto_total: this.monto_total,
                facturado: this.facturado,
                cobrado: this.cobrado
            }

            this.$axios.post('http://localhost:5000/registros/agregar', data, {headers: {
                'x-access-token': this.$session.get('token')
            }})
            .then(res => {
                if('message' in res.data){
                    alert(res.data.message, 'INFO')
                    this.reset()
                }
                this.loading = false
            })
            .catch(err => {
                alert(err.message, 'ERROR')
                this.loading = false
            })

            
        },

        reset(){
            this.$refs.registrarForm.reset()
        },
    },
    computed: {
        computedIvu(){
            return parseFloat(this.monto) * 0.115
        },
        computedMontoTotal(){
            return parseFloat(this.monto) + this.computedIvu
        }
    },
    watch:{
        monto(val){
            this.ivu = parseFloat(val) * 0.115
            this.monto_total = parseFloat(val) + this.ivu
        },
        fecha_ajudicacion(val){
            console.log(new moment(val).toISOString())
        },
        fecha_facturacion(val){
            console.log(new moment(val).toISOString())
        }
    },
    components:{
        FechaInput
    }
}
</script>

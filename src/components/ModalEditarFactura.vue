<template>
    <v-dialog
    v-model="dialog"
    persistent
    max-width="600px">
        <v-card light>
            <v-card-title>
                <span class="headline">Editar Factura</span>
            </v-card-title>
            <v-card-text>
                <v-form ref="editarForm">
                    <v-container grid-list-md>
                        <v-layout wrap>
                            <v-flex sm6>
                                <v-text-field v-model="factura.id_factura" label="Factura Id" required box></v-text-field>
                            </v-flex>
                            <v-flex sm6>
                                <v-text-field v-model="factura.id_orden" label="Orden Id" required box></v-text-field>
                            </v-flex>
                            <v-flex sm12>
                                <v-textarea v-model="factura.descripcion" label="Descripción" box></v-textarea>
                            </v-flex>

                            <!-- Fechas -->
                            <v-flex xs6>
                                <fecha-input :value="factura.fecha_ajudicacion" :setFecha="setFechaAjudicacion" label="Fecha Ajudicacion"></fecha-input>
                            </v-flex>
                            <v-flex xs6>
                                <fecha-input :value="factura.fecha_facturacion" :setFecha="setFechaFacturacion" label="Fecha Facturacion"></fecha-input>
                            </v-flex>

                            <!-- Montos -->
                            <v-flex xs6 sm4 md4>
                                <v-text-field
                                label="Monto"
                                v-model="factura.monto"
                                box
                                append-icon="fas fa-dollar-sign">
                                </v-text-field>
                            </v-flex>
                            <v-flex xs6 sm4 md4>
                                <v-text-field
                                label="IVU"
                                v-model="factura.ivu"
                                :value="computedIvu"
                                box
                                append-icon="fas fa-dollar-sign">
                                </v-text-field>
                            </v-flex>
                            <v-flex xs6 sm4 md4>
                                <v-text-field
                                label="Monto Total"
                                v-model="factura.monto_total"
                                box
                                append-icon="fas fa-dollar-sign">
                                </v-text-field>
                            </v-flex>

                            <!-- Checkboxes -->
                            <v-flex xs6 md6>
                                <v-checkbox
                                label="Facturado"
                                v-model="factura.facturado"></v-checkbox>
                            </v-flex>
                            <v-flex xs6 md6>
                                <v-checkbox
                                label="Cobrado"
                                v-model="factura.cobrado"></v-checkbox>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-form>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" flat @click.native="cerrar">Cerrar</v-btn>
                <v-btn color="green darken-1" flat @click.native="guardar">Guardar</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
import FechaInput from '@/components/FechaInput.vue'
import moment from 'moment'
export default {
    props: ['dialog', 'cerrar', 'facturaSeleccionada', 'actualizarDatos',
    'obtenerFacturas'],
    components:{
        FechaInput
    },
    watch:{
        facturaSeleccionada(val){
            this.factura = val
        }
    },
    data(){return {
        factura: {}
    }},
    methods:{
        guardar(){
            this.factura.fecha_ajudicacion = new moment(this.factura.fecha_ajudicacion).toISOString()
            this.factura.fecha_facturacion = new moment(this.factura.fecha_facturacion).toISOString()
            this.$axios.post(`http://localhost:5000/registros/editar/${this.factura.id_factura}`, this.factura)
            .then(res => {
                //this.actualizarDatos(res.data.data)
                console.log(res.data)
                alert(res.data.message, 'INFO')
                this.$refs.editarForm.reset()
                this.cerrar()
                this.obtenerFacturas()
            })
            .catch(err => {
                alert(err.message, 'ERROR')
            })
        },

        setFechaAjudicacion(fecha){
            this.factura.fecha_ajudicacion = fecha
        },

        setFechaFacturacion(fecha){
            this.factura.fecha_facturacion = fecha
        }
    },
}
</script>

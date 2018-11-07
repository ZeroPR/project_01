<template>
    <div>
        <v-card color="primary">
            <v-card-title>
                <span class="table-title">Registro</span>
                <v-spacer></v-spacer>
                <v-text-field
                v-model="search"
                append-icon="fas fa-search"
                label="Search"
                single-line
                hide-details
                color="secondary"
                ></v-text-field>
            </v-card-title>
            <v-data-table
                :headers="headers"
                :items="facturas"
                :search="search"
                :rows-per-page-items="rows"
                light
            >
                <template slot="items" slot-scope="props">
                <td>{{ props.item.id_factura }}</td>
                <td class="text-xs-right">{{ props.item.id_orden }}</td>
                <td class="text-xs-right">{{ props.item.descripcion }}</td>
                <td class="text-xs-right">{{ props.item.fecha_ajudicacion | fecha}}</td>
                <td class="text-xs-right">{{ props.item.fecha_facturacion | fecha}}</td>
                <td class="text-xs-right">{{ props.item.monto_total | currency}}</td>
                <td class="text-xs-right">
                    <v-checkbox
                    :input-value="props.item.facturado"
                    readonly>
                    </v-checkbox>
                </td>
                <td class="text-xs-right">
                    <v-checkbox
                    :input-value="props.item.cobrado"
                    readonly></v-checkbox>
                </td>
                <td class="justify-center layout px-0">
                    <v-btn icon
                    @click="editarFactura(props.item)">
                        <v-icon small color="orange">fas fa-pencil-alt</v-icon>
                    </v-btn>
                    <v-btn icon
                    @click="borrarFactura(props.item.id_factura)">
                        <v-icon small color="red">fas fa-trash-alt</v-icon>
                    </v-btn>
                </td>
                </template>
                <v-alert slot="no-results" :value="true" color="error" icon="warning">
                Your search for "{{ search }}" found no results.
                </v-alert>
            </v-data-table>
        </v-card>
        <modal-editar-factura 
        :dialog="dialog" 
        :cerrar="cerrarModalEditar"
        :facturaSeleccionada="facturaSeleccionada"></modal-editar-factura>
    </div>
</template>

<script>
import ModalEditarFactura from '@/components/ModalEditarFactura.vue'
export default {
    props: ['facturas', 'actualizarRegistro'],
    data(){return {
        headers: [
            {text: 'ID Factura', align: 'left', sortable: true, value: 'id_factura'},
            {text: 'ID Orden', align: 'left', sortable: true, value: 'id_orden'},
            {text: 'Descripcion', align: 'left', sortable: false, value: 'descripcion'},
            {text: 'Fecha Ajudicacion', align: 'left', sortable: true, value: 'fecha_ajudicacion'},
            {text: 'Fecha Facturacion', align: 'left', sortable: true, value: 'fecha_facturacion'},
            {text: 'Monto Total', align: 'left', sortable: true, value: 'monto_total'},
            {text: 'Facturado', align: 'left', sortable: true, value: 'facturado'},
            {text: 'Cobrado', align: 'left', sortable: true, value: 'cobrado'},
            {text: 'Opciones'}
        ],
        search: '',

        rows: [ 15, 30, 50, { "text": "$vuetify.dataIterator.rowsPerPageAll", "value": -1 } ],

        dialog: false,
        facturaSeleccionada: {}
    }},

    methods: {
        borrarFactura(id_factura){
            if(confirm(`Quieres borrar la factura ${id_factura}.`)){
                this.$axios.get(`http://localhost:5000/registros/borrar/${id_factura}`)
                .then(res => {
                    if('error' in res.data){
                        alert(res.data.error, 'ERROR')
                    }
                    else{
                        this.actualizarRegistro(res.data.data)
                        alert(res.data.message, 'INFO')
                    }
                    console.log(res.data)
                })
            }
        },

        editarFactura(factura){
            this.dialog = true
            this.facturaSeleccionada = factura
        },

        cerrarModalEditar(){
            this.dialog = false
        },

        
    },

    components:{
        ModalEditarFactura
    }
}
</script>

<style scoped>
    .table-title {
        font-size: 32px;
    }
</style>

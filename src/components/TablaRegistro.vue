<template>
    <v-card>
        <v-card-title>
            Registro
            <v-spacer></v-spacer>
            <v-text-field
            v-model="search"
            append-icon="fas fa-search"
            label="Search"
            single-line
            hide-details
            ></v-text-field>
        </v-card-title>
        <v-data-table
            :headers="headers"
            :items="facturas"
            :search="search"
            :rows-per-page-items="rows"
        >
            <template slot="items" slot-scope="props">
            <td>{{ props.item.id_factura }}</td>
            <td class="text-xs-right">{{ props.item.id_orden }}</td>
            <td class="text-xs-right">{{ props.item.descripcion }}</td>
            <td class="text-xs-right">{{ props.item.fecha_ajudicacion }}</td>
            <td class="text-xs-right">{{ props.item.fecha_facturacion }}</td>
            <td class="text-xs-right">{{ props.item.monto }}</td>
            <td class="text-xs-right">{{ props.item.ivu }}</td>
            <td class="text-xs-right">{{ props.item.monto_total }}</td>
            </template>
            <v-alert slot="no-results" :value="true" color="error" icon="warning">
            Your search for "{{ search }}" found no results.
            </v-alert>
        </v-data-table>
    </v-card>
</template>

<script>
export default {
    props: ['facturas'],
    data(){return {
        headers: [
            {text: 'ID Factura', align: 'left', sortable: true, value: 'id_factura'},
            {text: 'ID Orden', align: 'left', sortable: true, value: 'id_orden'},
            {text: 'Descripcion', align: 'left', sortable: false, value: 'descripcion'},
            {text: 'Fecha Ajudicacion', align: 'left', sortable: true, value: 'fecha_ajudicacion'},
            {text: 'Fecha Facturacion', align: 'left', sortable: true, value: 'fecha_facturacion'},
            {text: 'Monto', align: 'left', sortable: true, value: 'monto'},
            {text: 'Ivu', align: 'left', sortable: true, value: 'ivu'},
            {text: 'Monto Total', align: 'left', sortable: true, value: 'monto_total'},
        ],
        search: '',

        rows: [ 15, 30, 50, { "text": "$vuetify.dataIterator.rowsPerPageAll", "value": -1 } ]
    }}
}
</script>


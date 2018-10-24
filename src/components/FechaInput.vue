<template>
    <v-dialog
    ref="dialog"
    v-model="modal"
    :return-value.sync="date"
    persistent
    lazy
    full-width
    width="290px"
    >
        <v-text-field
            slot="activator"
            v-model="date"
            :label="label"
            prepend-icon="far fa-calendar-alt"
            readonly
            box
        ></v-text-field>
        <v-date-picker v-model="date" scrollable>
            <v-spacer></v-spacer>
            <v-btn flat color="primary" @click="modal = false">Cancel</v-btn>
            <v-btn flat color="primary" @click="$refs.dialog.save(date)">OK</v-btn>
        </v-date-picker>
    </v-dialog>
</template>
<script>
export default {
    props: ['setFecha', 'label'],
    data() {
        return {
            modal: false,
            date: ''
        }
    },
    watch:{
        date(val){
            this.setFecha(val)
        }
    }
}
</script>

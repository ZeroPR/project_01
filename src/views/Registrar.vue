<template>
    <v-scroll-y-transition>
        <v-container>
            <v-layout>
                <registrar-form></registrar-form>
            </v-layout>
        </v-container>
    </v-scroll-y-transition>
</template>
<script>
import RegistrarForm from '@/components/RegistrarForm.vue'
export default {
    beforeCreate(){
        if(!this.$session.exists()){
            this.$router.push('/')
        }
    },
    components: {
        'registrar-form': RegistrarForm
    }
}
</script>

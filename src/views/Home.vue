<template>
  <v-scroll-y-transition>
    <v-container grid-list-md>
        <estadisticas></estadisticas>
    </v-container>
  </v-scroll-y-transition>
</template>

<script>
// @ is an alias to /src
import Estadisticas from '@/components/Estadisticas.vue'
export default {
  name: 'home',
  beforeCreate(){
    if(!this.$session.exists()){
      this.$router.push('/')
    }
  },
  components: {
    'estadisticas': Estadisticas
  }
}
</script>

<template>
  <v-scroll-y-transition>
    <v-container>
        <estadisticas></estadisticas>
    </v-container>
  </v-scroll-y-transition>
</template>

<script>
// @ is an alias to /src
import Estadisticas from '@/components/Estadisticas.vue'
export default {
  name: 'home',
  components: {
    'estadisticas': Estadisticas
  }
}
</script>

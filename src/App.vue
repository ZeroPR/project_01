<template>
  <v-app>
    <v-navigation-drawer
      persistent
      :mini-variant="miniVariant"
      v-model="drawer"
      enable-resize-watcher
      fixed
      app
    >
      <v-list>
        <v-list-tile
          value="true"
          v-for="(item, i) in menuItems"
          :key="i"
          :to="item.to"
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      app
    >
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon v-html="miniVariant ? 'fas fa-chevron-right' : 'fas fa-chevron-left'"></v-icon>
      </v-btn>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-tooltip bottom>
        <v-btn icon
        slot="activator">
          <v-icon>fas fa-power-off</v-icon>
        </v-btn>
        <span>Cerrar Sesion</span>
      </v-tooltip>
      <v-tooltip bottom>
        <v-btn icon
        slot="activator">
          <v-icon>fas fa-ellipsis-v</v-icon>
        </v-btn>
        <span>Menu</span>
      </v-tooltip>
    </v-toolbar>
    <v-content>
      <router-view></router-view>
    </v-content>
    <v-footer :fixed="fixed" app>
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data () {
    return {
      drawer: true,
      menuItems: [{
        icon: 'fas fa-home',
        title: 'Inspire',
        to: '/',
      },
      {icon: 'fab fa-wpforms', title: 'Registrar', to: '/registrar'},
      {icon: 'fas fa-clipboard-list', title: 'Registro', to: '/registros'},
      {icon: 'fas fa-info-circle', title: 'About', to: '/about'},
      ],
      miniVariant: false,
      title: 'Vuetify.js'
    }
  }
}
</script>

<template>
  <v-app dark>
    <v-navigation-drawer
      persistent
      :mini-variant="miniVariant"
      v-model="drawer"
      enable-resize-watcher
      fixed
      app
      v-if="$session.exists()"
    >
      <v-list>
        <v-list-tile
          value="true"
          v-for="(item, i) in menuItems"
          :key="i"
          :to="item.to"
          :disabled="!$session.exists()"
          active-class="white--text"
          exact-active-class="primary--text"
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
      <v-toolbar-side-icon v-if="$session.exists()" :ripple="{class: 'primary--text'}" @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-btn hidden-sm-and-down v-if="$session.exists()" icon @click.stop="miniVariant = !miniVariant" :ripple="{class: 'primary--text'}">
        <v-icon v-html="miniVariant ? 'fas fa-chevron-right' : 'fas fa-chevron-left'"></v-icon>
      </v-btn>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-tooltip v-if="$session.exists()" bottom>
        <v-btn icon
        slot="activator"
        :ripple="{class: 'primary--text'}"
        @click="logout">
          <v-icon>fas fa-sign-out-alt</v-icon>
        </v-btn>
        <span>Cerrar Sesion</span>
      </v-tooltip>
      <v-tooltip bottom>
        <v-btn icon
        slot="activator"
        :ripple="{class: 'primary--text'}">
          <v-icon>fas fa-ellipsis-v</v-icon>
        </v-btn>
        <span>Menu</span>
      </v-tooltip>
    </v-toolbar>
    <v-content>
      <router-view></router-view>
    </v-content>
    <v-footer app>
      <span> General Maintenance Services Corp. &copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data () {
    return {
      drawer: true,
      menuItems: [{
        icon: 'fas fa-home',
        title: 'Inicio',
        to: '/home',
      },
      {icon: 'fab fa-wpforms', title: 'Registrar', to: '/registrar'},
      {icon: 'fas fa-clipboard-list', title: 'Registro', to: '/registros'},
      {icon: 'fas fa-info-circle', title: 'About', to: '/about'},
      ],
      miniVariant: false,
      title: 'R.E. General Maintenance Services Corp.'
    }
  },

  methods: {
    logout(){
      this.$session.destroy()
      this.$router.push('/')
    }
  }
}
</script>

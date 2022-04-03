<template>
  <div id="app">
    <v-app class="grey darken-4 white--text">
          <NavBar :titles="titles"></NavBar>
      <br>
      <br>
      <br>
      <router-view name="locCentral"></router-view>

      <v-footer color="primary lighten-1" bottom padless>
        <v-row justify="center" no-gutters>
          <v-col class="primary lighten-2 py-4 text-center white--text" cols="12">
            {{ new Date().getFullYear() }} — <strong>IUT Belfort Montbelliard</strong>
          </v-col>
        </v-row>
      </v-footer>

    </v-app>

  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'

export default {
  name: 'App',
  data: () => {
    return {
      titles: [{text: "Home", color: "black", path: "/home", icon: "home"},
        {text: "Lab", color: "blue", path: "/labo/slice", icon: "build"},
        {text: "Library", color: "red", path: "/library/view", icon: "search"}],
      currentMenu: 0
    }
  },
  components: {
    NavBar
  }
}
</script>

<style>

</style>
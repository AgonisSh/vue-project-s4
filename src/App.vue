<template>
  <div id="app">
    <v-app>
      <v-app-bar
          absolute
          color="teal lighten-3"
          hide-on-scroll
          rounded
      >
        <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <v-toolbar-title>
          <NavBar :titles="titles"/>
        </v-toolbar-title>

      </v-app-bar>
      <br>
      <br>
      <br>
      <v-main>


        <!-- Provides the application the proper gutter -->
        <v-container fluid>

          <!-- If using vue-router -->
          <router-view name="locCentral"></router-view>
        </v-container>
      </v-main>


    </v-app>

  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'

export default {
  name: 'App',
  data: () => {
    return {
      titles: [{text: "Home", color: "black", path: "/home"}, {
        text: "Lab",
        color: "blue",
        path: "/labo/slice"
      }, {text: "Library", color: "red", path: "/library/view"}],
      currentMenu: 0
    }
  },
  components: {
    NavBar
  }
}
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}
</style>
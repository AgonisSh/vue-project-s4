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

        <v-toolbar-title>Menu</v-toolbar-title>

        <NavBar :titles="titles"/>
      </v-app-bar>
      <br>
      <br>
      <br>
      <br>
      <v-footer
          v-bind="localAttrs"
          :padless="padless"
      >
        <router-view name="locCentral"></router-view>
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

</style>
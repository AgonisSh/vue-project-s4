<template>
  <div>
    <v-app-bar app absolute color="teal lighten-3" hide-on-scroll rounded>
      <v-btn depressed text class="light-blue darken-3 white--text ma-3" v-for="(t,index) in titles" :key="index" :style="{color : t.color}" @click="$router.push({path:t.path})">
        <v-icon left>{{t.icon}}</v-icon>{{t.text}}
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
  export default {
    name: 'NavBar',
    props: ['titles']
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

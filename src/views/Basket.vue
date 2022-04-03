<template>
  <div>
    <br>
    <h2>In my basket :</h2>

    <v-data-table
        app
        :headers="headers"
        :items="getBasket()"
        class="elevation-2">
    </v-data-table>

    <v-btn class="pink darken-1 white--text app ma-3" @click="sendToLab">Send to the lab</v-btn>

  </div>
</template>

<script>

import {Virus} from "@/model";

export default {
  name: 'Basket',
  props: ['operation', 'name', 'code'],
  data: () => {
    return {
      headers: [
        {text: "Name", value: "name"},
        {text: "Code", value: "code"},
        {text: "Mortality", value: "mortalite"}
      ]
    }
  },
  methods: {
    getBasket() {
      return this.$store.state.basket;
    },
    sendToLab: function () {
      this.$store.commit("transferBasketToSample");
    }
  },
  watch: {
    operation(to) {
      if (to === 'addbasket') {
        this.$store.commit("pushVirusBasket", new Virus(0, this.name, this.code));
        this.$router.push({path: '/library/view'});
      }
    }
  },
}
</script>

<style scoped>
</style>
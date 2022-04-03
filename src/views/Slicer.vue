<template>
  <div>
    <h1>Labo</h1>
		<v-data-table
				v-model="chosenViruses"
				:headers="headers"
				:items="$store.state.samples"
				item-key="name"
				show-select
				class="elevation-1"
		>
		</v-data-table>

    <label for="cut">part length: </label><input id="cut" v-model.number="cutFactor">

    <v-btn class="light-blue darken-3 white--text" :disabled="chosenViruses.length===0" @click="cut()">Cut</v-btn>

    <label for="mute">nb mutations: </label><input id="mute" v-model.number="nbMutation">
    <v-btn class="light-blue darken-3 white--text" :disabled="chosenViruses.length===0" @click="mutation()">Mutation</v-btn>

    <hr/>
    <v-btn class="light-blue darken-3 white--text" @click="$router.push({path:'/labo/mix'})">Go to mixer</v-btn>
  </div>
</template>

<script>
export default {
  name: 'Slicer',
  data: () => {
    return {
      chosenViruses: [],
      cutFactor: 5,
      nbMutation: 10,
			headers: [
				{text: "Name", value: "name"},
				{text: "Code", value: "code"}
			]
    }
  },
  methods: {
    cut: function () {
      if (this.cutFactor === 0) return;
      this.chosenViruses.forEach(e => {
        for (let i = 0; i < e.code.length; i += this.cutFactor) {
          this.$store.commit("addPart", {code: e.code.substring(i, i + this.cutFactor)});
        }
      });
      // remove chosen viruses
      for (let i = this.chosenViruses.length - 1; i >= 0; i--) {
        this.$store.commit("removeSample", this.chosenViruses[i]);
      }
      // unselect all
      this.chosenViruses.splice(0, this.chosenViruses.length)
    },
    mutation: function () {
      if (this.nbMutation === 0) return;

      this.chosenViruses.forEach(e => {
        let newCode;
        for (let i = 0; i < this.nbMutation; i++) {
          let idx = Math.floor(Math.random() * e.code.length);
          let chr = String.fromCharCode(Math.floor(Math.random() * 4) + "A".charCodeAt(0));
          newCode = e.code.substring(0, idx) + chr + e.code.substring(idx + 1);
          e.code = newCode;
          e.updateCaracs();
        }
      });
    }
  }
}
</script>

<style scoped>
</style>
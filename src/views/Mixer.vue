<template>
	<div>
		<table border="0">
			<tr>
				<td><h1>Parts</h1></td>
			</tr>
			<tr>
				<td>
					<CheckedList :fields="['code']" :entries="$store.state.parts" @chosen-changed="chosenParts = $event"/>
				</td>
			</tr>
		</table>
		<v-btn class="orange lighten-1 white--text ma-2" :disabled="chosenParts.length === 0" @click="mix()">Mixing</v-btn>

		<hr/>
		<v-btn class="light-blue darken-3 white--text ma-2" @click="$router.push({path:'/labo/slice'})">Go to slicer</v-btn>

		<hr/>
		<p v-if="newVirus != null">New virus: <input v-model="newVirus.name"> {{ newVirus.code }} {{ newVirus.mortalite }}
			<v-btn class="blue-grey lighten-1 white--text ma-2" @click="sendToLibrary()">Send to library</v-btn>
		</p>

	</div>
</template>

<script>
import {Virus} from '@/model'
import CheckedList from '../components/CheckedList.vue'

export default {
	name: 'Mixer',
	data: () => {
		return {
			chosenParts: [],
			newVirus: null
		}
	},
	components: {
		CheckedList
	},
	methods: {
		mix: function () {
			let newCode = "";

			let chosen = [...this.chosenParts]; // real copy so that we can splice on the copy
			let nb = chosen.length;
			for (let i = 0; i < nb; i++) {
				// choose randomly a part among the selected ones
				let idx = Math.floor(Math.random() * chosen.length);
				let p = this.$store.state.parts[chosen[idx]];
				newCode = newCode + p.code;
				chosen.splice(idx, 1);
			}
			this.newVirus = new Virus(this.$store.state.collec.length, 'mixedvirus', newCode);
			// remove chosen parts
			for (let i = this.chosenParts.length - 1; i >= 0; i--) {
				this.$store.commit("removePart", this.chosenParts[i]);
			}
			// unselect all
			this.chosenParts.splice(0, this.chosenParts.length)
		},
		sendToLibrary: function () {
			this.$store.commit("pushVirusCollec", this.newVirus);
		}
	}
}
</script>

<style scoped>
</style>

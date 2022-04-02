<template>
	<div>
		<h2>In my basket :</h2>
		<table>
			<tr>
				<td>Name</td>
				<td>Code</td>
				<td>% Mortality</td>
			</tr>
			<tr v-for="(v,index) in getBasket()" :key="index">
				<td>{{ v.name }}</td>
				<td>{{ v.code }}</td>
				<td>{{ v.mortalite }}</td>
			</tr>
		</table>
		<button @click="sendToLab">Send to the lab</button>
	</div>
</template>

<script>

import {Virus} from "../model";

export default {
	name: 'Basket',
	props: ['operation', 'name', 'code'],
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
	}
}
</script>

<style scoped>
</style>
<template>
  <div>
		<v-data-table
				:headers="headers"
				:items="$store.state.collec"
				item-key="name"
				class="elevation-1"
		>
			<template v-slot:item="{item}">
				<tr>
					<td> {{item.name}}</td>
					<td> {{item.code}}</td>
					<td> {{item.mortalite}}</td>
					<td>
						<v-btn class="light-blue darken-3 white--text" @click="$router.push({path: '/library/addbasket?name='+item.name+'&code='+item.code})">
							Clone virus for the lab
						</v-btn>
					</td>
				</tr>
			</template>
		</v-data-table>
  </div>
</template>

<script>
  export default {
    name: 'Articles',
		data: () => {
			return {
				headers: [
					{ text: "Name", value: "name" },
					{ text: "Code", value: "code"},
					{ text: "Mortality", value: "mortalite"},
					{ text: "", value: "button", sortable: false}
				]
			}
		}
  }
</script>

<style scoped>
</style>

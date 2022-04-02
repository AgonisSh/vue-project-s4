<template>
  <div>
    <h1>Library</h1>
    <Articles>
			<tr v-for="(v,index) in $store.state.collec" :key="'articles' + index">
				<td>{{ v.name }}</td>
				<td>{{ v.code }}</td>
				<td>{{ v.mortalite }}</td>
			</tr>
		</Articles>
    <router-view name="locDown"></router-view>
  </div>
</template>

<script>

import Articles from '../components/Articles.vue'

export default {
  name: 'Library',
  components: {
    Articles
  }
}
</script>

<style scoped>
</style>

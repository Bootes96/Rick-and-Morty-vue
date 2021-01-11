<template>
	<div class="container">
		<div class="row">
			<div v-if="!loading">
				<div class="col s6">
					<h3>{{singleData.name}}</h3>
					<p>Species: {{singleData.air_date}}</p>
					<p>Status: {{singleData.episode}}</p>
				<ul class="row">
					<li></li>
				</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
	name: 'episode',
	data: () => ({
		loading: true,
	}),
	async mounted() {
		const id = this.$route.params.id
		console.log(id);
		await this.$store.dispatch('fetchSingle', {category: 'episode', id})
		this.loading = false
	},
	computed: {
		...mapGetters(['singleData'])
	}
}
</script>

<style lang="scss" scoped>
</style>
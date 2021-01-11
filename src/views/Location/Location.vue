<template>
	<div class="container">
		<div class="row">
			<div v-if="!loading">
				<div class="col s6">
					<h3>{{singleData.name}}</h3>
					<p>Species: {{singleData.type}}</p>
					<p>Status: {{singleData.dimension}}</p>
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
	name: 'location',
	data: () => ({
		loading: true,
	}),
	async mounted() {
		const id = this.$route.params.id
		await this.$store.dispatch('fetchSingle', {category: 'location', id})
		this.loading = false
	},
	computed: {
		...mapGetters(['singleData'])
	}
}
</script>

<style lang="scss" scoped>

</style>
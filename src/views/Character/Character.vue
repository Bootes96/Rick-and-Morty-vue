<template>
	<div class="container">
		<div class="row">
			<div class="character" v-if="!loading">
				<img class="character__img col s6" :src="singleData.image" alt="">
				<div class="character__content col s6">
					<h3>{{singleData.name}}</h3>
					<p>Species: {{singleData.species}}</p>
					<p>Status: {{singleData.status}}</p>
					<p>Gender: {{singleData.gender}}</p>
					<p>Location: {{singleData.location.name}}</p>
				<ul class="episodes row">
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
	name: 'character',
	data: () => ({
		loading: true,
	}),
	async mounted() {
		const id = this.$route.params.id
		await this.$store.dispatch('fetchSingle', {category: 'character', id})
		console.log(this.$store.state.singleData.episode);
		this.loading = false
	},
	computed: {
		...mapGetters(['singleData'])
	}
}
</script>

<style lang="scss" scoped>
	.character {
		&__img {
			width: 600px;
			height: 400px;
			object-fit: cover;
		}
		h3 {
			margin-bottom: 1.5rem;
		}
		p {
			font-size: 1.5rem;
		}
	}
</style>
<template>
	<div>
		<Preloader v-if="loading"/>
		<div v-else class="container">
			<div class="row">
				<div v-if="!loading">
					<div class="col s6">
						<h3>{{singleData.name}}</h3>
						<p>Species: {{singleData.type}}</p>
						<p>Status: {{singleData.dimension}}</p>
						<p>Residents:</p>
						<div v-if="multipleData.length > 1"> 
							<ul class="bullet" v-for="character in multipleData" :key="character.id">
								<li>{{character.name}}</li>
							</ul>
						</div>
						<ul v-else class="bullet"> 
							<li >{{multipleData.name}}</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'
import Preloader from '../../components/Preloader.vue'
export default {
  components: { Preloader },
	name: 'location',
	data: () => ({
		loading: true,
		multipleData: []
	}),
	async mounted() {
		const id = this.$route.params.id
		await this.$store.dispatch('fetchSingle', {category: 'location', id})
		this.loading = false
		this.getCharacters()
	},
	computed: {
		...mapGetters(['singleData'])
	},
	methods: {
		async getCharacters() {
			const charactersLink = this.singleData.residents
			const ids = []
		 	charactersLink.forEach(item => {
			 	const id = parseInt(item.match(/\d+/)) //получаем id (Number) из строки
				ids.push(id)
			})
			const category = 'character'
			const episodes = await this.$store.dispatch('fetchMultipleData', {category, ids})
			this.multipleData = this.$store.state.multipleData
		}
	}
}
</script>

<style lang="scss" scoped>
		p {
		font-size: 1.5rem;
	}
</style>
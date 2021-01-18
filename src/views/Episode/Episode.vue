<template>
	<div>
		<Preloader v-if="loading"/>
		<div v-else class="container">
			<div class="row">
				<div>
					<div class="col s6">
						<h3>{{singleData.name}}</h3>
						<p>Species: {{singleData.air_date}}</p>
						<p>Status: {{singleData.episode}}</p>
						<p>Characters:</p>
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
import Preloader from '@/components/Preloader'
export default {
	name: 'episode',
	data: () => ({
		loading: true,
		multipleData: []
	}),
	async mounted() {
		const id = this.$route.params.id
		console.log(id);
		await this.$store.dispatch('fetchSingle', {category: 'episode', id})
		this.loading = false
		this.getCharacters()
	},
	computed: {
		...mapGetters(['singleData'])
	},
	methods: {
		async getCharacters() {
			const charactersLink = this.singleData.characters
			const ids = []
		 	charactersLink.forEach(item => {
			 	const id = parseInt(item.match(/\d+/)) //получаем id (Number) из строки
				ids.push(id)
			})
			const category = 'character'
			const episodes = await this.$store.dispatch('fetchMultipleData', {category, ids})
			this.multipleData = this.$store.state.multipleData
		}
	},
	components: {
		Preloader
	}
}
</script>

<style lang="scss" scoped>
	p {
		font-size: 1.5rem;
	}
</style>
<template>
	<div>
		<Navbar />
		<Preloader v-if="loading"/>
		<div v-else class="container">
			<div class="row">
				<div class="character" v-if="!loading">
					<img class="character__img col s6" :src="singleData.image" alt="">
					<div class="character__content col s6">
						<h3>{{singleData.name}}</h3>
						<p>Species: {{singleData.species}}</p>
						<p>Status: {{singleData.status}}</p>
						<p>Gender: {{singleData.gender}}</p>
						<p>Location: {{singleData.location.name}}</p>
					</div>
				</div>
			</div>
			<div class="row">
			<p>Episodes:</p>
			<div v-if="multipleData.length > 1"> 
				<ul class="bullet" v-for="episode in multipleData" :key="episode.id">
					<li>{{episode.name}}</li>
				</ul>
			</div>
			<ul v-else class="bullet"> 
				<li >{{multipleData.name}}</li>
			</ul>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'
import Preloader from '../../components/Preloader.vue'
import Navbar from '@/components/Navbar'
export default {
	components: { 
		Preloader,
	 	Navbar
	},
	name: 'character',
	data: () => ({
		loading: true,
		multipleData: []
	}),
	async mounted() {
		const id = this.$route.params.id
		await this.$store.dispatch('fetchSingle', {category: 'character', id})
		this.loading = false
		this.episodes()
	},
	computed: {
		...mapGetters(['singleData']),
	},
	methods: {
		async episodes() {
			const episodesLink = this.singleData.episode
			const ids = []
		 	episodesLink.forEach(item => {
			 	const id = parseInt(item.match(/\d+/)) //получаем id (Number) из строки
				ids.push(id)
			})
			const category = 'episode'
			const episodes = await this.$store.dispatch('fetchMultipleData', {category, ids})
			this.multipleData = this.$store.state.multipleData
		}
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
	}

		p {
			font-size: 1.5rem;
		}

	.episodes {
		li {
			font-size: 1.2rem;
			margin-left: 1rem;
			}
	}

	.episode {
		font-size: 1.2rem;
		margin-left: 1rem;
	}
</style>
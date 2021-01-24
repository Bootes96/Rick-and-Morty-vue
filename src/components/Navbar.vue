<template>
  <div>
    <nav class="cyan lighten-2">
    	<div class="nav-wrapper row">
			<div class="col s3">
      		<router-link to="/" class="brand-logo left"><span @click="startPage">Rick and Morty</span></router-link>
				</div>
				<ul class="col s5 nav-list">
				<router-link
					v-for="link in links"
					:key="link.url"
					tag="li"
					:to="link.url"
				>
        		<a class="waves-effect waves-light nav-link">{{link.title}}</a>
					</router-link>
      	</ul>
    	</div>
		</nav>
  </div>
</template>

<script>
export default {
	name: 'Navbar',
	data: () => ({
		links: [
			{title: 'Characters', url: '/'},
			{title: 'Episodes', url: '/episode'},
			{title: 'Locations', url: '/location'}
		]
	}),
	methods: {
		async startPage() {
			await this.$store.dispatch('fetchData', {category: 'character', pageNum: 1})
			this.$router.push('?page=1')
		}
	}
}
</script>


<style lang="scss">
 	#search {
	 	border-radius: 5px;
 	}
	.nav{
		&-list {
			display: flex;
			justify-content: space-around;
		}
		&-link {
			font-size: 1.5rem;
		}
	}
</style>
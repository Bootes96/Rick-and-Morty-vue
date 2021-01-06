<template>
  <div>
    <nav class="cyan lighten-2">
    	<div class="nav-wrapper row">
				<div class="col s3">
      		<a href="#!" class="brand-logo left">Rick and Morty</a>
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
				<form class="col s4">
        	<div class="input-field">
          	<input id="search" type="search" required>
          	<label class="label-icon" for="search"><i class="material-icons">search</i></label>
          	<i class="material-icons">close</i>
        	</div>
      </form>
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
	})
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
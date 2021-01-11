<template>
    <div class="container">
      <div class="row">
        <div class="col s4" v-for="character in characters" :key="character.id">
          <div class="card">
            <div class="card-image">
            	<img :src='character.image'>
            </div>
            <div class="card-content">
							<h4 class="card-title cyan-text text-darken-2">{{character.name}}</h4>
							<p>Species: {{character.species}}</p>
							<p>Status: {{character.status}}</p>
            </div>
            <div class="card-action">
              <a @click="$router.push(`/character/${character.id}`)" class="cyan-text text-darken-2">More info</a>
            </div>
          </div>
        </div>
      </div>
      <Pagination />
    </div>
</template>

<script>
import Pagination from '../components/Pagination'

export default {
    name: 'CharacterCards',
    props: ['characters'],
    components: {
      Pagination
    }
}
</script>

<style lang='scss' scoped>
	.card {
		&-content {
			padding-top: 0;
      p {
        font-size: 1.5rem;
      }
		}
	}
</style>
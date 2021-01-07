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
              <a class="cyan-text text-darken-2" href="#">More info</a>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>

export default {
    name: 'CharacterCards',
    props: ['characters']
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
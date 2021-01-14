<template>
    <div class="container">
      <div class="row">
        <div class="col s4" v-for="character in characters" :key="character.id">
          <div class="card">
            <div class="card-image" @click="$router.push(`/character/${character.id}`)">
            	<img :src='character.image'>
            </div>
          </div>
          <h4 @click="$router.push(`/character/${character.id}`)" class="card-title cyan-text text-darken-2">{{character.name}}</h4>
					<p class="card-text">Species: {{character.species}}</p>
					<p class="card-text" > Status: <span 
            :class="[character.status === 'Dead' ? 'red-text' 
            : (character.status === 'Alive') ? 'green-text' : 'yellow-text']">
          {{character.status}}
          </span></p>
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
    },
}
</script>

<style lang='scss' scoped>
</style>
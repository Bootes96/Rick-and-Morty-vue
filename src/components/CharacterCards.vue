<template>
  <div>
    <Preloader v-if="!characters"/>
    <div v-else class="container">
      <div class="cards">
        <div class="card-wrapper" v-for="character in characters" :key="character.key">
          <div class="card cyan lighten-2">
              <div class="card-image" @click="$router.push(`/character/${character.id}`)">
            	  <img :src='character.image'>
              </div>
            <div class="card-content">
              <h4 @click="$router.push(`/character/${character.id}`)" class="card-title">{{character.name}}</h4>
					  <p class="card-text" > Status: 
              <span 
                :class="[character.status === 'Dead' ? 'red-text' 
                : (character.status === 'Alive') ? 'green-text' : 'yellow-text']">
                {{character.status}}
            </span>
            </p>
            </div>
            <div class="card-action">
              <a @click="$router.push(`/character/${character.id}`)" class="white-text">More info</a>
            </div>
          </div>
        </div>
      </div>
      <Pagination />
    </div>
  </div>
</template>

<script>
import Pagination from '../components/Pagination'
import Preloader from './Preloader.vue'

export default {
    name: 'CharacterCards',
    props: ['characters'],
    components: {
      Pagination,
      Preloader
    },
}
</script>

<style lang='scss' scoped>
</style>
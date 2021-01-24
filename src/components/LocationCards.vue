<template>
  <div>
    <Preloader v-if="!locations"/>
    <div v-else class="container">
      <div class="cards">
        <div class="card-wrapper" v-for="location in locations" :key="location.key">
          <div class="card cyan lighten-2">
            <div class="card-content">
              <h2 class="card-title">{{location.name}}</h2>
              <p>Type: {{location.type}}</p>
              <p>Dimension: {{location.dimension}}</p>
            </div>
            <div class="card-action">
              <a @click="$router.push(`/location/${location.id}`)" class="white-text">More info</a>
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
    name: 'LocationCards',
    props: ['locations'],
    components: {
      Pagination,
      Preloader
    }
}
</script>

<style lang='scss' scoped>
</style>
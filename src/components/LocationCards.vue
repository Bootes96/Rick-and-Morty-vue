<template>
    <div class="container">
      <div class="row card-list">
        <div class="col s4 card-wrapper" v-for="location in locations" :key="location.id">
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
</template>

<script>
import Pagination from '../components/Pagination'

export default {
    name: 'LocationCards',
    props: ['locations'],
    components: {
      Pagination
    }
}
</script>

<style lang='scss' scoped>
	.card {
    color: #fff;
    &-list {
      display: flex;
      flex-wrap: wrap;
    } 
    &-wrapper {
      display: flex;
    }
		&-content {
      p {
          font-size: 1.5rem;
          max-width: 250px;
        }
	  }
		&-title {
			padding-top: 1.5rem;
			font-weight: bold;
      max-width: 250px;
		}
	}
</style>
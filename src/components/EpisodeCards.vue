<template>
  <div>
    <Preloader v-if="!episodes.length"/>
    <div v-else class="container">
      <div class="cards">
        <div class="card-wrapper" v-for="episode in episodes" :key="episode.key">
          <div class="card cyan lighten-2">
            <div class="card-content">
              <h2 class="card-title">{{episode.name}}</h2>
              <p>Air date: {{episode.air_date}}</p>
              <p>Episode: {{episode.episode}}</p>
            </div>
            <div class="card-action">
              <a @click="$router.push(`/episode/${episode.id}`)" class="white-text">More info</a>
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
    name: 'EpisodeCards',
    props: ['episodes'],
    components: {
      Pagination,
      Preloader
    }
}
</script>

<style lang='scss' scoped>
  .cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
	.card {
    color: #fff;
    box-sizing: border-box;
    width: 317px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    &-wrapper {
      display: flex;
      width: 33%;
    }
		&-content {
			padding-top: 0;
      p {
          font-size: 1.5rem;
        }
	  }
		&-title {
			padding-top: 1.5rem;
			font-weight: bold;
		}
	}
</style>
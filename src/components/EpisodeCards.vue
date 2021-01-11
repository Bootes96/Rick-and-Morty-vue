<template>
    <div class="container">
      <div class="row">
        <div class="col s4" v-for="episode in episodes" :key="episode.key">
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
</template>

<script>
import Pagination from '../components/Pagination'
export default {
    name: 'EpisodeCards',
    props: ['episodes'],
    components: {
      Pagination
    }
}
</script>

<style lang='scss' scoped>
	.card {
    color: #fff;
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
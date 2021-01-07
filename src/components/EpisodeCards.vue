<template>
    <div class="container">
      <div class="row">
        <div class="col s4">
          <div class="card cyan lighten-2">
            <div class="card-content">
				<h2 class="card-title">Pilot</h2>
				<p>Air date: December 2, 2013</p>
				<p>Episode: S01E01</p>
            </div>
            <div class="card-action">
              <a class="white-text" href="#">More info</a>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    name: 'EpisodeCards',
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
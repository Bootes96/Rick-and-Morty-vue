<template>
    <div>
      <div class="row">
        <div class="col s3">
          <div class="card">
            <div class="card-image">
            	<img src="../assets/ram.jpg">
            </div>
            <div class="card-content">
							<h4 class="card-title cyan-text text-lighten-2">Morty Smith</h4>
							<p>Species: Human</p>
							<p>Status: Alive</p>
            </div>
            <div class="card-action">
              <a href="#">More info</a>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    name: 'Cards',
}
</script>

<style lang='scss'>
	.card {
		&-content {
			padding-top: 0;
		}
		&-title {
			margin: 0;
		}
	}
</style>
<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
@import "~materialize-css/dist/css/materialize.min.css";
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  margin-top: 2rem;
}

h1, h2, h3, h4, h5 {
  margin: 0;
}

.card {
  &-title {
    margin-bottom: 1rem;
    cursor: pointer;
  }
  &-image {
    cursor: pointer;
  }
  &-text {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
}

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
			margin-top: 1.5rem;
			font-weight: bold;
      margin-bottom: 1rem;
      cursor: pointer;
		}
	}

.bullet {
  margin-left: 0;
  list-style: none;
  counter-reset: li;
}
.bullet li {
  position: relative;
  margin-bottom: 1.5em;
  border: 3px solid #CADFCF;
  padding: 0.6em;
  border-radius: 4px;
  background: #FEFEFE;
  color: #231F20;
  font-family: "Trebuchet MS", "Lucida Sans";
}
.bullet li:before {
  position: absolute;
  top: -0.7em;
  padding-left: 0.4em;
  padding-right: 0.4em;
  font-size: 16px;
  font-weight: bold;
  color: #DCC24B;
  background: #FEFEFE;
  border-radius: 50%;
  counter-increment: li;
  content: '';
}
</style>

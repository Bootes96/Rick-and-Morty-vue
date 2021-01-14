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
</style>

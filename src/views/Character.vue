<template>
  <div>
    <Navbar />
    <Cards />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '../components/Navbar'
import Cards from '../components/Cards'

export default {
  name: 'Characters',
  components: {
    Navbar,
    Cards
  }
}
</script>

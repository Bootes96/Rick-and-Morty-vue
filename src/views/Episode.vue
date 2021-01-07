<template>
  <div>
    <Navbar />
    <EpisodeCards />
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
import EpisodeCards from '../components/EpisodeCards'
export default {
  name: 'Episodes',
  components: {
    Navbar,
    EpisodeCards
  }
}
</script>

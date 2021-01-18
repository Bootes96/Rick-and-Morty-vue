<template>
  <div>
    <Navbar />
    <EpisodeCards :episodes="categoryData.results"/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import EpisodeCards from '@/components/EpisodeCards'
import { mapGetters } from 'vuex'
export default {
  name: 'Episodes',
  async created() {
    await this.$store.dispatch('fetchData', {category: 'episode', pageNum: 1})
  },
  computed: {
    ...mapGetters(['categoryData'])
  },
  components: {
    Navbar,
    EpisodeCards
  }
}
</script>


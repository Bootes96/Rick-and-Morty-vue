<template>
  <div>
    <Navbar @fetch-characters="fetchCharacters"/>
    <CharacterCards :characters='categoryData.results'/>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar'
import CharacterCards from '@/components/CharacterCards'
import {mapActions, mapGetters} from 'vuex'

export default {
  name: 'Characters',
  created() {
    this.fetchCharacters()
  },
  methods: {
    async fetchCharacters() {
      await this.$store.dispatch('fetchData', {category: 'character', pageNum: 1})
    }
  },
  computed: {
    //getting characters from the store
    ...mapGetters(['categoryData'])
  },
  components: {
    Navbar,
    CharacterCards
  }
}
</script>

<template>
  <div>
    <Navbar />
    <CharacterCards :characters='data'/>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '../components/Navbar'
import CharacterCards from '../components/CharacterCards'
import {mapActions, mapGetters} from 'vuex'

export default {
  name: 'Characters',
  data: () => ({
    characters: []
  }),
  created() {
    this.fetchData('character')
  },
  methods: {
    ...mapActions(["fetchData"])
  },
  computed: {
    //getting characters from the store
    ...mapGetters(['data'])
  },
  components: {
    Navbar,
    CharacterCards
  }
}
</script>

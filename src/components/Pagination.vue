<template>
		<Paginate 
      v-model="page"
      :page-count="pageCount"
      :click-handler="clickPageHandler"
      :prev-text="'<i class=material-icons>chevron_left</i>'"
      :prev-class="'waves-effect'"
      :next-text="'<i class=material-icons>chevron_right</i>'"
      :next-class="'waves-effect'"
      :container-class="'pagination'"
      :page-class="'waves-effect'"
      :active-class="'active-item cyan lighten-2'"
  />
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: 'Pagination',
  data: () => ({
    page: 1,
    pageCount: 0
  }),
  async mounted() {
    this.paginateCategory()
  }, 
  computed: {
    ...mapGetters(['categoryData'])
  },
  methods: {
    ...mapActions(["fetchData"]),
    async paginateCategory() {
      this.page = +this.$route.query.page
      const category = window.location.pathname.split('/')[2] || 'character'
      await this.$store.dispatch('fetchData', {category, pageNum: this.page})
      this.pageCount = this.$store.getters.categoryData.info.pages
    },
    async clickPageHandler(pageNum) {
      this.$router.push(`${this.$route.path}?page=${pageNum}`)
      const category = this.categoryData.info.category
      await this.$store.dispatch('fetchData', {category, pageNum})
    }
  },
  watch: {
    '$route'() {
      if(this.$route.query.page === '1') {
        this.paginateCategory()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .pagination {
    text-align: center;
    margin-bottom: 2rem;
  }
</style>
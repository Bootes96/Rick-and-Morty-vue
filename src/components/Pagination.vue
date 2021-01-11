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
    :active-class="'cyan lighten-2'"
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
    this.page = +this.$route.query.page
    const category = window.location.pathname.split('/')[2] || 'character'
    await this.$store.dispatch('fetchData', {category, pageNum: this.page})
    this.pageCount = this.$store.getters.categoryData.info.pages
  }, 
  computed: {
    ...mapGetters(['categoryData'])
  },
  methods: {
    ...mapActions(["fetchData"]),
    async clickPageHandler(pageNum) {
      this.$router.push(`${this.$route.path}?page=${pageNum}`)
      const category = this.categoryData.info.category
      await this.$store.dispatch('fetchData', {category, pageNum})
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
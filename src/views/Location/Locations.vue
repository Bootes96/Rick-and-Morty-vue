<template>
  <div>
		<Navbar />
		<LocationCards :locations="categoryData.results"/>
	</div>
</template>

<script>
import Navbar from '@/components/Navbar'
import LocationCards from '@/components/LocationCards'
import { mapGetters } from 'vuex'
export default {
	name: 'Locations',
	async created() {
		await this.$store.dispatch('fetchData', {category: 'location', pageNum: 1})
	},
	computed: {
		...mapGetters(['categoryData'])
	},
	components: {
		Navbar,
		LocationCards
	}
}
</script>
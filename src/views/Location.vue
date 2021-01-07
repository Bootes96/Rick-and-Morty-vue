<template>
    <div>
		<Navbar />
		<LocationCards />
	</div>
</template>

<script>
import Navbar from '../components/Navbar'
import LocationCards from '../components/LocationCards'
export default {
	name: 'Locations',
	components: {
		Navbar,
		LocationCards
	}
}
</script>
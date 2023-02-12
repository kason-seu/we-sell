<template>
	<view class="commodity-list">

		<!-- <Commodity :dataList="commodityList"></Commodity> -->
		<Commodity :dataList="dataList"></Commodity>

	</view>
</template>

<script>
	import Commodity from './Commodity.vue'
	export default {
		props: {
			dataList: Array
		},
		// data() {
		// 	return {

		// 		commodityList: [{
		// 				id: 1,
		// 				imgUrl: "../../static/commodity/item1.jpg",
		// 				commodity_name: "大鹅绒毛新疆特产羊毛，2023年爆款热卖，限时7天售",
		// 				current_price: 299,
		// 				origin_price: 200,
		// 				discount: 5
		// 			},
		// 			{
		// 				id: 1,
		// 				imgUrl: "../../static/commodity/item2.jpg",
		// 				commodity_name: "大鹅绒毛新疆特产羊毛，2023年爆款热卖，限时7天售",
		// 				current_price: 299,
		// 				origin_price: 200,
		// 				discount: 5
		// 			},
		// 			{
		// 				id: 1,
		// 				imgUrl: "../../static/commodity/item3.jpg",
		// 				commodity_name: "大鹅绒毛新疆特产羊毛，2023年爆款热卖，限时7天售",
		// 				current_price: 299,
		// 				origin_price: 200,
		// 				discount: 5
		// 			},
		// 			{
		// 				id: 1,
		// 				imgUrl: "../../static/commodity/item4.jpg",
		// 				commodity_name: "大鹅绒毛新疆特产羊毛，2023年爆款热卖，限时7天售",
		// 				current_price: 299,
		// 				origin_price: 200,
		// 				discount: 5
		// 			}
		// 		]
		// 	}
		// },
		methods: {

		},
		components: {
			Commodity
		}
	}
</script>

<style>

</style>

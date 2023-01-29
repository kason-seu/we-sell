<template>
	<view class="hot">


		<Commodity :dataList="hotList" itemW="250rpx" itemImgH="250rpx"></Commodity>
	</view>
</template>

<script>
	import Commodity from '@/components/common/Commodity.vue'
	export default {
		data() {
			return {
				hotList: [{
						id: 1,
						imgUrl: "../../static/hot/shoe1.jpg",
						commodity_name: "大鹅绒毛新疆特产羊毛，2023年爆款热卖，限时7天售",
						current_price: 299,
						origin_price: 200,
						discount: 5
					},
					{
						id: 2,
						imgUrl: "../../static/hot/shoe2.jpg",
						commodity_name: "大鹅绒毛新疆特产羊毛，2023年爆款热卖，限时7天售",
						current_price: 299,
						origin_price: 200,
						discount: 5
					},
					{
						id: 3,
						imgUrl: "../../static/hot/shoe3.jpg",
						commodity_name: "大鹅绒毛新疆特产羊毛，2023年爆款热卖，限时7天售",
						current_price: 299,
						origin_price: 200,
						discount: 5
					}, {
						id: 4,
						imgUrl: "../../static/hot/shoe4.jpg",
						commodity_name: "大鹅绒毛新疆特产羊毛，2023年爆款热卖，限时7天售",
						current_price: 299,
						origin_price: 200,
						discount: 5
					}, {
						id: 5,
						imgUrl: "../../static/hot/shoe5.jpg",
						commodity_name: "大鹅绒毛新疆特产羊毛，2023年爆款热卖，限时7天售",
						current_price: 299,
						origin_price: 200,
						discount: 5
					}, {
						id: 6,
						imgUrl: "../../static/hot/shoe6.jpg",
						commodity_name: "大鹅绒毛新疆特产羊毛，2023年爆款热卖，限时7天售",
						current_price: 299,
						origin_price: 200,
						discount: 5
					}
				],
			}
		},
		components: {
			Commodity
		}
	}
</script>

<style>
</style>

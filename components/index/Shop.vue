<template>
	<view class="shop">
		<view class="shop-big-item">
			<image class="shop-big-item" src="../../static/shop/bigshop1.jpeg" mode=""></image>
		</view>
		<view class="shop-small-item">
			<scroll-view scroll-x="true" class="scroll-item" scroll-left="120">
				<view class="shop-commodity">
					<Commodity :dataList="shopList" itemW="200rpx" itemImgH="200rpx" wrap="no-wrap"></Commodity>
				</view>
			</scroll-view>
		</view>

		<view class="shop-big-item">
			<image class="shop-big-item" src="../../static/shop/bigshop2.jpeg" mode=""></image>
		</view>
		<view class="shop-small-item">
			<scroll-view scroll-x="true" class="scroll-item" scroll-left="120">
				<view class="shop-commodity">
					<Commodity :dataList="shopList2" itemW="200rpx" itemImgH="200rpx" wrap="no-wrap"></Commodity>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import Commodity from '@/components/common/Commodity.vue'
	export default {

		data() {
			return {

				shopList: [{
					id: 1,
					imgUrl: "../../static/shop/shopsell1.jpeg",
					commodity_name: "大鹅绒毛新疆特产羊毛，2023年爆款热卖，限时7天售",
					current_price: 299,
					origin_price: 200,
					discount: 5
				}, {
					id: 2,
					imgUrl: "../../static/shop/shopsell2.jpeg",
					commodity_name: "大鹅绒毛新疆特产羊毛，2023年爆款热卖，限时7天售",
					current_price: 299,
					origin_price: 200,
					discount: 5
				}, {
					id: 3,
					imgUrl: "../../static/shop/shopsell3.jpeg",
					commodity_name: "大鹅绒毛新疆特产羊毛，2023年爆款热卖，限时7天售",
					current_price: 299,
					origin_price: 200,
					discount: 5
				}, {
					id: 4,
					imgUrl: "../../static/shop/shopsell4.jpeg",
					commodity_name: "大鹅绒毛新疆特产羊毛，2023年爆款热卖，限时7天售",
					current_price: 299,
					origin_price: 200,
					discount: 5
				}, {
					id: 5,
					imgUrl: "../../static/shop/shopsell5.jpeg",
					commodity_name: "大鹅绒毛新疆特产羊毛，2023年爆款热卖，限时7天售",
					current_price: 299,
					origin_price: 200,
					discount: 5
				}, {
					id: 6,
					imgUrl: "../../static/shop/shopsell6.jpeg",
					commodity_name: "大鹅绒毛新疆特产羊毛，2023年爆款热卖，限时7天售",
					current_price: 299,
					origin_price: 200,
					discount: 5
				}],
				shopList2: [{
					id: 1,
					imgUrl: "../../static/shop/shopclothes1.jpeg",
					commodity_name: "大鹅绒毛新疆特产羊毛，2023年爆款热卖，限时7天售",
					current_price: 299,
					origin_price: 200,
					discount: 5
				}, {
					id: 2,
					imgUrl: "../../static/shop/shopclothes2.jpeg",
					commodity_name: "大鹅绒毛新疆特产羊毛，2023年爆款热卖，限时7天售",
					current_price: 299,
					origin_price: 200,
					discount: 5
				}, {
					id: 3,
					imgUrl: "../../static/shop/shopclothes3.jpeg",
					commodity_name: "大鹅绒毛新疆特产羊毛，2023年爆款热卖，限时7天售",
					current_price: 299,
					origin_price: 200,
					discount: 5
				}, {
					id: 4,
					imgUrl: "../../static/shop/shopclothes4.jpeg",
					commodity_name: "大鹅绒毛新疆特产羊毛，2023年爆款热卖，限时7天售",
					current_price: 299,
					origin_price: 200,
					discount: 5
				}, {
					id: 5,
					imgUrl: "../../static/shop/shopclothes5.jpeg",
					commodity_name: "大鹅绒毛新疆特产羊毛，2023年爆款热卖，限时7天售",
					current_price: 299,
					origin_price: 200,
					discount: 5
				}, {
					id: 6,
					imgUrl: "../../static/shop/shopclothes6.jpeg",
					commodity_name: "大鹅绒毛新疆特产羊毛，2023年爆款热卖，限时7天售",
					current_price: 299,
					origin_price: 200,
					discount: 5
				}, {
					id: 7,
					imgUrl: "../../static/shop/shopclothes7.jpeg",
					commodity_name: "大鹅绒毛新疆特产羊毛，2023年爆款热卖，限时7天售",
					current_price: 299,
					origin_price: 200,
					discount: 5
				}, {
					id: 8,
					imgUrl: "../../static/shop/shopclothes8.jpeg",
					commodity_name: "大鹅绒毛新疆特产羊毛，2023年爆款热卖，限时7天售",
					current_price: 299,
					origin_price: 200,
					discount: 5
				}]
			}
		},
		methods: {

		},
		components: {
			Commodity
		}
	}
</script>

<style scoped>
	.shop {
		width: 100%;
	}

	.shop-commodity {
		display: inline-block;
	}

	.shop-big-item {
		width: 100%;
		height: 400rpx;
	}
</style>

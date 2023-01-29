<template>
	<view class="commodity">


		<view class="commodity-item" v-for="(item,index) in dataList" :key="index" :style='"width:"+itemW+";"'>

			<image class="item-img" v-if="item.imgUrl" :src="item.imgUrl" mode="" :style='"height:"+itemImgH+";"'>
			</image>
			<view class="commodity-content">

				<text class="commodity-name">{{item.commodity_name}}</text>
				<view class="">
					<text class="current-price">${{item.current_price}}</text>
					<text class="origin-price">${{item.origin_price}}</text>
				</view>
				<text class="discount">{{item.discount}}折</text>
			</view>
		</view>


		<!-- 下面这些事固定写死而不是传参的-->

		<!-- <view class="commodity-item">

			<image class="item-img" src="../../static/commodity/item1.jpg" mode=""></image>
			<view class="commodity-content">
				<text class="commodity-name">大鹅绒毛新疆特产羊毛，2023年爆款热卖，限时7天售</text>
				<view class="">
					<text class="current-price">$299</text>
					<text class="origin-price">$200</text>
				</view>
				<text class="discount">5折</text>
			</view>
		</view>


		<view class="commodity-item">
			<image class="item-img" src="../../static/commodity/item2.jpg" mode=""></image>
			<view class="commodity-content">
				<text class="commodity-name">大鹅绒毛新疆特产羊毛，2023年爆款热卖，限时7天售</text>
				<view class="">
					<text class="current-price">$299</text>
					<text class="origin-price">$200</text>
				</view>
				<text class="discount">5折</text>
			</view>
		</view>


		<view class="commodity-item">
			<image class="item-img" src="../../static/commodity/item3.jpg" mode=""></image>
			<view class="commodity-content">
				<text class="commodity-name">大鹅绒毛新疆特产羊毛，2023年爆款热卖，限时7天售</text>
				<view class="">
					<text class="current-price">$299</text>
					<text class="origin-price">$200</text>
				</view>
				<text class="discount">5折</text>
			</view>
		</view>


		<view class="commodity-item">
			<image class="item-img" src="../../static/commodity/item4.jpg" mode=""></image>
			<view class="commodity-content">
				<text class="commodity-name">大鹅绒毛新疆特产羊毛，2023年爆款热卖，限时7天售</text>
				<view class="">
					<text class="current-price">$299</text>
					<text class="origin-price">$200</text>
				</view>
				<text class="discount">5折</text>
			</view>
		</view>
 -->
	</view>
</template>

<script>
	export default {
		props: {
			dataList: Array,
			itemW: {
				type: String,
				default: "375rpx"
			},
			itemImgH: {
				type: String,
				default: "375rpx"
			}
		},
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style scoped>
	.commodity {
		display: flex;
		flex-wrap: wrap;
	}

	.commodity-item {
		padding-bottom: 20rpx;
		/* width: 375rpx; */
	}

	.item-img {
		width: 100%;
		/* height: 375rpx; */
	}

	.commodity-content {
		/** text 文字居中**/
		text-align: center;
	}

	.commodity-name {
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		color: rgb(65, 65, 65);
		word-break: break-all;
		padding: 5rpx 20rpx;
	}

	.origin-price {
		/** 中间线 **/
		text-decoration: line-through;
		font-size: 24rpx;
		color: #999999;
	}

	.discount {
		/** 设置一个圆角**/
		border-radius: 4rpx;
		/** 给个边框 **/
		border: 1rpx solid #FF3333;
		padding: 2rpx 10rpx;
		font-size: 20rpx;
		color: #FF3333;
	}
</style>

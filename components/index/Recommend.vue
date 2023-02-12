<template>
	<view class="recommend bg-color">

		<view class="recommend-item">
			<image class="item-big" src="@/static/recommend/big-top-2.jpg" mode=""></image>
			<view class="item-small">
				<image class="item-img" src="@/static/recommend/small-4.jpg" mode=""></image>
				<image class="item-img" src="@/static/recommend/small-5.jpg" mode=""></image>
				<image class="item-img" src="@/static/recommend/small-6.jpg" mode=""></image>
			</view>
		</view>

		<view class="recommend-item">
			<image class="item-big" src="@/static/recommend/big-top-1.jpg" mode=""></image>
			<view class="item-small">
				<image class="item-img" src="@/static/recommend/small-1.jpg" mode=""></image>
				<image class="item-img" src="@/static/recommend/small-2.jpg" mode=""></image>
				<image class="item-img" src="@/static/recommend/small-3.jpg" mode=""></image>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		props: {
			dataList: Array
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
	.recommend {
		padding: 10rpx;

	}

	.recommend-item {
		display: flex;
		flex-direction: column;
		border: 2rpx solid #cccccc;
		border-radius: 20rpx;
		margin: 10rpx 0;
		overflow: hidden;
	}

	.item-big {
		width: 100%;
		height: 300rpx;
	}

	.item-small {
		width: 100%;
		height: 240rpx;
	}

	.item-img {
		width: 33.3333%;
		height: 240rpx;
	}
</style>

<template>


	<view class="swiper">
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">


			<swiper-item v-for="(item,index) in dataList" :key="index">

				<view class="swiper-item">
					<image v-if="item.imgUrl" :src="item.imgUrl" mode="" class="swiper-img"></image>
				</view>
			</swiper-item>
			<!-- 改造成循环 -->
			<!-- <swiper-item>
				<view class="swiper-item">
					<image src="@/static/swiper/swiper1.png" mode="" class="swiper-img"></image>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<image src="@/static/swiper/swiper2.png" class="swiper-img"></image>

				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<image src="@/static/swiper/swiper3.png" class="swiper-img"></image>

				</view>
			</swiper-item> -->
		</swiper>
	</view>
</template>

<script>
	export default {
		props: {
			dataList: Array
		}
	}
</script>

<style scoped>
	swiper {
		width: 100%;
		height: 400rpx;
	}

	/* .swiper {
		width: 100%;
		height: 400rpx;
	} */

	.swiper-item {
		width: 100%;
		height: 400rpx;
	}

	.swiper-img {
		width: 100%;
	}
</style>

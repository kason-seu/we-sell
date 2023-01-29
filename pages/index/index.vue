<template>
	<view class="index">

		<!-- #ifdef MP-WEIXIN -->
		<!-- <view class="wx-tab">
			<view class="iconfont icon-Magnifier"></view>
			<text>小微商铺</text>
			<view class="iconfont icon-xiaoxizhongxin"></view>
		</view> -->
		<!-- #endif -->


		<!-- <view class="f-active-color">文字xxx </view>

		<view class="iconfont icon-xiaoxizhongxin">testxxx出来了吗</view> -->

		<!-- <IndexSwiper></IndexSwiper>
		<Recommend></Recommend>
		<Card cardTitle="猜你喜欢"></Card>
		<CommodityList></CommodityList> -->

		<Banner></Banner>
		<Icons></Icons>
		<Card cardTitle="热销品牌"></Card>
		<Brand></Brand>
		<Card cardTitle="热销爆品"></Card>
		<Hot></Hot>
		<Card cardTitle="猜你喜欢"></Card>
		<CommodityList></CommodityList>

	</view>
</template>

<script>
	import IndexSwiper from '@/components/index/IndexSwiper.vue'
	import Recommend from '@/components/index/Recommend.vue'
	import Card from '@/components/common/Card.vue'
	import CommodityList from '@/components/common/CommodityList.vue'
	import Banner from '@/components/index/Banner.vue'
	import Icons from '@/components/index/Icons.vue'
	import Hot from '@/components/index/Hot.vue'
	import Brand from '@/components/index/Brand.vue'
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		components: {
			IndexSwiper,
			Recommend,
			Card,
			CommodityList,
			Banner,
			Icons,
			Hot,
			Brand
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
	.wx-tab {
		height: 200rpx;
		width: 100%;
		text-align: center;
		display: flex;
		justify-content: space-between;
		line-height: 150rpx;
	}

	/* .content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	} */
</style>

<template>
	<view class="index">

		<!-- #ifdef MP-WEIXIN -->
		<!-- <view class="wx-tab">
			<view class="iconfont icon-Magnifier"></view>
			<text>小微商铺</text>
			<view class="iconfont icon-xiaoxizhongxin"></view>
		</view> -->
		<!-- #endif -->


		<!--单页猜你喜欢 -->
		<!-- <view class="f-active-color">文字xxx </view>

		<view class="iconfont icon-xiaoxizhongxin">testxxx出来了吗</view> -->

		<!-- <IndexSwiper></IndexSwiper>
		<Recommend></Recommend>
		<Card cardTitle="猜你喜欢"></Card>
		<CommodityList></CommodityList> -->

		<!--多个品牌页面 -->
		<!-- <Banner></Banner>
		<Icons></Icons>
		<Card cardTitle="热销品牌"></Card>
		<Brand></Brand>
		<Card cardTitle="推荐商户"></Card>
		<Shop></Shop>
		<Card cardTitle="热销爆品"></Card>
		<Hot></Hot>
		<Card cardTitle="猜你喜欢"></Card>
		<CommodityList></CommodityList>
		-->
		<view class="sticky-box">
			<!-- 滑动页面-->
			<scroll-view scroll-x="true" class="scroll-home" :scroll-into-view="tabScrollIndex">

				<view>
					<view class="scroll-item" v-for="(item,index) in tabBarItemList" :key="index" :id='"tap" + index'
						@tap="tapClick(index)">

						<view :class="tabBarIndex===index ? 'item-text' : 'f-color' ">
							<text>{{item.name}}</text>
						</view>
					</view>
				</view>

			</scroll-view>
		</view>
		<swiper @change="changeTab" :current="tabBarIndex" :style="'height:'+ homeHeight +'px;'">
			<swiper-item v-for="(item,index) in tabBarItemList" :key="index">
				<view class="home-data">
					<Banner></Banner>
					<Icons></Icons>
					<Card cardTitle="热销品牌"></Card>
					<Brand></Brand>
					<Card cardTitle="推荐商户"></Card>
					<Shop></Shop>
					<Card cardTitle="热销爆品"></Card>
					<Hot></Hot>
					<Card cardTitle="猜你喜欢"></Card>
					<CommodityList></CommodityList>
				</view>
			</swiper-item>

		</swiper>
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
	import Shop from '../../components/index/Shop.vue'
	export default {
		data() {
			return {
				title: 'Hello',
				// 索引按的位置
				tabBarIndex: 0,
				// 滑动的位置
				tabScrollIndex: 'tap0',
				// home视图高度，显示真正的内容板块
				homeHeight: 0,
				top: 0,
				tabBarItemList: [{
						name: "推荐"
					}, {
						name: "运动户外"
					},
					{
						name: "衣状美食"
					},
					{
						name: "户外生活"
					},
					{
						name: "品牌专卖"
					},
					{
						name: "瑜伽专卖"
					},
					{
						name: "家电服务"
					},
					{
						name: "家装服务"
					},
					{
						name: "美食专卖"
					}
				]
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
			Brand,
			Shop
		},
		onLoad() {


		},
		onReady() {
			let view = uni.createSelectorQuery().select('.home-data')
			view.boundingClientRect(data => {
				console.log('页面布局信息 ' + JSON.stringify(data))
				this.homeHeight = data.height
			}).exec()
		},
		methods: {

			tapClick(index) {
				if (this.tabBarIndex === index) {
					return
				}
				this.tabBarIndex = index
				this.tabScrollIndex = 'tap' + index
			},
			changeTab(e) {
				console.log('change to tab index = ' + e.detail.current)
				this.tabScrollIndex = 'tap' + e.detail.current
				this.tabBarIndex = e.detail.current

			}
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

	.sticky-box {
		/* #ifndef APP-PLUS-NVUE */
		display: flex;
		position: -webkit-sticky;
		/* #endif */
		position: sticky;
		top: var(--window-top);
		z-index: 99;
		flex-direction: row;
		margin: 0px;
		border-top: 1px #f9f9f9 solid;
		border-bottom: 1px #f9f9f9 solid;
		background: #fff;
	}

	/* .content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	} */
	.scroll-home {
		width: 100%;
		height: 80rpx;
		white-space: nowrap;
		padding: 2rpx;

	}

	.scroll-item {
		display: inline-block;
		padding: 2rpx 24rpx;

		font-size: 36rpx;
		font-weight: bold;

	}

	.item-text {
		border-bottom: 6rpx solid #42B7FB;
	}
</style>

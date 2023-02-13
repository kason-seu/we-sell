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
			<swiper-item v-for="(item,index) in newTabPageList" :key="index">

				<scroll-view scroll-y="true" :style="'height:'+ homeHeight +'px;'">
					<block v-if="item.data.length > 0">
						<block v-for="(key,i) in item.data" :key="i">

							<IndexSwiper v-if="key.type === 'swiperList'" :dataList="key.data"></IndexSwiper>
							<template v-if="key.type === 'recommendList'">
								<Recommend :dataList="key.data"></Recommend>
								<Card cardTitle="猜你喜欢"></Card>
							</template>

							<CommodityList v-if="key.type === 'commodityList'" :dataList="key.data"></CommodityList>
						</block>
					</block>
					<view v-else>
						暂无数据....
					</view>
				</scroll-view>

				<!--下面这种方式不太好执行刷新 block 這東西是個空白沒有啥作用，不是試圖-->
				<!-- <view class="home-data">



					<block v-for="(key,i) in item.data" :key="i">

						<IndexSwiper v-if="key.type === 'swiperList'" :dataList="key.data"></IndexSwiper>
						<template v-if="key.type === 'recommendList'">
							<Recommend :dataList="key.data"></Recommend>
							<Card cardTitle="猜你喜欢"></Card>
						</template>

						<CommodityList v-if="key.type === 'commodityList'" :dataList="key.data"></CommodityList>
					</block>
				</view> -->

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

				// 改造从接口中读取， tabBar显示的菜单内容
				tabBarItemList: [],
				// 存储每个页面对应的一些组件内容，有几个tabBar，这里存几个数组
				newTabPageList: []
				// tabBarItemList: [{
				// 		name: "推荐"
				// 	}, {
				// 		name: "运动户外"
				// 	},
				// 	{
				// 		name: "衣状美食"
				// 	},
				// 	{
				// 		name: "户外生活"
				// 	},
				// 	{
				// 		name: "品牌专卖"
				// 	},
				// 	{
				// 		name: "瑜伽专卖"
				// 	},
				// 	{
				// 		name: "家电服务"
				// 	},
				// 	{
				// 		name: "家装服务"
				// 	},
				// 	{
				// 		name: "美食专卖"
				// 	}
				// ]
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

			this.__init()

		},

		onReady() {
			// 下面这段代码如果是动态通过接口获取view内容的话，就不生效了。会提示高度为空
			// 因为使用 uni.createSelectorQuery() 需要在生命周期 mounted（onReady) 后进行调用
			// let view = uni.createSelectorQuery().select('.home-data')
			// view.boundingClientRect(data => {
			// 	console.log('页面布局信息 ' + JSON.stringify(data))
			// 	//this.homeHeight = data.height
			// 	this.homeHeight = 5000;
			// }).exec()

			uni.getSystemInfo({
				success: (res) => {
					console.log(res.appName)
					const windowHeight = res.screenHeight
					console.log('可使用屏幕高度 ' + windowHeight)

					// 计算菜单栏的高度，将rpx转化为px
					const scrollHeight = uni.upx2px(80)

					this.homeHeight = windowHeight - scrollHeight - this.getClientHeight()
					console.log("homeHeight = " + this.homeHeight)

				}
			})

		},
		methods: {
			__init() {
				uni.request({
					url: "http://192.168.0.110:3000/api/index_list/data",
					success: (res) => {
						//console.log('tabBar ' + JSON.stringify(res.data.data.tabBar))
						this.tabBarItemList = res.data.data.tabBar
						//console.log(JSON.stringify(res.data.data))
						this.newTabPageList = this.initNewTabPageList(res.data.data)
						//console.log('newresult ' + JSON.stringify(this.newTabPageList))
					},

				})

			},
			getClientHeight: () => {
				const screen = plus.navigator.hasNotchInScreen()
				console.log("是否刘海屏 " + screen)
				let res = uni.getSystemInfoSync()
				const statusBarHeight = res.statusBarHeight
				const osName = res.osName
				console.log('osName' + osName)
				if (osName === 'ios') {
					if (screen) {
						return 40 + statusBarHeight
					} else {
						return statusBarHeight
					}

				} else if (osName == 'android') {
					if (screen) {
						return 40 + statusBarHeight
					} else {
						return statusBarHeight
					}
				} else {
					return 0
				}
				return liuhanHeight + statusBarHeight
			},
			initNewTabPageList(res) {

				let arr = []
				for (let i = 0; i < this.tabBarItemList.length; i++) {
					let obj = {
						data: []
					}
					if (i == 0) {
						obj.data = res.data
					}
					arr.push(obj)
				}
				return arr
			},
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

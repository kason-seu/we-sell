<template>

	<view class="card">
		<view class="">-</view>
		<slot>
			<view class="card-content">{{cardTitle}}</view>
		</slot>

		<view class="">-</view>
	</view>
</template>

<script>
	export default {
		props: ['cardTitle']
	}
</script>

<style scoped>
	.card {
		padding: 20rpx 0;
		display: flex;
		flex-direction: row;
		justify-content: center;
		font-weight: bold;
	}

	.card-content {
		margin-left: 10rpx;
		margin-right: 10rpx;
	}
</style>

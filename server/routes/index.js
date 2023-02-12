var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', {
		title: 'Express'
	});
});

router.get('/api/index_list/data', function(req, res, next) {
	res.json({
		"code": 0,
		"data": {

			tabBar: [{
					id: 1,
					name: "推荐"
				}, {
					id: 2,
					name: "运动户外"
				},
				{
					id: 3,
					name: "衣状美食"
				},
				{
					id: 4,
					name: "户外生活"
				},
				{
					id: 5,
					name: "品牌专卖"
				},
				{
					id: 6,
					name: "瑜伽专卖"
				},
				{
					id: 7,
					name: "家电服务"
				},
				{
					id: 8,
					name: "家装服务"
				},
				{
					id: 9,
					name: "美食专卖"
				}
			],
			data: [{
					type: "swiperList",
					data: [{
							imgUrl: "../../static/swiper/swiper1.png"
						},
						{
							imgUrl: "../../static/swiper/swiper2.png"
						},
						{
							imgUrl: "../../static/swiper/swiper3.png"
						}
					]
				},
				{
					type: "recommendList",
					data: [{
							bigUrl: "../../static/recommend/big-top-2.jpg",
							smallUrls: [{
								imgUrl: "../../static/recommend/small-4.jpg"
							}, {
								imgUrl: "../../static/recommend/small-5.jpg"
							}, {
								imgUrl: "../../static/recommend/small-6.jpg"
							}]
						},
						{
							bigUrl: "../../static/recommend/big-top-1.jpg",
							smallUrls: [{
								imgUrl: "../../static/recommend/small-1.jpg"
							}, {
								imgUrl: "../../static/recommend/small-2.jpg"
							}, {
								imgUrl: "../../static/recommend/small-3.jpg"
							}]
						}


					]
				},
				{
					type: "commodityList",
					data: [{
							id: 1,
							imgUrl: "../../static/commodity/item1.jpg",
							commodity_name: "大鹅绒毛新疆特产羊毛，2023年爆款热卖，限时7天售",
							current_price: 299,
							origin_price: 200,
							discount: 5
						},
						{
							id: 1,
							imgUrl: "../../static/commodity/item2.jpg",
							commodity_name: "大鹅绒毛新疆特产羊毛，2023年爆款热卖，限时7天售",
							current_price: 299,
							origin_price: 200,
							discount: 5
						},
						{
							id: 1,
							imgUrl: "../../static/commodity/item3.jpg",
							commodity_name: "大鹅绒毛新疆特产羊毛，2023年爆款热卖，限时7天售",
							current_price: 299,
							origin_price: 200,
							discount: 5
						},
						{
							id: 1,
							imgUrl: "../../static/commodity/item4.jpg",
							commodity_name: "大鹅绒毛新疆特产羊毛，2023年爆款热卖，限时7天售",
							current_price: 299,
							origin_price: 200,
							discount: 5
						}
					]
				}
			]
		}




	})
});
module.exports = router;

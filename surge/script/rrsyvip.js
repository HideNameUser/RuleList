// var date = new Date('2020-10-27 16:44:04');
// date.setFullYear(date.getFullYear()+1);
// var timeStr = date.getTime()
// console.log(date.getTime());
// https://api.rr.tv/user/profile 这个要返回vipMedal对象和privilegeList数组和medalList对象，并都需要修改endTime
// {
// 	"requestId": "4f63958aade545a6a76c46f37fd1ef1e",
// 	"code": "0000",
// 	"msg": "Success",
// 	"recordsTotal": null,
// 	"data": {
// 		"user": {
//             ...
// 			"medalList": [{
// 				"name": "大魔王",
// 				"endTime": "2020-10-27 16:44:04",
// 				"imgUrl": "http://img.rr.tv/cover/20200424/o_1587720799676.png",
// 				"id": 1
// 			}],
// 			"privilegeList": [{
// 				"id": null,
// 				"createTimeStr": "",
// 				"createTime": null,
// 				"updateTime": null,
// 				"effectObject": "video",
// 				"action": "play",
// 				"function": "originalPainting",
// 				"func": "originalPainting",
// 				"description": "解锁原画",
// 				"icon": "jiesuoyuanhua",
// 				"endTime": 1603788244362
// 			}, {
// 				"id": null,
// 				"createTimeStr": "",
// 				"createTime": null,
// 				"updateTime": null,
// 				"effectObject": "mall",
// 				"action": "sale",
// 				"function": "mallDiscount",
// 				"func": "mallDiscount",
// 				"description": "龙醇商城九折",
// 				"icon": "longchunshangcheng",
// 				"endTime": 1603788244362
// 			}, {
// 				"id": null,
// 				"createTimeStr": "",
// 				"createTime": null,
// 				"updateTime": null,
// 				"effectObject": "danmu",
// 				"action": "send",
// 				"function": "superBarrageBlue",
// 				"func": "superBarrageBlue",
// 				"description": "超级弹幕",
// 				"icon": "chaojidanmu",
// 				"endTime": 1603788244362
// 			}, {
// 				"id": null,
// 				"createTimeStr": "",
// 				"createTime": null,
// 				"updateTime": null,
// 				"effectObject": "video",
// 				"action": "play",
// 				"function": "vipVideo",
// 				"func": "vipVideo",
// 				"description": "勋章专享剧集",
// 				"icon": "zhuanxiangjuji",
// 				"endTime": 1603788244362
// 			}, {
// 				"id": null,
// 				"createTimeStr": "",
// 				"createTime": null,
// 				"updateTime": null,
// 				"effectObject": "growth",
// 				"action": "play",
// 				"function": "0.4",
// 				"func": "0.4",
// 				"description": "看剧经验+40%",
// 				"icon": "jingyanzhijiacheng",
// 				"endTime": 1603788244362
// 			}, {
// 				"id": null,
// 				"createTimeStr": "",
// 				"createTime": null,
// 				"updateTime": null,
// 				"effectObject": "video",
// 				"action": "play",
// 				"function": "noLimit",
// 				"func": "noLimit",
// 				"description": "看剧无限制",
// 				"icon": "kanjuwuxianzhi",
// 				"endTime": 1603788244362
// 			}, {
// 				"id": null,
// 				"createTimeStr": "",
// 				"createTime": null,
// 				"updateTime": null,
// 				"effectObject": "video",
// 				"action": "play",
// 				"function": "noAd",
// 				"func": "noAd",
// 				"description": "看剧无广告",
// 				"icon": "kanjuwuguanggao",
// 				"endTime": 1603788244362
// 			}],
// 			"vipMedal": {
// 				"name": "大魔王",
// 				"endTime": "2020-10-27 16:44:04",
// 				"imgUrl": "http://img.rr.tv/cover/20200424/o_1587720799676.png",
// 				"id": 1,
// 				"isExpired": false
// 			}
// 		}
// 	}
// }



// https://api.rr.tv/user/privilege/list  这个要返回data数组并修改endTime时间
// {
// 	"requestId": "a16e43681b754878aa38dae9aaf10695",
// 	"code": "0000",
// 	"msg": "Success",
// 	"recordsTotal": null,
// 	"data": [{
// 		"id": 1,
// 		"effectObject": "video",
// 		"action": "play",
// 		"function": "originalPainting",
// 		"func": "originalPainting",
// 		"description": "解锁原画",
// 		"icon": "jiesuoyuanhua",
// 		"endTime": 1603788244362
// 	}, {
// 		"id": 4,
// 		"effectObject": "video",
// 		"action": "play",
// 		"function": "noLimit",
// 		"func": "noLimit",
// 		"description": "看剧无限制",
// 		"icon": "kanjuwuxianzhi",
// 		"endTime": 1603788244362
// 	}, {
// 		"id": 23,
// 		"effectObject": "video",
// 		"action": "play",
// 		"function": "noAd",
// 		"func": "noAd",
// 		"description": "看剧无广告",
// 		"icon": "kanjuwuguanggao",
// 		"endTime": 1603788244362
// 	}, {
// 		"id": 43,
// 		"effectObject": "danmu",
// 		"action": "send",
// 		"function": "superBarrageBlue",
// 		"func": "superBarrageBlue",
// 		"description": "超级弹幕",
// 		"icon": "chaojidanmu",
// 		"endTime": 1603788244362
// 	}, {
// 		"id": 46,
// 		"effectObject": "video",
// 		"action": "play",
// 		"function": "vipVideo",
// 		"func": "vipVideo",
// 		"description": "勋章专享剧集",
// 		"icon": "zhuanxiangjuji",
// 		"endTime": 1603788244362
// 	}, {
// 		"id": 45,
// 		"effectObject": "mall",
// 		"action": "sale",
// 		"function": "mallDiscount",
// 		"func": "mallDiscount",
// 		"description": "龙醇商城九折",
// 		"icon": "longchunshangcheng",
// 		"endTime": 1603788244362
// 	}, {
// 		"id": 37,
// 		"effectObject": "growth",
// 		"action": "play",
// 		"function": "0.4",
// 		"func": "0.4",
// 		"description": "看剧经验+40%",
// 		"icon": "jingyanzhijiacheng",
// 		"endTime": 1603788244362
// 	}]
// }


// https://api.rr.tv/watch/v4/priority_video_quality/get_priority_video_quality_config?seasonId=17610 直接返回下面数据就行
// {
// 	"code": "0000",
// 	"msg": "Success",
// 	"data": {
// 		"sortedItems": [{
// 			"qualityDescription": "高清",
// 			"qualityCode": "SD",
// 			"canPlay": true,
// 			"canShowVip": false,
// 			"initialQuality": true
// 		}, {
// 			"qualityDescription": "超清",
// 			"qualityCode": "HD",
// 			"canPlay": true,
// 			"canShowVip": false,
// 			"initialQuality": false
// 		}, {
// 			"qualityDescription": "原画",
// 			"qualityCode": "OD",
// 			"canPlay": true,
// 			"canShowVip": true,
// 			"initialQuality": false
// 		}]
// 	},
// 	"traceId": null
// }
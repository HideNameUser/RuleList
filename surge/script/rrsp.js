var body = $response.body;
var url = $request.url;

if (url.indexOf('api.rr.tv/ad/getAll') != -1) {
	var obj = JSON.parse(body);
	obj.data.adList = [];
	body = JSON.stringify(obj);
}

$done({
	body
});
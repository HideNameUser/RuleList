var body = $response.body;
var url = $request.url;

if (url.indexOf('ios.zmzapi.com/index.php?a=user_ad') != -1) {
	var obj = JSON.parse(body);
	obj.data = [];
	body = JSON.stringify(obj);
}

$done({
	body
});
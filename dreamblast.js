var body = $response.body;
var obj = JSON.parse(body);
var inventory = obj["inventory"]
var items = inventory["items"]
console.log(inventory);
console.log(items);
for(var i in items){
    if(items[i]["id"]==='HardCoin'){
        items[i]["amount"]=100000000
    }
}
inventory["items"] = items;
obj["inventory"] = inventory;
res = JSON.stringify(obj);
console.log(res);
$done(res);
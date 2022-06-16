url = new Array();

for (let x = 0; x < 10; x++){
    var ranNum =Math.floor(Math.random() * 8 ) ;
}
var i = ranNum

url[i] = "./" + i + ".html";

str = "<a id='linkID' href='" + url[i] + "'>";
document.write(str + "點我看隨機</a><br>");
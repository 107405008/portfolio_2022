url = new Array();

for (let x = 0; x < 11; x++){
    var ranNum =Math.floor(Math.random() * 11 ) ;
}
var i = ranNum

url[i] = "./" + i + ".html";

str = "<a id='linkID' href='" + url[i] + "'>";
document.write(str + "點我看隨機</a><br>");
url = new Array();

for (let x = 0; x < 6; x++){
    var ranNum =Math.floor(Math.random() * 6 ) ;
}
var i = ranNum

url[i] = "./" + i + ".html";

str = "<a id='linkID' href='" + url[i] + "'>";
document.write(str + "點我一下</a><br>");
var currentFileName = window.location.pathname.split('/').pop();
var ranNum;
var fileName;

do {
    ranNum =Math.floor(Math.random() * 11 ) ;
    fileName = ranNum + ".html";

} while (fileName === currentFileName);

url = new Array();
var i = ranNum;

url[i] = "./" + i + ".html";

str = "<a id='linkID' href='" + url[i] + "'>";
document.write(str + "點我一下</a><br>");

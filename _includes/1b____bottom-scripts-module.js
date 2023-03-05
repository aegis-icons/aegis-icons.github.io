// ==== Parse JSON and print latest release version via repo tag ====
function successListener() {  
  var data = JSON.parse(this.responseText);  
  document.getElementById("release-date").innerHTML = ""+data.tag_name
}

var request = new XMLHttpRequest();  
request.onload = successListener;
request.open('get','https://api.github.com/repos/aegis-icons/aegis-icons/releases/latest',true);  
request.send();
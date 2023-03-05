// ==== Count the icons and print the results ====
document.getElementById("total-icon-count").innerHTML = document.querySelectorAll('.n').length;
document.getElementById("icon-amount-pri").innerHTML  = document.querySelectorAll('#primary .n').length;
document.getElementById("icon-amount-var").innerHTML  = document.querySelectorAll('#variations .n').length;
document.getElementById("icon-amount-gen").innerHTML  = document.querySelectorAll('#generic .n').length;
document.getElementById("icon-amount-out").innerHTML  = document.querySelectorAll('#outdated .n').length;

// ==== Parse JSON and print latest release version via repo tag ====
function successListener() {  
  var data = JSON.parse(this.responseText);  
  document.getElementById("release-date").innerHTML = ""+data.tag_name
}

var request = new XMLHttpRequest();  
request.onload = successListener;
request.open('get','https://api.github.com/repos/aegis-icons/aegis-icons/releases/latest',true);  
request.send();
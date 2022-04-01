// ==== VARs used more then once ====
  var rootElement = document.documentElement;

// ==== List.js search function ====
  var listNames = ['primary', 'variations', 'generic', 'outdated'];

  var lists = listNames.map(function (name) { return new List(name, { valueNames: ['name'] }); });

  var search = document.querySelector('.search');
  search.addEventListener('keyup', function () {
    var searchValue = this.value;
    lists.forEach(function (list) { list.search(searchValue); });
    
    // ▼ Scroll up (but stop before of #gradient-bg element)
    headerElem = document.querySelector("#gradient-bg");
    headerHeight = headerElem.offsetHeight;
    rootElement.scrollTo({ top: headerHeight });
  });

// ==== Reset button function and List.js search clearing ====
  var resetButton = document.querySelector('button.reset');
  resetButton.addEventListener('click', function () {
    search.value = '';
    lists.forEach(function (list) { list.search(); });
    
    headerElem = document.querySelector("#gradient-bg");
    headerHeight = headerElem.offsetHeight;
    rootElement.scrollTo({ top: headerHeight });
  });

// ==== Count the icons and print the results ====
  document.getElementById("icon-amount-all").innerHTML = document.querySelectorAll('.icon').length;
  document.getElementById("icon-amount-primary").innerHTML = document.querySelectorAll('#primary .icon').length;

// ==== "Scroll to the top" button ====
  scrollToTopBtn = document.getElementById("scroll-to-top");
  
  // ▼ At 1200px Y axis mark, add class for button (else, remove / do nothing)
  var myScrollFunc = function () {
    var y = window.scrollY;
    if (y >= 1200) { scrollToTopBtn.classList.add("show"); }
    else { scrollToTopBtn.classList.remove("show"); }
  };
  
  // ▼ Scroll to the top function
  function scrollToTop() { rootElement.scrollTo({ top: 0 }); }
  window.addEventListener("scroll", myScrollFunc);
  scrollToTopBtn.addEventListener("click", scrollToTop);
  
  // ▼ If at the bottom of page, add class (so it's possible to hide it for mobile with CSS)
  window.onscroll = function(event) {
    // The "+ 100" makes so that this triggers *slightly* earlier, fixes problem with Firefox Android
    if ((window.innerHeight + Math.ceil(window.pageYOffset) + 100) >= document.body.offsetHeight) { scrollToTopBtn.classList.add("hide-mobile"); }
    else { scrollToTopBtn.classList.remove("hide-mobile"); }
  };
  
// ==== Parse JSON and print latest release version via repo tag ====
  function successListener() {  
    var data = JSON.parse(this.responseText);  
    document.getElementById("release-date").innerHTML = ""+data.tag_name
  }
  
  var request = new XMLHttpRequest();  
  request.onload = successListener;
  request.open('get','https://api.github.com/repos/aegis-icons/aegis-icons/releases/latest',true);  
  request.send();
// ==== Used more then once ====
  var search = document.querySelector('.search');
  var rootElement = document.documentElement;
  var headerHeight = document.querySelector("#gradient-bg").offsetHeight;
  const isMobile = ('ontouchstart' in document.documentElement && navigator.userAgent.match(/Mobi/));
  var scrollToTopBtn = document.getElementById("scroll-to-top");
  const labelAll = document.querySelectorAll('.label');

// ==== List.js search function ====
  var listNames = ['primary', 'variations', 'generic', 'outdated'];
  var lists = listNames.map(function (name) { return new List(name, { valueNames: ['n'] }); });

  var searchTrigger = function (event) {
    var searchValue = this.value;
    lists.forEach(function (list) { list.search(searchValue); }); 
    // ▼ Scroll and stop before of #gradient-bg
    // ▼▼ If mobile device
    if (isMobile) { rootElement.scrollTo({ top: headerHeight }); }
    // ▼▼ If PC device (and only if scrolled over #gradient-bg)
    if (!isMobile && (headerHeight <= Math.ceil(window.pageYOffset)) == true) { rootElement.scrollTo({ top: headerHeight }); };
    // ▼ Hide icon count labels when searching
    for (const label of labelAll) {
      label.classList.add('hide');
    // ▼▼ Remove class if search input is empty
      if (search.value.length == 0) { label.classList.remove('hide'); }
    }
  };

  // ▼▼ Trigger search by either typing or pasting
  search.addEventListener('keyup', searchTrigger, false);
  search.addEventListener('paste', searchTrigger, false);

// ==== Reset button function and List.js search clearing ====
  var resetButton = document.querySelector('button.reset');
  
  resetButton.addEventListener('click', function () {
    // ▼ Only trigger if input has text
    if (!search.value == '') {
      search.value = '';
      lists.forEach(function (list) { list.search(); });
      // ▼▼ Scroll (only if scrolled over #gradient-bg) and stop before of #gradient-bg
      if (headerHeight <= Math.ceil(window.pageYOffset) == true) { rootElement.scrollTo({ top: headerHeight }); }
      for (const label of labelAll) { label.classList.remove('hide'); }
    }
  });

// ==== Count the icons and print the results ====
  document.getElementById("total-icon-count").innerHTML = document.querySelectorAll('.n').length;
  document.getElementById("icon-amount-pri").innerHTML  = document.querySelectorAll('#primary .n').length;
  document.getElementById("icon-amount-var").innerHTML  = document.querySelectorAll('#variations .n').length;
  document.getElementById("icon-amount-gen").innerHTML  = document.querySelectorAll('#generic .n').length;
  document.getElementById("icon-amount-out").innerHTML  = document.querySelectorAll('#outdated .n').length;

// ==== "Scroll to the top" button ===
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
    // ▼▼ The "+ 100" triggers it 100px earlier, fixes problem with Firefox Android
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
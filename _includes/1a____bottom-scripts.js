// ==== Used more then once ====
  var search = document.querySelector('.search');
  var rootElement = document.documentElement;
  var headerHeight = document.querySelector("#gradient-bg").offsetHeight;
  const isMobile = ('ontouchstart' in document.documentElement);
  var scrollToTopBtn = document.getElementById("scroll-to-top");
  const labelAll = document.querySelectorAll('.label');

// ==== List.js search function ====
  var listNames = ['primary', 'variations', 'generic', 'outdated'];
  var lists = listNames.map(function (name) { return new List(name, { valueNames: ['n'] }); });

  var searchTrigger = function (e) {
    var searchValue = this.value;
    lists.forEach(function (list) { list.search(searchValue); }); 
    // ▼ Scroll and stop before of #gradient-bg
    // ▼▼ If mobile device
    if (isMobile) { rootElement.scrollTo({ top: headerHeight }); }
    // ▼▼ If PC (and only if scrolled over #gradient-bg)
    if (!isMobile && (headerHeight <= Math.ceil(window.scrollY)) == true) { rootElement.scrollTo({ top: headerHeight }); };
    // ▼ Hide icon count labels when searching
    for (const label of labelAll) {
      label.classList.add('hide');
      // ▼▼ Remove class if search input is empty
      if (search.value.length == 0) { label.classList.remove('hide'); }
    }
  };

  // ▼ Trigger search
  ['input'].forEach(function(e) { search.addEventListener(e, searchTrigger); });

// ==== Reset button function and List.js search clearing ====
  var resetButton = document.querySelector('button.reset');
  
  resetButton.addEventListener('click', function () {
    // ▼ Only trigger if input has text
    if (!search.value == '') {
      search.value = '';
      lists.forEach(function (list) { list.search(); } );
      // ▼▼ Scroll (only if scrolled over #gradient-bg) and stop before of #gradient-bg
      if (headerHeight <= Math.ceil(window.scrollY) == true) { rootElement.scrollTo({ top: headerHeight }); }
      for (const label of labelAll) { label.classList.remove('hide'); }
    }
  });

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
    // ▼▼ The "+ 150" triggers it 150 px earlier, fixes problem with Firefox Android
    if ((window.innerHeight + Math.ceil(window.scrollY) + 150) >= document.body.offsetHeight) { scrollToTopBtn.classList.add("hide-mobile"); }
    else { scrollToTopBtn.classList.remove("hide-mobile"); }
  };
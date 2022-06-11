!function s(n,i,a){function o(e,t){if(!i[e]){if(!n[e]){var r="function"==typeof require&&require;if(!t&&r)return r(e,!0);if(l)return l(e,!0);throw(t=Error("")).code="",t}r=i[e]={exports:{}},n[e][0].call(r.exports,function(t){return o(n[e][1][t]||t)},r,r.exports,s,n,i,a)}return i[e].exports}for(var l="function"==typeof require&&require,t=0;t<a.length;t++)o(a[t]);return o}({1:[function(s,t,e){function n(t,e,r){var a=this,o=s("./src/item")(a),l=s("./src/add-async")(a);this.reIndex=function(){a.items=[],a.visibleItems=[],a.matchingItems=[],a.searched=!1,a.filtered=!1,a.parse(a.list)},this.toJSON=function(){for(var t=[],e=0,r=a.items.length;e<r;e++)t.push(a.items[e].values());return t},this.add=function(t,e){if(0!==t.length){if(!e){for(var r=[],s=0,n=(t=t[0]===u?[t]:t).length;s<n;s++){var i=a.items.length>a.page,i=new o(t[s],u,i);a.items.push(i),r.push(i)}return a.update(),r}l(t,e)}},this.show=function(t,e){return this.i=t,this.page=e,a.update(),a},this.remove=function(t,e,r){for(var s=0,n=0,i=a.items.length;n<i;n++)a.items[n].values()[t]==e&&(a.templater.remove(a.items[n],r),a.items.splice(n,1),i--,n--,s++);return a.update(),s},this.get=function(t,e){for(var r=[],s=0,n=a.items.length;s<n;s++){var i=a.items[s];i.values()[t]==e&&r.push(i)}return r},this.size=function(){return a.items.length},this.clear=function(){return a.templater.clear(),a.items=[],a},this.on=function(t,e){return a.handlers[t].push(e),a},this.off=function(t,e){return t=a.handlers[t],-1<(e=d(t,e))&&t.splice(e,1),a},this.trigger=function(t){for(var e=a.handlers[t].length;e--;)a.handlers[t][e](a);return a},this.reset={filter:function(){for(var t=a.items,e=t.length;e--;)t[e].filtered=!1;return a},search:function(){for(var t=a.items,e=t.length;e--;)t[e].found=!1;return a}},this.update=function(){var t=a.items,e=t.length,r=i.createDocumentFragment();a.visibleItems=[],a.matchingItems=[],a.templater.clear();for(var s=0;s<e;s++)t[s].matching()&&a.matchingItems.length+1>=a.i&&a.visibleItems.length<a.page?(a.templater.create(t[s]),r.appendChild(t[s].elm),a.visibleItems.push(t[s]),a.matchingItems.push(t[s])):t[s].matching()&&a.matchingItems.push(t[s]);return a.list.appendChild(r),a.trigger("updated"),a},{start:function(){a.listClass="list",a.searchClass="search",a.sortClass="sort",a.page=1e4,a.i=1,a.items=[],a.visibleItems=[],a.matchingItems=[],a.searched=!1,a.filtered=!1,a.searchColumns=u,a.handlers={updated:[]},a.plugins={},a.valueNames=[],a.utils={getByClass:c,extend:f,indexOf:d,events:h,toString:m,naturalSort:v,classes:p,getAttribute:g,toArray:y},a.utils.extend(a,e),a.listContainer="string"==typeof t?i.getElementById(t):t,a.listContainer&&(a.list=c(a.listContainer,a.listClass,!0),a.parse=s("./src/parse")(a),a.templater=s("./src/templater")(a),a.search=s("./src/search")(a),a.filter=s("./src/filter")(a),a.sort=s("./src/sort")(a),this.handlers(),this.items(),a.update(),this.plugins())},handlers:function(){for(var t in a.handlers)a[t]&&a.on(t,a[t])},items:function(){a.parse(a.list),r!==u&&a.add(r)},plugins:function(){for(var t=0;t<a.plugins.length;t++){var e=a.plugins[t];(a[e.name]=e).init(a,n)}}}.start()}var r,u,i,c,f,d,h,m,v,p,g,y;r=window,i=r.document,c=s("./src/utils/get-by-class"),f=s("./src/utils/extend"),d=s("./src/utils/index-of"),h=s("./src/utils/events"),m=s("./src/utils/to-string"),v=s("./src/utils/natural-sort"),p=s("./src/utils/classes"),g=s("./src/utils/get-attribute"),y=s("./src/utils/to-array"),"function"==typeof define&&define.amd&&define(function(){return n}),t.exports=n,r.List=n},{"./src/add-async":2,"./src/filter":3,"./src/item":4,"./src/parse":5,"./src/search":6,"./src/sort":7,"./src/templater":8,"./src/utils/classes":9,"./src/utils/events":10,"./src/utils/extend":11,"./src/utils/get-attribute":12,"./src/utils/get-by-class":13,"./src/utils/index-of":14,"./src/utils/natural-sort":15,"./src/utils/to-array":16,"./src/utils/to-string":17}],2:[function(t,e,r){e.exports=function(i){return function t(e,r,s){var n=e.splice(0,50);s=(s=s||[]).concat(i.add(n)),0<e.length?setTimeout(function(){t(e,r,s)},1):(i.update(),r(s))}}},{}],3:[function(t,e,r){e.exports=function(i){return i.handlers.filterStart=i.handlers.filterStart||[],i.handlers.filterComplete=i.handlers.filterComplete||[],function(t){if(i.trigger("filterStart"),i.i=1,i.reset.filter(),void 0===t)i.filtered=!1;else{i.filtered=!0;for(var e=i.items,r=0,s=e.length;r<s;r++){var n=e[r];t(n)?n.filtered=!0:n.filtered=!1}}return i.update(),i.trigger("filterComplete"),i.visibleItems}}},{}],4:[function(t,e,r){e.exports=function(n){return function(t,e,r){var s=this;this._values={},this.filtered=this.found=!1,this.values=function(t,e){if(void 0===t)return s._values;for(var r in t)s._values[r]=t[r];!0!==e&&n.templater.set(s,s.values())},this.show=function(){n.templater.show(s)},this.hide=function(){n.templater.hide(s)},this.matching=function(){return n.filtered&&n.searched&&s.found&&s.filtered||n.filtered&&!n.searched&&s.filtered||!n.filtered&&n.searched&&s.found||!n.filtered&&!n.searched},this.visible=function(){return!(!s.elm||s.elm.parentNode!=n.list)},void 0===e?r?s.values(t,r):s.values(t):(s.elm=e,r=n.templater.get(s,t),s.values(r))}}},{}],5:[function(t,e,r){e.exports=function(n){function i(t,e){for(var r=0,s=t.length;r<s;r++)n.items.push(new o(e,t[r]))}function a(t,e){i(t.splice(0,50),e),0<t.length?setTimeout(function(){a(t,e)},1):(n.update(),n.trigger("parseComplete"))}var o=t("./item")(n);return n.handlers.parseComplete=n.handlers.parseComplete||[],function(){for(var t=n.list.childNodes,e=[],r=0,s=t.length;r<s;r++)void 0===t[r].data&&e.push(t[r]);(n.indexAsync?a:i)(e,n.valueNames)}}},{"./item":4}],6:[function(t,e,r){var u=/[-[\]{}()*+?.,\\^$|#]/g;e.exports=function(r){function e(t){return r.trigger("searchStart"),o.resetList(),o.setSearchPattern(t),o.setOptions(arguments),o.setColumns(),i?(r.searched=!0,a?a(i,n):l.list()):l.reset(),r.update(),r.trigger("searchComplete"),r.visibleItems}var s,n,i,a,o={resetList:function(){r.i=1,r.templater.clear(),a=void 0},setOptions:function(t){2==t.length&&t[1]instanceof Array?n=t[1]:2==t.length&&"function"==typeof t[1]?(n=void 0,a=t[1]):3==t.length?(n=t[1],a=t[2]):n=void 0},setColumns:function(){0!==r.items.length&&void 0===n&&(n=void 0===r.searchColumns?o.toArray(r.items[0].values()):r.searchColumns)},setSearchPattern:function(t){return""===(t=r.utils.toString(t).toLowerCase())?void(i=void 0):(t=t.replace(u,"\\$&"),void(i=new RegExp(t,"i")))},toArray:function(t){var e,r=[];for(e in t)r.push(e);return r}},l={list:function(){for(var t=0,e=r.items.length;t<e;t++)l.item(r.items[t])},item:function(t){t.found=!1;for(var e=0,r=n.length;e<r;e++)if(l.values(t.values(),n[e]))return void(t.found=!0)},values:function(t,e){return!!(t.hasOwnProperty(e)&&(s=r.utils.toString(t[e]),i&&i.test(s)))},reset:function(){r.reset.search(),r.searched=!1}};return r.handlers.searchStart=r.handlers.searchStart||[],r.handlers.searchComplete=r.handlers.searchComplete||[],r.utils.events.bind(r.utils.getByClass(r.listContainer,r.searchClass),"keyup",function(t){""===(t=t.target||t.srcElement).value&&!r.searched||e(t.value)}),r.utils.events.bind(r.utils.getByClass(r.listContainer,r.searchClass),"input",function(t){""===(t.target||t.srcElement).value&&e("")}),e}},{}],7:[function(t,e,r){e.exports=function(i){function t(t,e){i.trigger("sortStart");var s={},r=t.currentTarget||t.srcElement||void 0;r?(s.valueName=i.utils.getAttribute(r,"data-sort"),a.getInSensitive(r,s),s.order=a.getOrder(r)):((s=e||s).valueName=t,s.order=s.order||"asc",s.insensitive=void 0===s.insensitive||s.insensitive),a.clear(),a.setOrder(s),s.sortFunction=s.sortFunction||i.sortFunction,i.items.sort(function(t,e){var r="desc"===s.order?-1:1;return s.sortFunction(t,e,s)*r}),i.update(),i.trigger("sortComplete")}i.sortFunction=i.sortFunction||function(t,e,r){return r.desc="desc"==r.order,i.utils.naturalSort(t.values()[r.valueName],e.values()[r.valueName],r)};var a={els:void 0,clear:function(){for(var t=0,e=a.els.length;t<e;t++)i.utils.classes(a.els[t]).remove("asc"),i.utils.classes(a.els[t]).remove("desc")},getOrder:function(t){var e=i.utils.getAttribute(t,"data-order");return"asc"==e||"desc"==e?e:!i.utils.classes(t).has("desc")&&i.utils.classes(t).has("asc")?"desc":"asc"},getInSensitive:function(t,e){t=i.utils.getAttribute(t,"data-insensitive"),e.insensitive="false"!==t},setOrder:function(t){for(var e=0,r=a.els.length;e<r;e++){var s,n=a.els[e];i.utils.getAttribute(n,"data-sort")===t.valueName&&("asc"!=(s=i.utils.getAttribute(n,"data-order"))&&"desc"!=s||s==t.order)&&i.utils.classes(n).add(t.order)}}};return i.handlers.sortStart=i.handlers.sortStart||[],i.handlers.sortComplete=i.handlers.sortComplete||[],a.els=i.utils.getByClass(i.listContainer,i.sortClass),i.utils.events.bind(a.els,"click",t),i.on("searchStart",a.clear),i.on("filterStart",a.clear),t}},{}],8:[function(t,e,r){function s(c){var f=this,r=(this.clearSourceItem=function(t,e){for(var r=0,s=e.length;r<s;r++){if(e[r].data)for(var n=0,i=e[r].data.length;n<i;n++)t.setAttribute("data-"+e[r].data[n],"");else e[r].attr&&e[r].name?(n=c.utils.getByClass(t,e[r].name,!0))&&n.setAttribute(e[r].attr,""):(n=c.utils.getByClass(t,e[r],!0))&&(n.innerHTML="");n=void 0}return t},this.getItemSource=function(t){if(void 0!==t)return/<tr[\s>]/g.exec(t)?((e=document.createElement("tbody")).innerHTML=t,e.firstChild):-1!==t.indexOf("<")?((e=document.createElement("div")).innerHTML=t,e.firstChild):document.getElementById(c.item)||void 0;for(var e=0,r=(t=c.list.childNodes).length;e<r;e++)if(void 0===t[e].data)return t[e].cloneNode(!0)},this.get=function(t,e){f.create(t);for(var r={},s=0,n=e.length;s<n;s++){if(e[s].data)for(var i=0,a=e[s].data.length;i<a;i++)r[e[s].data[i]]=c.utils.getAttribute(t.elm,"data-"+e[s].data[i]);else e[s].attr&&e[s].name?(i=c.utils.getByClass(t.elm,e[s].name,!0),r[e[s].name]=i?c.utils.getAttribute(i,e[s].attr):""):(i=c.utils.getByClass(t.elm,e[s],!0),r[e[s]]=i?i.innerHTML:"");i=void 0}return r},this.set=function(t,e){if(!f.create(t))for(var r in e)if(e.hasOwnProperty(r)){var s=r,r=e[r],n=void 0;t:{for(var i=0,a=c.valueNames.length;i<a;i++)if(c.valueNames[i].data){for(var o=c.valueNames[i].data,l=0,u=o.length;l<u;l++)if(o[l]===s){s={data:s};break t}}else{if(c.valueNames[i].attr&&c.valueNames[i].name&&c.valueNames[i].name==s){s=c.valueNames[i];break t}if(c.valueNames[i]===s)break t}s=void 0}s&&(s.data?t.elm.setAttribute("data-"+s.data,r):s.attr&&s.name?(n=c.utils.getByClass(t.elm,s.name,!0))&&n.setAttribute(s.attr,r):(n=c.utils.getByClass(t.elm,s,!0))&&(n.innerHTML=r))}},this.create=function(t){if(void 0!==t.elm)return!1;if(void 0===r)throw Error("");var e=r.cloneNode(!0);return e.removeAttribute("id"),t.elm=e,f.set(t,t.values()),!0},this.remove=function(t){t.elm.parentNode===c.list&&c.list.removeChild(t.elm)},this.show=function(t){f.create(t),c.list.appendChild(t.elm)},this.hide=function(t){void 0!==t.elm&&t.elm.parentNode===c.list&&c.list.removeChild(t.elm)},this.clear=function(){var t;if("function"==typeof document.createRange)return(t=document.createRange()).selectNodeContents(c.list),void t.deleteContents();if(c.list.hasChildNodes())for(;1<=c.list.childNodes.length;)c.list.removeChild(c.list.firstChild)},(r=f.getItemSource(c.item))&&f.clearSourceItem(r,c.valueNames))}e.exports=function(t){return new s(t)}},{}],9:[function(t,e,r){function s(t){if(!t||!t.nodeType)throw Error("");this.el=t,this.list=t.classList}var n=t("./index-of"),i=/\s+/,a=Object.prototype.toString;e.exports=function(t){return new s(t)},s.prototype.add=function(t){if(this.list)return this.list.add(t),this;var e=this.array();return~n(e,t)||e.push(t),this.el.className=e.join(""),this},s.prototype.remove=function(t){if("[object RegExp]"==a.call(t))return this.removeMatching(t);if(this.list)return this.list.remove(t),this;var e=this.array();return~(t=n(e,t))&&e.splice(t,1),this.el.className=e.join(""),this},s.prototype.removeMatching=function(t){for(var e=this.array(),r=0;r<e.length;r++)t.test(e[r])&&this.remove(e[r]);return this},s.prototype.toggle=function(t,e){return this.list?void 0!==e&&e===this.list.toggle(t,e)||this.list.toggle(t):void 0!==e?e?this.add(t):this.remove(t):this.has(t)?this.remove(t):this.add(t),this},s.prototype.array=function(){var t=(this.el.getAttribute("class")||"").replace(/^\s+|\s+$/g,"").split(i);return""===t[0]&&t.shift(),t},s.prototype.has=s.prototype.contains=function(t){return this.list?this.list.contains(t):!!~n(this.array(),t)}},{"./index-of":14}],10:[function(t,e,r){var i=window.addEventListener?"addEventListener":"attachEvent",a=window.removeEventListener?"removeEventListener":"detachEvent",o="addEventListener"!=i?"on":"",l=t("./to-array");r.bind=function(t,e,r,s){t=l(t);for(var n=0;n<t.length;n++)t[n][i](o+e,r,s||!1)},r.unbind=function(t,e,r,s){t=l(t);for(var n=0;n<t.length;n++)t[n][a](o+e,r,s||!1)}},{"./to-array":16}],11:[function(t,e,r){e.exports=function(t){for(var e,r=Array.prototype.slice.call(arguments,1),s=0;e=r[s];s++)if(e)for(var n in e)t[n]=e[n];return t}},{}],12:[function(t,e,r){e.exports=function(t,e){var r=t.getAttribute&&t.getAttribute(e)||null;if(!r)for(var s=t.attributes.length,n=0;n<s;n++)void 0!==e[n]&&e[n].nodeName===e&&(r=e[n].nodeValue);return r}},{}],13:[function(t,e,r){e.exports=document.getElementsByClassName?function(t,e,r){return r?t.getElementsByClassName(e)[0]:t.getElementsByClassName(e)}:document.querySelector?function(t,e,r){return e="."+e,r?t.querySelector(e):t.querySelectorAll(e)}:function(t,e,r){var s=[],n=(t=(null===t?document:t).getElementsByTagName("*")).length;e=new RegExp("(^|\\s)"+e+"(\\s|$)");for(var i=0,a=0;i<n;i++)if(e.test(t[i].className)){if(r)return t[i];s[a]=t[i],a++}return s}},{}],14:[function(t,e,r){var s=[].indexOf;e.exports=function(t,e){if(s)return t.indexOf(e);for(var r=0;r<t.length;++r)if(t[r]===e)return r;return-1}},{}],15:[function(t,e,r){e.exports=function(t,e,r){function s(t){return(h.insensitive&&(""+t).toLowerCase()||""+t).replace(u,"")}function n(t,e){return(!t.match(d)||1==e)&&parseFloat(t)||t.replace(c,"").replace(u,"")||0}var i,a,o,l=/(^([+\-]?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?(?=\D|\s|$))|^0x[\da-fA-F]+$|\d+)/g,u=/^\s+|\s+$/g,c=/\s+/g,f=/^0x[0-9a-f]+$/i,d=/^0/,h=r||{},m=(r=s(t),t=s(e),r.replace(l,"\0$1\0").replace(/\0$/,"").replace(/^\0/,"").split("\0")),v=t.replace(l,"\0$1\0").replace(/\0$/,"").replace(/^\0/,"").split("\0");if(e=parseInt(r.match(f),16)||1!==m.length&&Date.parse(r),l=parseInt(t.match(f),16)||e&&t.match(/(^([\w ]+,?[\w ]+)?[\w ]+,?[\w ]+\d+:\d+(:\d+)?[\w ]?|^\d{1,4}[\/\-]\d{1,4}[\/\-]\d{1,4}|^\w+, \w+ \d+, \d{4})/)&&Date.parse(t)||null){if(e<l)return-1;if(l<e)return 1}for(t=0,e=m.length,r=v.length,l=Math.max(e,r);t<l;t++){if(i=n(m[t]||"",e),a=n(v[t]||"",r),isNaN(i)!==isNaN(a))return isNaN(i)?1:-1;if(/[^\x00-\x80]/.test(i+a)&&i.localeCompare)return(o=i.localeCompare(a))/Math.abs(o);if(i<a)return-1;if(a<i)return 1}return 0}},{}],16:[function(t,e,r){e.exports=function(t){if(void 0===t)return[];if(null===t)return[null];if(t===window)return[window];if("string"==typeof t)return[t];if("[object Array]"===Object.prototype.toString.call(t))return t;if("number"!=typeof t.length||"function"==typeof t&&t instanceof Function)return[t];for(var e=[],r=0;r<t.length;r++)(Object.prototype.hasOwnProperty.call(t,r)||r in t)&&e.push(t[r]);return e.length?e:[]}},{}],17:[function(t,e,r){e.exports=function(t){return(null===(t=void 0===t?"":t)?"":t).toString()}},{}]},{},[1]);
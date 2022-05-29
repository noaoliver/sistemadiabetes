/*! Thrive Architect - 2021-06-18
* http://www.thrivethemes.com/
* Copyright (c) 2021 Thrive Themes */

"use strict";function _possibleConstructorReturn(t,e){return!e||"object"!==_typeof(e)&&"function"!=typeof e?_assertThisInitialized(t):e}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _getPrototypeOf(t){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&_setPrototypeOf(t,e)}function _setPrototypeOf(t,e){return(_setPrototypeOf=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(n,!0).forEach(function(t){_defineProperty(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function _defineProperty(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}!function(c){var f,d,a,g,h,o={".js":[],".json":[],".css":[],".html":[]},u="function"==typeof require?require:null;return g=function(t){var e=new Error("Could not find module '"+t+"'");return e.code="MODULE_NOT_FOUND",e},h=function(t,e,n){var r,a;if("function"==typeof t[e+n])return e+n;for(r=0;a=o[n][r];++r)if("function"==typeof t[e+a])return e+a;return null},f=function(t,e,n,r,a,o){var i,s,c,u,l,p;for("."!==(i=(n=n.split("/")).pop())&&".."!==i||(n.push(i),i="");null!=(s=n.shift());)if(s&&"."!==s&&(".."===s?(t=e.pop(),o=o.slice(0,o.lastIndexOf("/"))):(e.push(t),t=t[s],o+="/"+s),!t))throw g(r);if(i&&"function"!=typeof t[i]&&((p=(p=(p=(p=h(t,i,".js"))||h(t,i,".json"))||h(t,i,".css"))||h(t,i,".html"))?i=p:2!==a&&"object"===_typeof(t[i])&&(e.push(t),t=t[i],o+="/"+i,i="")),!i)return 1!==a&&t[":mainpath:"]?f(t,e,t[":mainpath:"],r,1,o):f(t,e,"index",r,2,o);if(!(l=t[i]))throw g(r);return l.hasOwnProperty("module")?l.module.exports:(c={},l.module=u={exports:c,id:o+"/"+i},l.call(c,c,u,d(t,e,o)),u.exports)},a=function(t,e,n,r){var a,o=n,i=n.charAt(0),s=0;if("/"===i){if(o=o.slice(1),!(t=c["/"])){if(u)return u(n);throw g(n)}r="/",e=[]}else if("."!==i){if(a=o.split("/",1)[0],!(t=c[a])){if(u)return u(n);throw g(n)}r=a,e=[],(o=o.slice(a.length+1))||(s=(o=t[":mainpath:"])?1:(o="index",2))}return f(t,e,o,n,s,r)},(d=function(e,n,r){return function(t){return a(e,[].concat(n),t,r)}})(c,[],"")}({workspace:{editor:{js:{frontend:{modules:{"pagination.js":function(t,e,n){void 0===TCB_Front.js_modules.pagination&&TCB_Front.setModuleLoadedStatus("pagination",!1),function(o){if(!TCB_Front.isModuleLoaded("pagination")){var i="tcb-pagination-number",s="tcb-pagination-current",c="tcb-pagination-dots",u="tcb-pagination-link",l="tcb-pagination-button",p="tcb-permanently-hidden",t=function(){function n(t,e){_classCallCheck(this,n),this.type=t,this.list=e,this.$element=o('.tcb-pagination[data-list="'.concat(this.list.identifier,'"]'))}return _createClass(n,[{key:"addLoadListeners",value:function(){console.warn("Overwrite this function!")}},{key:"load",value:function(){console.warn("Overwrite this function!")}},{key:"render",value:function(){console.warn("Overwrite this function!")}},{key:"isLoading",value:function(){return this.list.isLoading()}},{key:"enableLoading",value:function(t){var e=0<arguments.length&&void 0!==t?t:"";this.list.enableLoading(e)}},{key:"disableLoading",value:function(){this.list.disableLoading()}},{key:"getTotalPostCount",value:function(){var t=0;return t+=Number(this.list.listArgs.attr.total_post_count)||0,t+=Number(this.list.listArgs.attr.total_sticky_count)||0}}],[{key:"factory",value:function(t,e){var n,r={load_more:d,numeric:f},a=ThriveGlobal.$j.Event("tcb_pagination_extra_classes.tcb");return e.$element.trigger(a),a.paginationClasses&&(r=_objectSpread({},r,{},a.paginationClasses)),void 0===r[t]?console.warn("A pagination class for this type does not exist!"):n=r[t],new n(t,e)}}]),n}(),f=function(){function a(t,e){var n;_classCallCheck(this,a);var r=(n=_possibleConstructorReturn(this,_getPrototypeOf(a).call(this,t,e))).list.listArgs;return n.firstPage=1,n.postsPerPage=Math.max(parseInt(r.query?r.query.posts_per_page:r.attr.posts_per_page),1),n.lastPage=Math.ceil(n.getTotalPostCount()/n.postsPerPage),n.currentPage=parseInt(r.query?r.query.paged:r.attr.paged),n.pagesAroundCurrent=parseInt(r.attr.pages_near_current),n.totalPages=n.lastPage,n.buttons={},n.$element.attr("data-ct")||n.$element.attr("data-ct","pagination-123"),["first","last","prev","next"].forEach(function(t){var e=n.$element.find(".".concat(l,".tcb-pagination-").concat(t));switch(t){case"first":case"last":e.attr("data-page",n["".concat(t,"Page")])}n.buttons["$"+t]=e}),n.$pageNumberContainer=n.$element.find(".tcb-pagination-numbers-wrapper"),n.$label=n.$element.find(".tcb-pagination-label"),n}return _inherits(a,t),_createClass(a,[{key:"addLoadListeners",value:function(){var n=this;this.$element.on("click",".".concat(l),function(t){var e=o(t.target).closest(".".concat(l));n.load(e.attr("data-page"))}),this.$element.on("click",".".concat(i,":not(.").concat(s,", .").concat(c,")"),function(t){return n.load(t.currentTarget.dataset.page)})}},{key:"load",value:function(t){var e=this;if(t&&!this.isLoading()){this.enableLoading(),this.currentPage=parseInt(t);var n=this.list.listArgs;void 0===n.query?n.attr.paged=this.currentPage:n.query.paged=this.currentPage,this.list.getItems(function(t){e.list.insertItems(t,!0),e.render(),e.disableLoading()},n)}}},{key:"render",value:function(){this.renderButtons(),this.renderLabel(),this.renderPageNumbers(),this.$element.trigger("tcb_after_numeric_pagination_render",this),this.$element.removeClass(p)}},{key:"renderButtons",value:function(){var e=this;this.buttons.$prev.attr("data-page",this.currentPage-1),this.buttons.$next.attr("data-page",this.currentPage+1);var n=1===parseInt(tve_frontend_options.is_editor_page);[this.buttons.$first,this.buttons.$prev].forEach(function(t){t.hasClass(p)||t.toggleClass("tcb-disabled-pagination-button",!n&&e.currentPage<=e.firstPage)}),[this.buttons.$last,this.buttons.$next].forEach(function(t){t.hasClass(p)||t.toggleClass("tcb-disabled-pagination-button",!n&&e.currentPage>=e.lastPage)})}},{key:"renderLabel",value:function(){var r=this;this.$label.find(".thrive-shortcode-content").each(function(t,e){var n=e.dataset.shortcode;e.innerText=" ".concat(r.getLabelValue(n)," ")})}},{key:"getLabelValue",value:function(t){var e;switch(t){case"tcb_pagination_current_page":e=this.currentPage;break;case"tcb_pagination_total_pages":e=this.totalPages;break;case"tcb_pagination_current_posts":e=(this.currentPage-1)*this.postsPerPage+1+"-"+this.currentPage*this.postsPerPage;break;case"tcb_pagination_total_posts":e=this.totalPages*this.postsPerPage;break;default:e=""}return e}},{key:"renderPageNumbers",value:function(){this.$pageNumberContainer.empty();for(var t=!0,e=1;e<=this.totalPages;e++){var n=void 0;if(e===this.currentPage)n="current";else if(1===e||e>=this.currentPage-this.pagesAroundCurrent&&e<=this.currentPage+this.pagesAroundCurrent||e===this.totalPages)n="link",t=!0;else{if(n="dots",!t)continue;t=!1}this.$pageNumberContainer.append(a.renderPageNumber(e,n))}}}],[{key:"renderPageNumber",value:function(t,e){var n,r=[i,"thrv_wrapper"],a={};switch(1<arguments.length&&void 0!==e?e:""){case"current":r.push(s),n=".".concat(s);break;case"dots":r.push(c),n=".".concat(c),t="...";break;case"link":r.push(u),n=".".concat(u),a={"data-page":t},t='<a href="javascript:void(0)">'.concat(t,"</a>")}return a["data-selector"]=n,o("<p>".concat(t,"</p>")).addClass(r.join(" ")).attr(a)}}]),a}(),d=function(){function r(t,e){var n;return _classCallCheck(this,r),(n=_possibleConstructorReturn(this,_getPrototypeOf(r).call(this,t,e))).$button=n.$element.find(".tcb-pagination-load-more-button"),n}return _inherits(r,t),_createClass(r,[{key:"addLoadListeners",value:function(){this.$button.on("click",this.load.bind(this))}},{key:"load",value:function(){var e=this;if(!this.isLoading()){this.enableLoading("load-bot");var t=this.list.listArgs;void 0===t.query?t.attr.paged+=1:t.query.paged+=1,this.list.getItems(function(t){e.list.insertItems(t),e.render(),e.disableLoading()},t)}}},{key:"render",value:function(){var t,e=this.list.listArgs,n=1===parseInt(tve_frontend_options.is_editor_page);t=e.query?e.query.paged*e.query.posts_per_page:e.attr.paged*e.attr.posts_per_page,!n&&t>=this.getTotalPostCount()&&this.$element.hide(),this.$element.removeClass(p)}}]),r}();window.TCB_Front.Pagination=t,TCB_Front.setModuleLoadedStatus("pagination",!0)}}(ThriveGlobal.$j)}}}}}}})("workspace/editor/js/frontend/modules/pagination");
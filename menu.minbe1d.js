/*! Thrive Architect - 2021-06-18
* http://www.thrivethemes.com/
* Copyright (c) 2021 Thrive Themes */

"use strict";function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}!function(l){var f,v,i,h,m,r={".js":[],".json":[],".css":[],".html":[]},c="function"==typeof require?require:null;return h=function(t){var e=new Error("Could not find module '"+t+"'");return e.code="MODULE_NOT_FOUND",e},m=function(t,e,n){var o,i;if("function"==typeof t[e+n])return e+n;for(o=0;i=r[n][o];++o)if("function"==typeof t[e+i])return e+i;return null},f=function(t,e,n,o,i,r){var a,s,l,c,d,u;for("."!==(a=(n=n.split("/")).pop())&&".."!==a||(n.push(a),a="");null!=(s=n.shift());)if(s&&"."!==s&&(".."===s?(t=e.pop(),r=r.slice(0,r.lastIndexOf("/"))):(e.push(t),t=t[s],r+="/"+s),!t))throw h(o);if(a&&"function"!=typeof t[a]&&((u=(u=(u=(u=m(t,a,".js"))||m(t,a,".json"))||m(t,a,".css"))||m(t,a,".html"))?a=u:2!==i&&"object"===_typeof(t[a])&&(e.push(t),t=t[a],r+="/"+a,a="")),!a)return 1!==i&&t[":mainpath:"]?f(t,e,t[":mainpath:"],o,1,r):f(t,e,"index",o,2,r);if(!(d=t[a]))throw h(o);return d.hasOwnProperty("module")?d.module.exports:(l={},d.module=c={exports:l,id:r+"/"+a},d.call(l,l,c,v(t,e,r)),c.exports)},i=function(t,e,n,o){var i,r=n,a=n.charAt(0),s=0;if("/"===a){if(r=r.slice(1),!(t=l["/"])){if(c)return c(n);throw h(n)}o="/",e=[]}else if("."!==a){if(i=r.split("/",1)[0],!(t=l[i])){if(c)return c(n);throw h(n)}o=i,e=[],(r=r.slice(i.length+1))||(s=(r=t[":mainpath:"])?1:(r="index",2))}return f(t,e,r,n,s,o)},(v=function(e,n,o){return function(t){return i(e,[].concat(n),t,o)}})(l,[],"")}({workspace:{editor:{js:{frontend:{modules:{"menu.js":function(t,n,e){void 0===TCB_Front.js_modules.menu&&TCB_Front.setModuleLoadedStatus("menu",!1),function(m,e){if(!TCB_Front.isModuleLoaded("menu")){var t,g=function(t){return["auto","scroll","hidden"].includes(t.css("overflow"))},p={init:function(){tve_frontend_options.is_editor_page||p.frontendInit(),p.customMenuSwitchIcon(),t||(t=p.customMenuSwitchIcon.bind(this,!!tve_frontend_options.is_editor_page),e.addResizeCallback(t)),p.zIndexOrder(),m(".thrv_widget_menu").each(function(t,e){p.addMutationListener(e)})},zIndexOrder:function(){var t=m("ul.tve_w_menu");e.highestZIndex=t.length+6;var n=e.highestZIndex;t.each(function(){this.style.zIndex=n+5;var t=m(this),e=t.closest("#content");t.find("ul").css("z-index",n+6).parent().addClass("menu-item-has-children"),t.parentsUntil("body,#wrapper,#tve_editor").each(function(){var t=m(this);"static"===t.css("position")||t.hasClass("thrv_header")||t.css("z-index",n+7).addClass("tcb-mp")}),e.length&&"static"!==e.css("position")&&e.css("z-index",n+7).addClass("tcb-mp"),n--})},frontendInit:function(t){function h(t,e){var n=t.attr("href"),o=t.attr("target");o||e.ctrlKey||e.metaKey?window.open(n,o||"_blank"):location.href=n}(t=t||e.$document).off("click.menu-disable-links").on("click.menu-disable-links",".tve-active-disabled .tve_w_menu .tve-state-active",function(t){var e=m(this).closest("li");if(!p.isHamburger(this)||!e.hasClass("menu-item-has-children"))return!(t.tvePreventNavigation=!0)}),t.off("menu_item_anchor_clicked").on("menu_item_anchor_clicked",".tve_w_menu li",function(){var t=m(this);p.isHamburger(t)&&requestAnimationFrame(function(){p.toggleState(t,!1)})}),t.off("click.menu_item_click").on("click.menu_item_click",".tve_w_menu li:not(.tve-regular .tcb-mega-drop li)",function(t){if(t.tvePreventNavigation)return!0;if(t.stopPropagation(),m(t.target).closest(".tve-regular .tcb-mega-drop").length)return!0;var e=m(this),n=e.children("a").first(),o=n[0],i=!!e.find("ul").length,r=m(t.target).closest(".tve-item-dropdown-trigger").length||m(t.clickedTarget).closest(".tve-item-dropdown-trigger").length,a=-1!==e.closest(".thrv_widget_menu").attr("class").indexOf("tve-custom-menu-switch-icon-"),s=e.closest(".tve_w_menu").hasClass("tve_vertical");if((a||s)&&i){if(!r&&e.hasClass("expand-children")&&function(t){var e=t.attr("href");return e&&"#"!==e&&0!==e.indexOf("javascript:")}(n))return n.hasClass("tve-jump-scroll")?n.trigger("click"):h(n,t),!1;e.toggleClass("expand-children");var l=e.find("ul").first(),c=e.hasClass("expand-children");l[c?"slideDown":"slideUp"](100);var d=l.closest(".section-content,.tve-cb");if(g(d)){var u={top:"",left:"",width:""};if(c){var f=l[0].getBoundingClientRect(),v=f.top;u={top:v,left:f.left,width:f.width},l.data("fixed-position",{top:v,scrollTop:d.scrollTop()})}l.toggleClass("fixed-menu-item",c).css(u)}return!1}return(!i||!r)&&(!!n.attr("href")&&(n.hasClass("tve-jump-scroll")?(n.trigger("click"),!0):(h(n,t),void(p.isHamburger(e)&&o.pathname===window.location.pathname&&o.host===window.location.host&&o.protocol===window.location.protocol&&requestAnimationFrame(function(){p.toggleState(e,!1)})))))}),t.off("click.prevent_navigation").on("click.prevent_navigation",".tve_w_menu li a:not(.thrv_text_element a):not(.tve-regular .tcb-mega-drop a)",function(t){t.preventDefault()}),t.off("click.custom_menu").on("click.custom_menu",".tve-m-trigger",function(){return p.toggleState(this),!1}),t.off("mousedown.close_menu").on("mousedown.close_menu",function(t){m(t.target).closest(".thrv_widget_menu").length||p.closeAll()}),e.addResizeCallback(p.customMenuResponsive),e.addResizeCallback(p.mobileResponsiveToggle),p.customMenuResponsive(),p.refreshActiveStates(t),TCB_Front.$window.off("hashchange.tcb").on("hashchange.tcb",p.refreshActiveStates.bind(p,TCB_Front.$body)),p.positionLogo(t),p.mobileResponsiveToggle(),t.find(".section-content,.tve-cb").each(function(t,e){var n=m(e);g(n)&&n.off("scroll.menu").on("scroll.menu",function(r){n.find(".fixed-menu-item").each(function(t,e){var n=m(e),o=n.data("fixed-position"),i=parseInt(o.top)+(o.scrollTop-r.currentTarget.scrollTop);n.css("top","".concat(i,"px"))})})})},mobileResponsiveToggle:function(){"mobile"===e.getDisplayType()?(e.$body.find(".vmd-right").attr("data-toggle-dir","vmd-right").removeClass("vmd-right").addClass("vmd-toggle"),e.$body.find(".vmd-left").attr("data-toggle-dir","vmd-left").removeClass("vmd-left").addClass("vmd-toggle")):e.$body.find(".vmd-toggle").each(function(t,e){var n=e.getAttribute("data-toggle-dir");n&&(e.classList.remove("vmd-toggle"),e.classList.add(n))})},refreshActiveStates:function(t){(0<arguments.length&&void 0!==t?t:TCB_Front.$body).find(".tve-custom-menu-type li > a").each(function(){if(this.getAttribute("href")&&"#"!==this.getAttribute("href")&&0!==this.getAttribute("href").indexOf("javascript")){var t=m(this),e=location.protocol===this.protocol&&location.hostname===this.hostname&&location.pathname===this.pathname&&location.hash===this.hash;t.toggleClass("tve-state-active",e),t.parent().toggleClass("tve-state-active",e)}})},customMenuResponsive:function(){m(".tve-m-trigger:visible").length?m(".tve-m-trigger").each(function(){var t=m(this).parent().find("> ul");if(!t.data("tve-colors-added")&&t.find("ul a").attr("data-tve-custom-colour")){var e=t.find("ul a").attr("data-tve-custom-colour");t.find("> li > a").each(function(){var t=m(this);t.attr("data-tve-custom-colour")&&(t.attr("data-o-color",t.attr("data-tve-custom-colour")),t.attr("data-tve-custom-colour",e))})}t.data("tve-colors-added",!0)}):(m(".tve-m-expanded").removeClass("tve-m-expanded"),m(".tve-m-trigger").each(function(){var t=m(this).parent().find("> ul");if(!t.data("tve-colors-added")&&t.find("> li > a").attr("data-o-color")){var e=t.find("> li > a"),n=e.attr("data-o-color");e.attr("data-tve-custom-colour",n).removeAttr("data-o-color")}t.data("tve-colors-added",!1)}))},customMenuSwitchIcon:function(t){var c=!(0<arguments.length&&void 0!==t)||t,d=e.getDisplayType();m(".thrv_widget_menu").each(function(){var t=m(this),e=t.attr("data-tve-allhoriz"),n=t.find(".thrive-shortcode-html > ul"),o=t.attr("data-tve-switch-icon"),i=!1,r=t.data("tve-frontend-init");t.data("tve-frontend-init",!0),o||e||(o="tablet,mobile");var a=o.split(","),s=t.hasClass("tve-regular")||!r&&!t.find(".tve-m-trigger").is(":visible");if(t.removeClass("tve-custom-menu-switch-icon-desktop tve-custom-menu-switch-icon-tablet tve-custom-menu-switch-icon-mobile"),c&&t.find("ul:not(.tcb-masonry.masonry)").removeAttr("style"),a.includes(d)?t.addClass("tve-custom-menu-switch-icon-".concat(d)):i=!0,t.toggleClass("tve-regular",i),t.toggleClass("tve-dropdown",!i),r&&i&&s)p.ensureOnScreenDropdown(t);else{if(t.toggleClass("tve-regular",i),t.toggleClass("tve-dropdown",!i),i)p.ensureRegularLogoSplit(t),t.find("ul").removeAttr("style"),t.find("li").removeClass("expand-children"),n.removeAttr("style"),setTimeout(function(){return t.find(".tcb-masonry").masonry()},1e3);else{if(p.ensureHamburgerLogoSplit(t),t.find(".tcb-masonry").each(function(){var t=m(this);t.data("masonry")&&t.masonry("destroy")}),!t.data("calc-dimensions")){t.find(".sub-menu").slideDown(0).slideUp(0).removeAttr("style"),t.data("calc-dimensions",!0);var l=n.attr("style","height: auto !important;max-height:none !important").outerHeight();n.removeAttr("style"),t.data("calc-height",l)}c?p.toggleState(t,!1):p.reposition(t)}p.ensureOnScreenDropdown(t)}})},isHamburger:function(t){var e=f(t);return e.length&&-1!==e.attr("class").indexOf("tve-custom-menu-switch-icon-")},isVertical:function(t){var e=f(t);return e.length&&e.find(".tve_vertical").length},toggleState:function(t,e,n){var o=2<arguments.length&&void 0!==n?n:100,i=f(t),r=i.find("ul").first(),a=r.hasClass("tve-m-expanded"),s=!a;if(void 0!==e&&(s=e),s===a)return i;if(i.find(".tve-m-trigger").toggleClass("tve-triggered-icon",e),!i.hasClass("tve-mobile-dropdown"))return s?i.parents(".tcb-mp").addBack().css("z-index",800):setTimeout(function(){p.zIndexOrder()},100),r.toggleClass("tve-m-expanded",e).removeAttr("style"),i;if(s){var l=i.closest(".tve-page-section-in, #tve_editor, #wrapper"),c=r.offsetParent().offset(),d=l.offset(),u=parseInt(i.data("calc-height")||"500")+"px";r.attr("style","visibility: visible;margin-left: 0 !important;left: "+(d.left-c.left)+"px;width:"+l.width()+"px !important;max-height:"+u+"px"),r.addClass("tve-m-expanded"),setTimeout(function(){r.css("max-height","none")},o)}else i.data("calc-height",r.outerHeight()),r.stop().slideUp(o,function(){r.removeClass("tve-m-expanded").removeAttr("style"),r.css("visibility","hidden")});return i},reposition:function(t){var e=f(t),n=e.find("ul").first();if(!n.hasClass("tve-m-expanded")||!e.hasClass("tve-mobile-dropdown"))return e;var o=e.closest(".tve-page-section-in, #tve_editor, #wrapper"),i=n.offsetParent().offset(),r=o.offset(),a=parseInt(e.data("calc-height")||"500")+"px";return n.attr("style","visibility: visible;margin-left: 0 !important;left: "+(r.left-i.left)+"px;width:"+o.width()+"px !important;max-height:"+a+"px"),setTimeout(function(){n.css("max-height","none")},100),e},closeAll:function(){m(".thrv_widget_menu").each(function(t,e){p.toggleState(e,!1)})},positionLogo:function(t){(t||e.$body).find(".tcb-menu-logo-wrap").each(function(t,e){var n=m(e),o=n.siblings(),i=Math.floor(o.length/2);o.eq(i).before(n)})},ensureLogoSplit:function(t){var e=f(t);e.hasClass("tcb-logo-split")&&(p.isHamburger(e)?p.ensureHamburgerLogoSplit(t):p.ensureRegularLogoSplit(t))},ensureHamburgerLogoSplit:function(t,e){var n=1<arguments.length&&void 0!==e?e:f(t).find("li.tcb-menu-logo-wrap"),o=f(t);if(n.children().length){o.find(".tcb-hamburger-logo").remove();var i=m('<div class="tcb-hamburger-logo"></div>');i.append(n.children()),o.find(".thrive-shortcode-html").prepend(i)}},ensureRegularLogoSplit:function(t){var e=f(t),n=e.find(".tcb-hamburger-logo .tcb-logo"),o=e.find("li.tcb-menu-logo-wrap");n.length&&o.length&&o.empty().append(n),p.handleLogoOverflow(e)},handleLogoOverflow:function(t){var e=t.find("li.tcb-menu-logo-wrap");if(e.length)if(p.menuOverflows(t)){var n=e.outerHeight(!0),o=e.outerWidth();e.closest(".thrive-shortcode-html").css("padding-top",n+"px"),e.css({top:"-".concat(n,"px"),left:"calc(50% - ".concat(Math.round(o/2),"px)"),position:"absolute"})}else e.removeAttr("style"),e.closest(".thrive-shortcode-html").css("padding-top","");else t.find(".thrive-shortcode-html").css("padding-top","")},menuOverflows:function(t){var e=0;return t.find(".tve_w_menu > li").each(function(){e+=m(this).outerWidth(!0)}),e>t.parent().width()-5},addMutationListener:function(t){function e(){cancelAnimationFrame(n),n=requestAnimationFrame(p.handleLogoOverflow.bind(o,i))}var n,o=this,i=f(t);if(window.ResizeObserver){var r=i.find("ul.tve_w_menu")[0];if(!r)return;var a=new ResizeObserver(e);if(!i.data("resize-observer")){a.observe(r),i.data("resize-observer",a);var s=new MutationObserver(function(t){Array.from(t).forEach(function(t){t.target.classList.contains("tcb-menu-logo-wrap")||"UL"===t.target.tagName&&"childList"===t.type&&t.addedNodes.length&&Array.from(t.addedNodes).forEach(function(t){return s.observe(t,{attributes:!0})})}),i.hasClass("tve-regular")&&e()});i.find(".tve_w_menu > li:not(.tcb-menu-logo-wrap)").each(function(t,e){s.observe(e,{attributes:!0})})}var l=i.find("li.tcb-menu-logo-wrap");l.length&&!l.data("resize-observer")&&(l.data("resize-observer",a),a.observe(l[0]))}},ensureOnScreenDropdown:function(t){var e=f(t),o=e.hasClass("tve-regular"),i=e.offset().left+e.outerWidth();e.find("li:last-child > ul").each(function(t,e){var n=m(e);0<=Math.ceil(n.offset().left+n.outerWidth()-i)&&o?n.css({left:"auto",right:"0px"}):n.css({left:"",right:""})})}};m(window).on("tcb_after_dom_ready",function(){return p.init()}),window.addEventListener("load",function(){return p.init()}),window.TCB_Front.menu=p,n.exports=p,TCB_Front.setModuleLoadedStatus("menu",!0)}function f(t){return m(t).closest(".thrv_widget_menu")}}(ThriveGlobal.$j,TCB_Front)}}}}}}})("workspace/editor/js/frontend/modules/menu");
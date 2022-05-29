/*! Thrive Architect - 2021-06-18
* http://www.thrivethemes.com/
* Copyright (c) 2021 Thrive Themes */

"use strict";function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function _createClass(t,e,o){return e&&_defineProperties(t.prototype,e),o&&_defineProperties(t,o),t}function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}!function(c){var f,p,a,v,y,i={".js":[],".json":[],".css":[],".html":[]},d="function"==typeof require?require:null;return v=function(t){var e=new Error("Could not find module '"+t+"'");return e.code="MODULE_NOT_FOUND",e},y=function(t,e,o){var n,a;if("function"==typeof t[e+o])return e+o;for(n=0;a=i[o][n];++n)if("function"==typeof t[e+a])return e+a;return null},f=function(t,e,o,n,a,i){var r,s,c,d,l,u;for("."!==(r=(o=o.split("/")).pop())&&".."!==r||(o.push(r),r="");null!=(s=o.shift());)if(s&&"."!==s&&(".."===s?(t=e.pop(),i=i.slice(0,i.lastIndexOf("/"))):(e.push(t),t=t[s],i+="/"+s),!t))throw v(n);if(r&&"function"!=typeof t[r]&&((u=(u=(u=(u=y(t,r,".js"))||y(t,r,".json"))||y(t,r,".css"))||y(t,r,".html"))?r=u:2!==a&&"object"===_typeof(t[r])&&(e.push(t),t=t[r],i+="/"+r,r="")),!r)return 1!==a&&t[":mainpath:"]?f(t,e,t[":mainpath:"],n,1,i):f(t,e,"index",n,2,i);if(!(l=t[r]))throw v(n);return l.hasOwnProperty("module")?l.module.exports:(c={},l.module=d={exports:c,id:i+"/"+r},l.call(c,c,d,p(t,e,i)),d.exports)},a=function(t,e,o,n){var a,i=o,r=o.charAt(0),s=0;if("/"===r){if(i=i.slice(1),!(t=c["/"])){if(d)return d(o);throw v(o)}n="/",e=[]}else if("."!==r){if(a=i.split("/",1)[0],!(t=c[a])){if(d)return d(o);throw v(o)}n=a,e=[],(i=i.slice(a.length+1))||(s=(i=t[":mainpath:"])?1:(i="index",2))}return f(t,e,i,o,s,n)},(p=function(e,o,n){return function(t){return a(e,[].concat(o),t,n)}})(c,[],"")}({workspace:{editor:{js:{frontend:{modules:{video:{"floating.js":function(t,e,o){function y(t,e){var o=e?t.parents(".safari-ios-decoration-fix"):t.parents(".safari-ios-decoration-fix-none");t.toggleClass("tcb-no-perspective",e),o.toggleClass("safari-ios-decoration-fix",!e).toggleClass("safari-ios-decoration-fix-none",e)}var h,n,a,g;h=ThriveGlobal.$j,g=!(a={}),a.init=function(){var o=this;n=a.videoScrolled.bind(this),document.addEventListener("scroll",n),h(".tcb-float-close-button").each(function(t,e){e.addEventListener("click",a.closeFloatVideo.bind(o,e),!1)})},a.destroyFloating=function(){var o=this;document.removeEventListener("scroll",n),h(".tcb-float-close-button").each(function(t,e){e.removeEventListener("click",a.closeFloatVideo.bind(o,e))})},a.closeFloatVideo=function(t){h(t).parent(".tcb-video-float-container").addClass("tcb-float-closed"),a.videoScrolled()},a.videoScrolled=function(){h('.thrv_responsive_video[data-float="true"] .tcb-video-float-container iframe, .thrv_responsive_video[data-float="true"] .tcb-video-float-container video, .thrv_responsive_video[data-float="true"] .tcb-video-float-container .tve_responsive_video-no_video').each(function(t,e){var o=h(e),n=o.parents(".tcb-video-float-container"),a=o.parents(".thrv_responsive_video"),i=a.attr("data-float-position"),r=a.find(".video_overlay_image").attr("style")||"",s=TCB_Front.getDisplayType()[0],c=parseInt(h("#wpadminbar").height());if(n.hasClass("tcb-float-closed")||!function(t){var e="true"===t.attr("data-float"),o=t.attr("data-float-visibility"),n=TCB_Front.getDisplayType();return!t.parents(".tcb-post-list").length&&(e&&!o||-1===o.indexOf(n))}(a)||TCB_Front.isInViewport(o.parents(".thrv_responsive_video"),parseInt(o.width))){if(n.removeClass(i).css({width:"",height:"","margin-top":""}).parents(".tcb-col,.thrv-content-box,.thrv-page-section,#content,.theme-section").css("z-index",""),a.find(".video_overlay_image").removeClass(i).css({cssText:r,height:"",width:""}),!g){var d=a.position().left,l={left:d,right:d+a.width()};i.includes("top")||i.includes("keep")?(l.top=-parseInt(a.attr("data-float-width-".concat(s))),n.css(l)):i.includes("bottom")&&(l.bottom=parseInt(TCB_Front.Utils.windowWidth()),n.css(l)),a.find(".video_overlay_image").css({top:"",left:"",bottom:"",right:"","margin-top":""}),g=!0}y(a,!1)}else{void 0===a.attr("data-float-width-".concat(s))&&("m"===s&&(a.attr("data-float-width-m",TCB_Front.$window.width()+"px;"),a.attr("data-float-padding1-m",0),a.attr("data-float-padding2-m",0),c=0),"t"===s&&(s="d"));var u="height: "+function(t){var e=parseFloat(t.height()/t.width()).toFixed(2),o=TCB_Front.getDisplayType()[0],n=t.attr("data-float-width-".concat(o))||t.attr("data-float-width-d"),a=parseInt(n)*e;return n.includes("px")?a+"px":a*TCB_Front.$body.width()/100+"px"}(a)+" !important;",f="width: "+a.attr("data-float-width-".concat(s))+" !important;",p="";if(i.includes("keep-original")){var v=a.attr("data-float-padding1-".concat(s));TCB_Front.Utils.hasAdminBar()&&c&&(p+="margin-top: ".concat(c,"px;")),p+="top: ".concat(v," !important; ")}else i.split("-").forEach(function(t,e){var o=a.attr("data-float-padding".concat(e+1,"-").concat(s));TCB_Front.Utils.hasAdminBar()&&t.includes("top")&&c&&(p+="margin-top: ".concat(c,"px;")),p+="".concat(t,": ").concat(o," !important; ")});i&&(n.addClass(i).css({cssText:f+u+p}).parents(".tcb-col,.thrv-content-box,.thrv-page-section,#content,.theme-section").css("z-index",(TCB_Front.highestZIndex||0)+10),o.css("height",""),a.find("video").length&&function(t){t.find("video").css({"object-fit":"cover",height:"100%"})}(a),a.find(".video_overlay_image").addClass(i).css({cssText:r+f+u+"z-index:100000 !important; top:inherit; left:inherit; bottom:inherit; right: inherit; margin-top: inherit;"}),y(a,!0),g=!1)}})},a.restoreFloatingVideos=function(){h(".thrv_responsive_video").each(function(t,e){var o=h(e),n=o.find(".tcb-video-float-container"),a=o.attr("data-float-position"),i=o.find(".video_overlay_image").attr("style")||"";n.removeClass(a).css({width:"",height:""}),o.find(".video_overlay_image").removeClass(a).css({cssText:i,height:"",width:"",top:"",left:"",bottom:"",right:"","margin-top":""})})},e.exports=a},"main.js":function(t,e,a){e.exports=function(f,t){var r=a("./utils"),e=a("./youtube"),o=a("./vooplayer"),n=function(){function n(){_classCallCheck(this,n)}return _createClass(n,null,[{key:"init",value:function(){n.initHooks()}},{key:"initHooks",value:function(){f(t).on("tcb_after_dom_ready",function(){return n.onDOMReady()}).on("tcb_after_lightbox_open",function(t,e){f(e).find("".concat(n.identifier,':not([data-type="dynamic"])')).each(function(t,e){return n.autoplayVideo(f(e))})}).on("tcb_before_lightbox_close",function(t,e){return n.pauseVideos(f(e))}).on("tcb_on_content_hide",function(t,e){return n.pauseVideos(f(e))}).on("tve-content-revealed",function(t,e){return n.maybeAutoplayVideo(f(e))}).on("tcb_toggle_open",function(t,e){return n.maybeAutoplayVideo(f(e))}).on("tcb_toggle_close",function(t,e){return n.pauseVideos(f(e))}).on("tcb_on_content_show",function(t,e){return n.maybeAutoplayVideo(f(e))})}},{key:"onDOMReady",value:function(){n.pauseVideos(f(".tve_p_lb_content")),n.pauseVideos(f("".concat(n.identifier,":hidden"))),TCB_Front.Utils.isEditorPage()||(n.maybeAutoplayVideo(f("body")),n.initOnClickEvent()),e.playBackgroundYoutube(f("div.tcb-yt-bg:visible")),o.onDOMReady(),f(".tcb-video-background-el").each(function(t,e){return e.parentNode.classList.add("tcb-video-background-parent")})}},{key:"initOnClickEvent",value:function(){f(n.identifier).off().click(function(t){var e,o,n=f(this),a=n.find(".video_overlay_image"),i=n.attr("data-controls"),r=n.attr("data-overlay"),s=n.find(".tcb-video-float-container.tcb-float-closed"),c=n.find(".tcb-responsive-video").attr("data-provider");switch(c=c||n.attr("data-type")){case"youtube":case"vimeo":e="&autoplay=1";break;case"wistia":e="&autoPlay=true"}if("vooplayer"===c&&n.find(".video-skin-player").css("z-index",""),0===s.length&&["youtube","vimeo","wistia"].includes(c)){var d=n.find("iframe"),l=d.attr("src");0!==l.length&&d.attr("src",l+e)}else if((!TCB_Front.browser.safari||0===parseInt(i)&&1===parseInt(r))&&0===f(t.target).closest(".tcb-float-close-button").length&&["custom","self","external"].includes(c)){var u=n.find("video").get(0);o=u.paused?"play":"pause",setTimeout(function(){u[o]()})}0<a.length&&a.fadeOut()})}},{key:"maybeAutoplayVideo",value:function(t){(void 0===t?f("".concat(n.identifier,':not([data-type="dynamic"])')):t.find("".concat(n.identifier,':not([data-type="dynamic"])'))).each(function(t,e){var o=f(e);0===o.parents(".tve_p_lb_content").length&&n.autoplayVideo(o)})}},{key:"autoplayVideo",value:function(t){if(1===parseInt(t.attr("data-autoplay"))){var e,o=t.attr("data-type"),n="";switch(o){case"youtube":n="&autoplay=1&mute=1";break;case"vimeo":n="&autoplay=1&muted=1";break;case"wistia":n="&autoPlay=true&muted=true"}if(r.isCustomProvider(o)){var a=t.find("iframe");(e=a.attr("src")||a.attr("data-src"))&&0!==e.length&&-1===e.indexOf(n)&&(e.includes("?")?"?"===e.slice(-1)&&(n=n.substring(1)):n="?".concat(n.substring(1)),e+=n,a.attr("src",e),a.attr("data-src",e))}else if(r.isSelfHosted(o)){var i=t.find("video").get(0);i&&(i.muted=!0,i.paused&&i.play())}}}},{key:"pauseVideos",value:function(t){t.find("video").each(function(t,e){return e.pause()})}},{key:"identifier",get:function(){return".thrv_responsive_video"}}]),n}();return window.TCB_Front.playBackgroundYoutube=e.playBackgroundYoutube,window.TCB_Front.refreshBackgroundYoutube=e.refreshBackgroundYoutube,window.TCB_Front.changeAutoplayVideo=n.maybeAutoplayVideo,window.TCB_Front.makeAutoplayVideo=n.autoplayVideo,window.TCB_Front.floating=a("./floating"),n}},"utils.js":function(t,e,o){var n=["youtube","vimeo","wistia"],a=["self","external","custom"];e.exports=function(){function t(){_classCallCheck(this,t)}return _createClass(t,null,[{key:"isCustomProvider",value:function(t){return n.includes(t)}},{key:"isSelfHosted",value:function(t){return a.includes(t)}}]),t}()},"vooplayer.js":function(t,e,o){var n,a;n=ThriveGlobal.$j,a=function(){function t(){_classCallCheck(this,t)}return _createClass(t,null,[{key:"onDOMReady",value:function(){document.addEventListener("vooPlayerReady",t.playBackgroundVoo,!1),document.addEventListener("vooPlayerReady",t.changeVooOnPlay,!1),TCB_Front.Utils.isEditorPage()?n(".tcb-video-background-el iframe.tcb-voo-bg").each(function(){var t=TVE.inner_$(this),e=t.attr("src");t.attr("src",e)}):(n('.thrv_responsive_video[data-type="vooplayer"]').each(function(t,e){var o=n(e);0<o.find(".video_overlay_image").length&&o.find(".video-skin-player").css("z-index","-1")}),TCB_Front.floating.init())}},{key:"playBackgroundVoo",value:function(){n("iframe.tcb-voo-bg").each(function(t,e){!function t(){vooAPI(e.dataset.playerid,"onEnded",null,t),vooAPI(e.dataset.playerid,"play"),vooAPI(e.dataset.playerid,"volume",[0])}()})}},{key:"changeVooOnPlay",value:function(t){var e=0<arguments.length&&void 0!==t?t:TCB_Front.$body;e&&e.jquery||(e=TCB_Front.$body),e.find("iframe.video-player-container").each(function(t,e){function o(){n(e).css("pointer-events",""),n(e).parent().find("#theImg").remove()}e.src?o():vooAPI(e.dataset.playerid,"onPlay",null,function(){o()})})}}]),t}(),e.exports=a,window.TCB_Front.changeVooOnPlay=a.changeVooOnPlay},"youtube.js":function(t,e,o){var a;a=ThriveGlobal.$j,e.exports=function(){function n(){_classCallCheck(this,n)}return _createClass(n,null,[{key:"playBackgroundYoutube",value:function(t){t.length&&(void 0!==window.YT&&window.YT.Player?n._playYTBackground(t):(window.onYouTubeIframeAPIReady=function(){n._playYTBackground(t)},a.ajax({url:"https://www.youtube.com/iframe_api",type:"get",crossDomain:!0,cache:!0,dataType:"script"})))}},{key:"_playYTBackground",value:function(t){t.each(function(){var t,e=this.getAttribute("data-yt-id");t=34===e.length?new YT.Player(this.id,{playerVars:{autoplay:1,cc_load_policy:0,controls:0,disablekb:1,fs:0,iv_load_policy:0,modestbranding:1,loop:1,playsinline:1,rel:0,showinfo:0,listType:"playlist",list:e},events:{onReady:function(t){t.target.mute()},onStateChange:function(t){t.target.mute()}}}):new YT.Player(this.id,{videoId:e,playerVars:{autoplay:1,cc_load_policy:0,controls:0,disablekb:1,fs:0,iv_load_policy:0,modestbranding:1,playsinline:1,rel:0,showinfo:0,playlist:e},events:{onReady:function(t){t.target.mute(),t.target.playVideo()},onStateChange:function(t){t.target&&t.target.mute&&t.target.mute(),t.data===(YT.PlayerState.ENDED||0)&&t.target.playVideo()}}}),a(t.getIframe()).data("tcb-yt-player",t)})}},{key:"refreshBackgroundYoutube",value:function(){window.YT&&window.YT.Player&&a("iframe.tcb-yt-bg").each(function(t,e){var o=a(e);o.data("tcb-yt-player")||n._playYTBackground(o)})}}]),n}()}},"video.js":function(t,e,o){void 0===TCB_Front.js_modules.video&&TCB_Front.setModuleLoadedStatus("video",!1),function(){if(!TCB_Front.isModuleLoaded("video")){var t=o("./video/main")(ThriveGlobal.$j,window);t.init(),window.TCB_Front.video=t,TCB_Front.setModuleLoadedStatus("video",!0)}}(ThriveGlobal.$j)}}}}}}})("workspace/editor/js/frontend/modules/video");
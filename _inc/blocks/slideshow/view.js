!function(t,e){for(var n in e)t[n]=e[n]}(window,function(t){function e(e){for(var n,r,o=e[0],s=e[1],a=0,c=[];a<o.length;a++)r=o[a],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&c.push(i[r][0]),i[r]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);for(u&&u(e);c.length;)c.shift()()}var n={},r={23:0},i={23:0};function o(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.e=function(t){var e=[];r[t]?e.push(r[t]):0!==r[t]&&{28:1}[t]&&e.push(r[t]=new Promise((function(e,n){for(var i="rtl"===document.dir?({28:"vendors~swiper"}[t]||t)+"."+{28:"bcd8742450479be3f9e1"}[t]+".rtl.css":({28:"vendors~swiper"}[t]||t)+"."+{28:"bcd8742450479be3f9e1"}[t]+".css",s=o.p+i,a=document.getElementsByTagName("link"),c=0;c<a.length;c++){var u=(f=a[c]).getAttribute("data-href")||f.getAttribute("href");if("stylesheet"===f.rel&&(u===i||u===s))return e()}var l=document.getElementsByTagName("style");for(c=0;c<l.length;c++){var f;if((u=(f=l[c]).getAttribute("data-href"))===i||u===s)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.setAttribute("data-webpack",!0),d.onload=e,d.onerror=function(e){var i=e&&e.target&&e.target.src||s,o=new Error("Loading CSS chunk "+t+" failed.\n("+i+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=i,delete r[t],d.parentNode.removeChild(d),n(o)},d.href=s,document.getElementsByTagName("head")[0].appendChild(d)})).then((function(){r[t]=0})));var n=i[t];if(0!==n)if(n)e.push(n[2]);else{var s=new Promise((function(e,r){n=i[t]=[e,r]}));e.push(n[2]=s);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.src=function(t){return o.p+""+({28:"vendors~swiper"}[t]||t)+"."+{28:"bcd8742450479be3f9e1"}[t]+".js"}(t);var u=new Error;a=function(e){c.onerror=c.onload=null,clearTimeout(l);var n=i[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+r+": "+o+")",u.name="ChunkLoadError",u.type=r,u.request=o,n[1](u)}i[t]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:c})}),12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(e)},o.m=t,o.c=n,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o.oe=function(t){throw console.error(t),t};var s=window.webpackJsonp=window.webpackJsonp||[],a=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=a;return o(o.s=403)}({107:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(8),i=n.n(r),o=n(34),s=n.n(o),a=n(4);n(171);function c(){return u.apply(this,arguments)}function u(){return(u=s()(regeneratorRuntime.mark((function t(){var e,r,o,s,c,u,l,f=arguments;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=f.length>0&&void 0!==f[0]?f[0]:".swiper-container",r=f.length>1&&void 0!==f[1]?f[1]:{},o=f.length>2&&void 0!==f[2]?f[2]:{},s={effect:"slide",grabCursor:!0,init:!0,initialSlide:0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{bulletElement:"button",clickable:!0,el:".swiper-pagination",type:"bullets"},preventClicksPropagation:!1,releaseFormElements:!1,setWrapperSize:!0,touchStartPreventDefault:!1,on:Object(a.mapValues)(o,(function(t){return function(){t(this)}}))},t.next=6,Promise.all([n.e(28).then(n.t.bind(null,325,7)),n.e(28).then(n.t.bind(null,326,7))]);case 6:return c=t.sent,u=i()(c,1),l=u[0].default,t.abrupt("return",new l(e,Object(a.merge)({},s,r)));case 10:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},108:function(t,e){!function(){t.exports=this.wp.escapeHtml}()},171:function(t,e,n){},34:function(t,e){function n(t,e,n,r,i,o,s){try{var a=t[o](s),c=a.value}catch(u){return void n(u)}a.done?e(c):Promise.resolve(c).then(r,i)}t.exports=function(t){return function(){var e=this,r=arguments;return new Promise((function(i,o){var s=t.apply(e,r);function a(t){n(s,i,o,a,c,"next",t)}function c(t){n(s,i,o,a,c,"throw",t)}a(void 0)}))}}},4:function(t,e){!function(){t.exports=this.lodash}()},403:function(t,e,n){n(44),t.exports=n(404)},404:function(t,e,n){"use strict";n.r(e);var r=n(4),i=n(53),o=n.n(i),s=n(55),a=n(107),c=n(54);"undefined"!=typeof window&&o()((function(){var t=document.getElementsByClassName("wp-block-jetpack-slideshow");Object(r.forEach)(t,(function(t){if("true"!==t.getAttribute("data-jetpack-block-initialized")){var e=t.dataset,n=e.autoplay,r=e.delay,i=e.effect,o=window.matchMedia("(prefers-reduced-motion: reduce)").matches,u=n&&!o,l=t.getElementsByClassName("swiper-container")[0],f=null;Object(a.a)(l,{autoplay:!!u&&{delay:1e3*r,disableOnInteraction:!1},effect:i,init:!0,initialSlide:0,loop:!0,keyboard:{enabled:!0,onlyInViewport:!0}},{init:c.b,imagesReady:c.d,paginationRender:c.c,transitionEnd:c.a}).then((function(t){new s.a((function(){f&&(cancelAnimationFrame(f),f=null),f=requestAnimationFrame((function(){Object(c.d)(t),t.update()}))})).observe(t.el)})).catch((function(){t.querySelector(".wp-block-jetpack-slideshow_container").classList.add("wp-swiper-initialized")})),t.setAttribute("data-jetpack-block-initialized","true")}}))}))},41:function(t,e,n){"object"==typeof window&&window.Jetpack_Block_Assets_Base_Url&&(n.p=window.Jetpack_Block_Assets_Base_Url)},44:function(t,e,n){"use strict";n.r(e);n(41)},53:function(t,e){!function(){t.exports=this.wp.domReady}()},54:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return s})),n.d(e,"c",(function(){return u})),n.d(e,"d",(function(){return a}));var r=n(108),i=n(4),o="wp-block-jetpack-slideshow_autoplay-paused";function s(t){a(t),c(t),t.el.querySelector(".wp-block-jetpack-slideshow_button-pause").addEventListener("click",(function(){t.el&&(t.el.classList.contains(o)?(t.el.classList.remove(o),t.autoplay.start(),this.setAttribute("aria-label","Pause Slideshow")):(t.el.classList.add(o),t.autoplay.stop(),this.setAttribute("aria-label","Play Slideshow")))}))}function a(t){if(t&&t.el){var e=t.el.querySelector('.swiper-slide[data-swiper-slide-index="0"] img');if(e){var n=e.clientWidth/e.clientHeight,r=Math.max(Math.min(n,16/9),1),i="undefined"!=typeof window?.8*window.innerHeight:600,o=Math.min(t.width/r,i),s="".concat(Math.floor(o),"px"),a="".concat(Math.floor(o/2),"px");t.el.classList.add("wp-swiper-initialized"),t.wrapperEl.style.height=s,t.el.querySelector(".wp-block-jetpack-slideshow_button-prev").style.top=a,t.el.querySelector(".wp-block-jetpack-slideshow_button-next").style.top=a}}}function c(t){Object(i.forEach)(t.slides,(function(e,n){e.setAttribute("aria-hidden",n===t.activeIndex?"false":"true"),n===t.activeIndex?e.setAttribute("tabindex","-1"):e.removeAttribute("tabindex")})),function(t){var e=t.slides[t.activeIndex];if(e){var n=e.getElementsByTagName("FIGCAPTION")[0],i=e.getElementsByTagName("IMG")[0];t.a11y.liveRegion&&(t.a11y.liveRegion[0].innerHTML=n?n.innerHTML:Object(r.escapeHTML)(i.alt))}}(t)}function u(t){Object(i.forEach)(t.pagination.bullets,(function(e){e.addEventListener("click",(function(){var e=t.slides[t.realIndex];setTimeout((function(){e.focus()}),500)}))}))}},55:function(t,e,n){"use strict";var r=function(){if("undefined"!=typeof Map)return Map;function t(t,e){var n=-1;return t.some((function(t,r){return t[0]===e&&(n=r,!0)})),n}return(function(){function e(){this.__entries__=[]}return Object.defineProperty(e.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),e.prototype.get=function(e){var n=t(this.__entries__,e),r=this.__entries__[n];return r&&r[1]},e.prototype.set=function(e,n){var r=t(this.__entries__,e);~r?this.__entries__[r][1]=n:this.__entries__.push([e,n])},e.prototype.delete=function(e){var n=this.__entries__,r=t(n,e);~r&&n.splice(r,1)},e.prototype.has=function(e){return!!~t(this.__entries__,e)},e.prototype.clear=function(){this.__entries__.splice(0)},e.prototype.forEach=function(t,e){void 0===e&&(e=null);for(var n=0,r=this.__entries__;n<r.length;n++){var i=r[n];t.call(e,i[1],i[0])}},e}())}(),i="undefined"!=typeof window&&"undefined"!=typeof document&&window.document===document,o="undefined"!=typeof window&&window.Math===Math?window:"undefined"!=typeof self&&self.Math===Math?self:"undefined"!=typeof window&&window.Math===Math?window:Function("return this")(),s="function"==typeof requestAnimationFrame?requestAnimationFrame.bind(o):function(t){return setTimeout((function(){return t(Date.now())}),1e3/60)};var a=["top","right","bottom","left","width","height","size","weight"],c="undefined"!=typeof MutationObserver,u=function(){function t(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=function(t,e){var n=!1,r=!1,i=0;function o(){n&&(n=!1,t()),r&&c()}function a(){s(o)}function c(){var t=Date.now();if(n){if(t-i<2)return;r=!0}else n=!0,r=!1,setTimeout(a,e);i=t}return c}(this.refresh.bind(this),20)}return t.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_()},t.prototype.removeObserver=function(t){var e=this.observers_,n=e.indexOf(t);~n&&e.splice(n,1),!e.length&&this.connected_&&this.disconnect_()},t.prototype.refresh=function(){this.updateObservers_()&&this.refresh()},t.prototype.updateObservers_=function(){var t=this.observers_.filter((function(t){return t.gatherActive(),t.hasActive()}));return t.forEach((function(t){return t.broadcastActive()})),t.length>0},t.prototype.connect_=function(){i&&!this.connected_&&(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),c?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},t.prototype.disconnect_=function(){i&&this.connected_&&(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},t.prototype.onTransitionEnd_=function(t){var e=t.propertyName,n=void 0===e?"":e;a.some((function(t){return!!~n.indexOf(t)}))&&this.refresh()},t.getInstance=function(){return this.instance_||(this.instance_=new t),this.instance_},t.instance_=null,t}(),l=function(t,e){for(var n=0,r=Object.keys(e);n<r.length;n++){var i=r[n];Object.defineProperty(t,i,{value:e[i],enumerable:!1,writable:!1,configurable:!0})}return t},f=function(t){return t&&t.ownerDocument&&t.ownerDocument.defaultView||o},d=y(0,0,0,0);function h(t){return parseFloat(t)||0}function p(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return e.reduce((function(e,n){return e+h(t["border-"+n+"-width"])}),0)}function v(t){var e=t.clientWidth,n=t.clientHeight;if(!e&&!n)return d;var r=f(t).getComputedStyle(t),i=function(t){for(var e={},n=0,r=["top","right","bottom","left"];n<r.length;n++){var i=r[n],o=t["padding-"+i];e[i]=h(o)}return e}(r),o=i.left+i.right,s=i.top+i.bottom,a=h(r.width),c=h(r.height);if("border-box"===r.boxSizing&&(Math.round(a+o)!==e&&(a-=p(r,"left","right")+o),Math.round(c+s)!==n&&(c-=p(r,"top","bottom")+s)),!function(t){return t===f(t).document.documentElement}(t)){var u=Math.round(a+o)-e,l=Math.round(c+s)-n;1!==Math.abs(u)&&(a-=u),1!==Math.abs(l)&&(c-=l)}return y(i.left,i.top,a,c)}var b="undefined"!=typeof SVGGraphicsElement?function(t){return t instanceof f(t).SVGGraphicsElement}:function(t){return t instanceof f(t).SVGElement&&"function"==typeof t.getBBox};function m(t){return i?b(t)?function(t){var e=t.getBBox();return y(0,0,e.width,e.height)}(t):v(t):d}function y(t,e,n,r){return{x:t,y:e,width:n,height:r}}var w=function(){function t(t){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=y(0,0,0,0),this.target=t}return t.prototype.isActive=function(){var t=m(this.target);return this.contentRect_=t,t.width!==this.broadcastWidth||t.height!==this.broadcastHeight},t.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t},t}(),_=function(t,e){var n,r,i,o,s,a,c,u=(r=(n=e).x,i=n.y,o=n.width,s=n.height,a="undefined"!=typeof DOMRectReadOnly?DOMRectReadOnly:Object,c=Object.create(a.prototype),l(c,{x:r,y:i,width:o,height:s,top:i,right:r+o,bottom:s+i,left:r}),c);l(this,{target:t,contentRect:u})},g=function(){function t(t,e,n){if(this.activeObservations_=[],this.observations_=new r,"function"!=typeof t)throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=t,this.controller_=e,this.callbackCtx_=n}return t.prototype.observe=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(t instanceof f(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)||(e.set(t,new w(t)),this.controller_.addObserver(this),this.controller_.refresh())}},t.prototype.unobserve=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(t instanceof f(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)&&(e.delete(t),e.size||this.controller_.removeObserver(this))}},t.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},t.prototype.gatherActive=function(){var t=this;this.clearActive(),this.observations_.forEach((function(e){e.isActive()&&t.activeObservations_.push(e)}))},t.prototype.broadcastActive=function(){if(this.hasActive()){var t=this.callbackCtx_,e=this.activeObservations_.map((function(t){return new _(t.target,t.broadcastRect())}));this.callback_.call(t,e,t),this.clearActive()}},t.prototype.clearActive=function(){this.activeObservations_.splice(0)},t.prototype.hasActive=function(){return this.activeObservations_.length>0},t}(),E="undefined"!=typeof WeakMap?new WeakMap:new r,O=function t(e){if(!(this instanceof t))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=u.getInstance(),r=new g(e,n,this);E.set(this,r)};["observe","unobserve","disconnect"].forEach((function(t){O.prototype[t]=function(){var e;return(e=E.get(this))[t].apply(e,arguments)}}));var x=void 0!==o.ResizeObserver?o.ResizeObserver:O;e.a=x},69:function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}},71:function(t,e,n){var r=n(69);t.exports=function(t,e){if(t){if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}},8:function(t,e,n){var r=n(88),i=n(89),o=n(71),s=n(90);t.exports=function(t,e){return r(t)||i(t,e)||o(t,e)||s()}},88:function(t,e){t.exports=function(t){if(Array.isArray(t))return t}},89:function(t,e){t.exports=function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,i=!1,o=void 0;try{for(var s,a=t[Symbol.iterator]();!(r=(s=a.next()).done)&&(n.push(s.value),!e||n.length!==e);r=!0);}catch(c){i=!0,o=c}finally{try{r||null==a.return||a.return()}finally{if(i)throw o}}return n}}},90:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}}}));
!function(){return function e(t,n,o){function s(r,l){if(!n[r]){if(!t[r]){var a="function"==typeof require&&require;if(!l&&a)return a(r,!0);if(i)return i(r,!0);var c=new Error("Cannot find module '"+r+"'");throw c.code="MODULE_NOT_FOUND",c}var u=n[r]={exports:{}};t[r][0].call(u.exports,function(e){return s(t[r][1][e]||e)},u,u.exports,e,t,n,o)}return n[r].exports}for(var i="function"==typeof require&&require,r=0;r<o.length;r++)s(o[r]);return s}}()({1:[function(e,t,n){"use strict";var o=document.getElementById("modal-login"),s=document.querySelectorAll(".btnlogin"),i=document.getElementsByClassName("loginModal__close")[0];function r(){console.log("open"),o.style.display="block"}for(var l=0;l<s.length;l++)s[l].addEventListener("click",r);i.addEventListener("click",function(){o.style.display="none"})},{}],2:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.tnsSingle=function(){tns({container:"#tnsSingle",items:1,slideBy:1,autoplay:!0,autoplayButtonOutput:!1,speed:1e3,mode:"gallery",mouseDrag:!0,controlsText:['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>']})},n.tnsPromotion=function(){tns({container:"#tnsPromotion",items:1,slideBy:1,autoplay:!0,autoplayButtonOutput:!1,swipeAngle:!1,speed:400,nav:!1,mouseDrag:!0,controlsText:['<i class="tns-promotion__prev fas fa-chevron-left" aria-label="promoback"></i>','<i class="tns-promotion__next fas fa-chevron-right" aria-label="promonext"></i>'],responsive:{320:{items:1},960:{items:3}}})},n.tnsCarouselBanking=function(){tns({container:"#tnsCarouselBanking",items:1,slideBy:1,autoplay:!0,autoplayButtonOutput:!1,swipeAngle:!1,speed:400,edgePadding:40,nav:!1,mouseDrag:!0,controlsText:['<i class="tns-carousell__prev fas fa-chevron-left"></i>','<i class="tns-carousell__next fas fa-chevron-right"></i>'],responsive:{480:{items:2},640:{items:3},800:{items:4},960:{items:5},1120:{items:6},1280:{items:7}}})}},{}],3:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.topNav=function(){document.querySelector(".hamburger").addEventListener("click",function(e){e.preventDefault(),[].map.call(document.querySelectorAll(".hamburger"),function(e){e.classList.toggle("is-active")}),[].map.call(document.querySelectorAll(".top-nav__menu"),function(e){e.classList.toggle("show-top-nav")})})}},{}],4:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.videosHome=function(){for(var e=document,t=e.getElementById("iframeVideo"),n=e.querySelectorAll(".img-video"),o=function(e){n[e].addEventListener("click",function(o){var s=n[e].getAttribute("value");o.preventDefault(),t.setAttribute("src",s)})},s=0;s<n.length;s++)o(s)}},{}],5:[function(e,t,n){"use strict";var o,s=e("./components/topNav"),i=e("./components/tns-slider"),r=e("./components/modal-login"),l=(o=r)&&o.__esModule?o:{default:o},a=e("./components/videos-home");(0,s.topNav)(),(0,i.tnsSingle)(),(0,i.tnsPromotion)(),(0,i.tnsCarouselBanking)(),(0,a.videosHome)(),l.default},{"./components/modal-login":1,"./components/tns-slider":2,"./components/topNav":3,"./components/videos-home":4}]},{},[5]);
//# sourceMappingURL=scripts.js.map

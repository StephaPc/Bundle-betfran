(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var modal = document.getElementById("modal-login");
var btn = document.querySelectorAll(".btnlogin");
var span = document.getElementsByClassName("loginModal__close")[0];

function openModal() {
    console.log("open");
    modal.style.display = "block";
}
function closeModal() {
    modal.style.display = "none";
}

for (var i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', openModal);
}

span.addEventListener('click', closeModal);

},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var tnsSingle = exports.tnsSingle = function tnsSingle() {
  var slider = tns({
    container: '#tnsSingle',
    items: 1,
    slideBy: 1,
    autoplay: true,
    autoplayButtonOutput: false,
    speed: 1000,
    mode: 'gallery',
    mouseDrag: true,
    controlsText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>']
  });
};

var tnsPromotion = exports.tnsPromotion = function tnsPromotion() {
  var slider = tns({
    container: '#tnsPromotion',
    items: 1,
    slideBy: 1,
    autoplay: true,
    autoplayButtonOutput: false,
    swipeAngle: false,
    speed: 400,
    nav: false,
    mouseDrag: true,
    controlsText: ['<i class="tns-promotion__prev fas fa-chevron-left" aria-label="promoback"></i>', '<i class="tns-promotion__next fas fa-chevron-right" aria-label="promonext"></i>'],
    responsive: {
      320: {
        items: 1
      },
      960: {
        items: 3
      }
    }
  });
};

var tnsCarouselBanking = exports.tnsCarouselBanking = function tnsCarouselBanking() {
  var slider = tns({
    container: '#tnsCarouselBanking',
    items: 1,
    slideBy: 1,
    swipeAngle: false,
    speed: 400,
    edgePadding: 40,
    nav: false,
    mouseDrag: true,
    controlsText: ['<i class="tns-carousell__prev fas fa-chevron-left"></i>', '<i class="tns-carousell__next fas fa-chevron-right"></i>'],
    responsive: {
      480: {
        items: 2
      },
      640: {
        items: 3
      },
      800: {
        items: 4
      },
      960: {
        items: 5
      },
      1120: {
        items: 6
      },
      1280: {
        items: 7
      }
    }
  });
};

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var topNav = exports.topNav = function topNav() {
	var myFunction = function myFunction() {
		document.querySelector('.hamburger').addEventListener('click', function (e) {
			e.preventDefault();
			[].map.call(document.querySelectorAll('.hamburger'), function (el) {
				el.classList.toggle('is-active');
			});
			[].map.call(document.querySelectorAll('.top-nav__menu'), function (el) {
				el.classList.toggle('show-top-nav');
			});
		});
	};
	myFunction();
};

},{}],4:[function(require,module,exports){
'use strict';

var _topNav = require('./components/topNav');

var _tnsSlider = require('./components/tns-slider');

var _modalLogin = require('./components/modal-login');

var _modalLogin2 = _interopRequireDefault(_modalLogin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _topNav.topNav)();
(0, _tnsSlider.tnsSingle)();
(0, _tnsSlider.tnsPromotion)();
(0, _tnsSlider.tnsCarouselBanking)();
_modalLogin2.default;

},{"./components/modal-login":1,"./components/tns-slider":2,"./components/topNav":3}]},{},[4]);

//# sourceMappingURL=scripts-min.js.map

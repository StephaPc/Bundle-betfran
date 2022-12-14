(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
function initAcc(elem, option) {
    document.addEventListener('click', function (e) {
        if (!e.target.matches(elem + ' .a-btn')) return;else {
            if (!e.target.parentElement.classList.contains('active')) {
                if (option == true) {
                    var elementList = document.querySelectorAll(elem + ' .a-container');
                    Array.prototype.forEach.call(elementList, function (e) {
                        e.classList.remove('active');
                    });
                }
                e.target.parentElement.classList.add('active');
            } else {
                e.target.parentElement.classList.remove('active');
            }
        }
    });
}
initAcc('.accordion.v1', true);
initAcc('.accordion.v2', false);
exports.default = initAcc();

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var modal = document.getElementById("modal-login");
var btn = document.querySelectorAll(".btnlogin");
var span = document.getElementsByClassName("loginModal__close")[0];

function modalLogin() {
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
}

exports.modalLogin = modalLogin;

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var tablecaballos = exports.tablecaballos = function tablecaballos() {
	var hideTable = function hideTable() {
		var tables = document.querySelectorAll('.lorem');
		for (var index = 0; index < tables.length; index++) {
			tables[index].style.display = 'none';
		}
	};
	var d = document,
	    tabs = Array.prototype.slice.apply(d.querySelectorAll('.tabs-container__tab')),
	    tableTap = d.querySelectorAll('.lorem');

	var _loop = function _loop(index) {
		tabs[index].addEventListener('click', function (e) {
			var i = tabs.indexOf(e.target);
			var x = tabs[index];
			hideTable();
			var table = document.querySelector('.' + x.id);
			table.style.display = 'block';
		});
	};

	for (var index = 0; index < tabs.length; index++) {
		_loop(index);
	}
};

},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var tabs = function tabs() {
    var d = document,
        tabs = Array.prototype.slice.apply(d.querySelectorAll('.tabs-container__tab')),
        panels = Array.prototype.slice.apply(d.querySelectorAll('.tabs-container__panel'));

    d.getElementById('tabs').addEventListener('click', function (e) {
        if (e.target.classList.contains('tabs-container__tab')) {
            var i = tabs.indexOf(e.target);
            tabs.map(function (tab) {
                return tab.classList.remove('is-active');
            });
            tabs[i].classList.add('is-active');
            panels.map(function (tab) {
                return tab.classList.remove('is-active');
            });
            panels[i].classList.add('is-active');
        }
    });
};

exports.default = tabs;

},{}],5:[function(require,module,exports){
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
    prevButton: false,
    nextButton: false,
    controlsText: ['<i class="fas fa-chevron-left" aria-label="previous"></i>', '<i class="fas fa-chevron-right" aria-label="next"></i>']
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
    autoplay: true,
    autoplayButtonOutput: false,
    swipeAngle: false,
    speed: 400,
    edgePadding: 40,
    nav: false,
    mouseDrag: true,
    prevButton: false,
    nextButton: false,
    controlsText: ['<i class="tns-carousell__prev fas fa-chevron-left" aria-label="previous"></i>', '<i class="tns-carousell__next fas fa-chevron-right" aria-label="next"></i>'],
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

var tnsPoker = exports.tnsPoker = function tnsPoker() {
  var slider = tns({
    container: '#tnsPoker',
    items: 1,
    slideBy: 1,
    speed: 1000,
    autoplay: true,
    autoplayButtonOutput: false,
    mode: 'gallery',
    mouseDrag: true,
    controlsText: ['<i class="fas fa-chevron-left" aria-label="previous"></i>', '<i class="fas fa-chevron-right" aria-label="next"></i>']
  });
};

},{}],6:[function(require,module,exports){
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

},{}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var videosHome = exports.videosHome = function videosHome() {
	var d = document,
	    video = d.getElementById('iframeVideo'),
	    galeryItem = d.querySelectorAll('.img-video');

	var _loop = function _loop(i) {
		galeryItem[i].addEventListener('click', function (e) {
			var newVideo = galeryItem[i].getAttribute('value');
			e.preventDefault();
			video.setAttribute('src', newVideo);
		});
	};

	for (var i = 0; i < galeryItem.length; i++) {
		_loop(i);
	}
};

},{}],8:[function(require,module,exports){
'use strict';

var _topNav = require('./components/topNav');

var _tnsSlider = require('./components/tns-slider');

var _modalLogin = require('./components/modal-login');

var _videosHome = require('./components/videos-home');

var _tablecaballos = require('./components/tablecaballos');

var _tabs = require('./components/tabs');

var _tabs2 = _interopRequireDefault(_tabs);

var _accordionRules = require('./components/accordion-rules');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {

  (0, _topNav.topNav)();
  (0, _tnsSlider.tnsCarouselBanking)();
  (0, _modalLogin.modalLogin)();

  if (document.body.classList.contains('home')) {
    (0, _tnsSlider.tnsSingle)();
    (0, _tnsSlider.tnsPromotion)();
    (0, _videosHome.videosHome)();
  } else if (document.body.classList.contains('Poker')) {
    (0, _tnsSlider.tnsPoker)();
  } else if (document.body.classList.contains('Caballos')) {
    (0, _tablecaballos.tablecaballos)();
  } else if (document.body.classList.contains('Banca')) {
    (0, _tabs2.default)();
  } else if (document.body.classList.contains('BonoBienvenidaDeportes')) {
    (0, _tnsSlider.tnsPromotion)();
  } else if (document.body.classList.contains('BonoBienvenidaCasino')) {
    (0, _tnsSlider.tnsPromotion)();
  } else if (document.body.classList.contains('BonoRecarga')) {
    (0, _tnsSlider.tnsPromotion)();
  } else if (document.body.classList.contains('ReglasDeportes')) {
    (0, _accordionRules.initAcc)();
  }
})();

},{"./components/accordion-rules":1,"./components/modal-login":2,"./components/tablecaballos":3,"./components/tabs":4,"./components/tns-slider":5,"./components/topNav":6,"./components/videos-home":7}]},{},[8]);

//# sourceMappingURL=scripts-min.js.map

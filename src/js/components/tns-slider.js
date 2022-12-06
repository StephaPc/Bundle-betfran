export const tnsSingle = ()=> {
	const slider = tns({ 
		container           : '#tnsSingle',
		items               : 1, 
		slideBy             : 1,
		autoplay: true,
		autoplayButtonOutput: false,
		speed               : 1000,
		mode                : 'gallery',
		mouseDrag           : true,
    prevButton          : false,
    nextButton          : false,
		controlsText: [ 
			'<i class="fas fa-chevron-left" aria-label="previous"></i>',
			'<i class="fas fa-chevron-right" aria-label="next"></i>'
			]
		}); 
};


export const tnsPromotion = () => {
  let slider = tns({
    container: '#tnsPromotion',
    items: 1,
    slideBy: 1,
		autoplay: true,
		autoplayButtonOutput: false,
    swipeAngle: false,
    speed: 400,
    nav: false,
    mouseDrag: true,
    controlsText: [
      '<i class="tns-promotion__prev fas fa-chevron-left" aria-label="promoback"></i>',
      '<i class="tns-promotion__next fas fa-chevron-right" aria-label="promonext"></i>'
    ],
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


export const tnsCarouselBanking = () =>{
	let slider = tns({
        container       : '#tnsCarouselBanking',
        items           : 1,
        slideBy         : 1,
        autoplay: true,
		    autoplayButtonOutput: false,
        swipeAngle      : false,
        speed           : 400,
        edgePadding     : 40,
        nav             : false,
        mouseDrag       : true,
        prevButton          : false,
        nextButton          : false,
        controlsText    : [ 
          '<i class="tns-carousell__prev fas fa-chevron-left" aria-label="previous"></i>',
          '<i class="tns-carousell__next fas fa-chevron-right" aria-label="next"></i>'
        ],
        responsive: {
            480: {
                items   : 2
              },
            640: {
              items     : 3
            },
            800: {
                items   : 4
              },
            960: {
              items     : 5
            },
            1120: {
                items   : 6
              },
            1280: {
              items     : 7
            }
          }
    }); 
};


export const tnsPoker = () =>{
  let slider = tns({ 
    container           : '#tnsPoker',
    items               : 1, 
    slideBy             : 1,
    speed               : 1000,
    autoplay            :true,
    autoplayButtonOutput: false,
    mode                : 'gallery',
    mouseDrag           : true,
    controlsText: [ 
      '<i class="fas fa-chevron-left" aria-label="previous"></i>',
      '<i class="fas fa-chevron-right" aria-label="next"></i>'
    ]
  }); 
};
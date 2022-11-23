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
		controlsText: [ 
			'<i class="fas fa-chevron-left"></i>',
			'<i class="fas fa-chevron-right"></i>'
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
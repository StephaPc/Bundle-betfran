export const videosHome = ()=>{
	const 
	d = document,
	video = d.getElementById('iframeVideo'),
	galeryItem = d.querySelectorAll('.img-video');
	

	for (let i = 0; i < galeryItem.length; i++) {
		galeryItem[i].addEventListener('click', e =>{
			const newVideo = galeryItem[i].getAttribute('value');
			e.preventDefault();
			video.setAttribute('src', newVideo)
		})
	}
	

}

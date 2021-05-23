document.addEventListener('DOMContentLoaded', function () {
	new Splide('.splide', {
		type: 'loop',
		autoplay: true,
		interval: 4000,
		pauseOnHover: false
	}).mount();
});

var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 1000
});
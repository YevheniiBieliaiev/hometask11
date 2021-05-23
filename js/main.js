document.addEventListener( 'DOMContentLoaded', function () {
	new Splide( '.splide' ).mount();
} );

var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 1000
});
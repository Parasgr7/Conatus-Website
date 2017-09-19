$(document).ready(function(){
	var btnShow = $('#gray-nav .roll-up'),
		btnHide = $('#gray-nav .roll-out'),
		btnNav = $('#btn-gray-nav'),
		nav = $('#gray-nav');
	btnNav.on('click', function() {
		nav.toggleClass('opened');
		btnShow.toggleClass('visible');
		btnHide.toggleClass('visible');
	});
})
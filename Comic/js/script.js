$(document).ready(function() {
	
	var navBtn = $('.nav_item_btn');
	var menu = $('.nav_item');

	navBtn.on('click', function(event) {
		event.preventDefault();
		console.log('click');

		menu.toggleClass('nav_item_mobile');

	});
	
});
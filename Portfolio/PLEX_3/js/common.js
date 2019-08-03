$(document).ready(function() {
	

	// Главное меню

	var menuBtn = $('.menu_item_btn');
	var menu = $('.menu');

	menuBtn.on('click', function(event) {
		event.preventDefault();
		console.log('click');

		menu.toggleClass('menu_mobile');

	});
	

	


});


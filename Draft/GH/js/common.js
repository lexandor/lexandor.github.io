
$(document).ready(function() {

	let searchBtn = $('.icon_search_mobile');
	let searchCloseBtn = $('.icon_close')
	let searchBar = $('.form_search');
	let logo = $('.logo');
	let burger = $('.burger');
	let nav = $('.nav');
	let overlay = $('.overlay');
	let accept_link = $('.accept_link');
	let accept_cloud = $('.cloud');

	// ОБРАБОТКА КНОПКИ ПОИСКА
	searchBtn.on('click', function(event) {
		if(window.innerWidth <= 992){
			event.preventDefault();

			burger.toggleClass('hide');
			logo.toggleClass('hide');
			overlay.toggleClass('display');
			searchBar.toggleClass('display');
			searchBtn.toggleClass('hide');
		}
	});

	searchCloseBtn.on('click', function(event) {
		if(window.innerWidth <= 992){
			event.preventDefault();

			burger.toggleClass('hide');
			logo.toggleClass('hide');
			overlay.toggleClass('display');
			searchBar.toggleClass('display');
			searchBtn.toggleClass('hide');
		}
	});

	// ОБРАБОТКА КНОПКИ МЕНЮ
	burger.on('click', function(event) {
		overlay.toggleClass('display');
		$(".burger span").toggleClass('active');
		nav.toggleClass('animate');

		if (nav.hasClass('animate')){
			$('html, body').css({
				overflow: 'hidden',
				height: '100%'
			});
		} else {
			$('html, body').css({
				overflow: 'auto',
				height: 'auto'
			});
		}
	});

	// МАСКА ТЕЛЕФОНА
	$('#phone').mask('+7(999) 999-99-99');

	// ОКНО СОГЛАСИЯ
	accept_link.hover(function(){
		accept_cloud.show()
	}, function(){
		accept_cloud.hide()
	});



}); 
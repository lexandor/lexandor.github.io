// $(function() {

	

// });


// МЕНЮ

// TODO: Уточнить сколько интерактива делать

$(document).ready(function() {

	let searchBtn = $('.icon_search_mobile');
	let searchCloseBtn = $('.icon_close')
	let searchBar = $('.form_search');
	let logo = $('.logo');
	let burger = $('.burger');
	let nav = $('.nav');
	let overlay = $('.overlay');

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

	$('#phone').mask('+7(999) 999-99-99');
}); 
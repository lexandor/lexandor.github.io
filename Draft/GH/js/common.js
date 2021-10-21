
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
	let support_btn = $('.support_btn');
	let support = $('.support');

	let phone = $('#phone');
	let phone_btn = $('.order_btn');
	let err_mess = $('.mistake');
	let ok_mess = $('.ok');

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
	$('#phone').mask('+7(999) 999-99-99', {autoclear: false});

	// ОКНО СОГЛАСИЯ
	if(window.innerWidth >= 992){
		accept_link.hover(function(){
			accept_cloud.show()
		}, function(){
			accept_cloud.hide()
		});
	} else {
		accept_link.on('click', function(event) {
			event.preventDefault();
			accept_cloud.toggleClass('display');
			console.log('1');
		});
	}


	// ФОРМА ПОДДЕРЖКИ
	support_btn.on('click', function(event) {
		support.toggleClass('active');
	});


	phone_btn.on('click', function(event) {
		event.preventDefault();

		// ТУТ НАЧИНАЕТСЯ МАГИЯ
		if (phone.val() == '+7(000) 000-00-00' || phone.val() == '' || /_/.test(phone.val())){
			err_mess.css( "display", "block" )
			ok_mess.hide()
		} else {
			ok_mess.css( "display", "block" )
			err_mess.hide()
			
		}
	});
	
	
}); 
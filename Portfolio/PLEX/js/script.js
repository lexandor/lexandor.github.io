
// window.onload = function () {

//     var div = document.getElementById('vidOff');
//     div.onclick = function () {
//         div.style.display = 'none';
//     };
// };

// $(window).on('load', function(event) {
	
// 	var wrap = $('vidOff');
// 	wrap.on('click', function(event) {
// 		event.preventDefault();
// 		console.log('1');
// 		wrap.style.display = 'none';
// 	});
// });

$(document).ready(function() {
	
	var navBtn = $('.menu_item_btn');
	var menu = $('.menu_item');

	navBtn.on('click', function(event) {
		event.preventDefault();
		console.log('click');

		menu.toggleClass('menu_active');

	});
	
});

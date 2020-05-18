$(document).ready(function() {

	function cl(arg){
		console.log(arg)
	}
	

	// Главное меню

	var menuBtn = $('.menu_btn');
	var menu = $('.menu');

	menuBtn.on('click', function(event) {
		event.preventDefault();
		console.log('click');

		menu.toggleClass('menu_mobile');

	});

// ------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------

	function Progress(circleId, circlePersent, pBarsArgs, color){
		//__________________________
		//
		// Circle progressbar
		//__________________________

		if (circleId != null && circlePersent != null){
			var line = new ProgressBar.Line(circleId);
			var bar = new ProgressBar.Circle(circleId, {
			  color: '#aaa',
			  // This has to be the same size as the maximum width to
			  // prevent clipping
			  strokeWidth: 10,
			  trailWidth: 10,
			  easing: 'easeInOut',
			  duration: 1400,
			  text: {
			    autoStyleContainer: false
			  },
			  from: { color: color, width: 10 },
			  to: { color: color, width: 10 },
			  // Set default step function for all animate calls
			  step: function(state, circle) {
			    circle.path.setAttribute('stroke', state.color);
			    circle.path.setAttribute('stroke-width', state.width);

			    var value = Math.round(circle.value() * 100);
			    if (value === 0) {
			      circle.setText('');
			    } else {
			      circle.setText(value + '%');
			    }

			  }
			});
			bar.text.style.fontFamily = 'Montserrat, "Raleway", Helvetica, sans-serif';
			bar.text.style.fontSize = '4rem';

			var circlePersent = circlePersent / 100;

			bar.animate(circlePersent);
		}
		

		//__________________________
		//
		// Line progressbar
		//__________________________

		if (pBarsArgs != null){
			for(var item in pBarsArgs ){

				persent = pBarsArgs[item];
				itemName = '#' + item;

				var bar = new ProgressBar.Line(itemName, {
				  strokeWidth: 4,
				  easing: 'easeInOut',
				  duration: 1400,
				  color: color,
				  trailColor: '#eee',
				  trailWidth: 4,
				  svgStyle: {width: '100%', height: '100%'}
				});

				var persent = persent / 100;
				bar.animate(persent);
			};
		}		
	}

	function getProgressBar(){
			new Progress('#f-e', 70, {
				html: 70,
				css: 65,
				js: 30,
				react: 20
			}, '#D66464');
			new Progress('#b-e', 50, {
				php: 35,
				wp: 30,
				py: 85,
				dj: 70
			}, '#D66464');
			new Progress('#diz', 35, {
				ps: 90,
				ill: 35,
				fig: 75
			}, '#D66464');
			new Progress(null, null, {
				git: 70,
				gulp: 35,
				sass: 75
			}, '#D66464');		
	}

	$(window).on('scroll', function(event) {
		if ($(this).width() >= 1200 && $(this).scrollTop() > 1900){
				getProgressBar();
				$(this).off()
		}
		if ($(this).width() >= 300 && $(this).scrollTop() > 2600 && $(this).width() < 1200){
				
				getProgressBar();
				$(this).off()
		}
		
	});


// ------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------

	

	// function amount(operation){         DON'T WORKING!!!!!!!

	// 	// Работа с счётчиком
	// 	inp = $(this).parent().children().first();
	// 	val = parseInt(inp.val());
	// 	if (operation == '+'){
	// 		val += 1;
	// 		inp.val(val);
	// 	} else if (operation == "-"){
	// 		if ( val > 0 ) {
	// 			val -= 1;
	// 			inp.val(val)	
	// 		}
	// 	} else {
	// 		cl('Неизвестная операция!. Передайте аргументом + или -');
	// 	}

	// 	//Работа с расчетами
	// 	var price = $(this).parent().prev().attr('data-price');//Цена
	// 	var count = inp.val();// Количество

	// 	if (price != undefined && count != undefined) {
	// 		var amount = price * count;
	// 		$(this).parent().children().last().html(': ' + amount + ' руб');
	// 		total.push(amount);
	// 	}
	// }

	var $rows = $('.price_list_item');
	var valute = $('#price').data('valute')

	cl('---------------------------')
	
	for(var row in $rows){
		if(parseInt(row) || parseInt(row) == 0){
			var li = $($rows[row]);

			var form = li.children('form');

			var input     = form.children('.price_list_count');
			var btn_plus  = form.children('.price_list_count_btn.plus');
			var btn_minus = form.children('.price_list_count_btn.minus');
			var btn_check = form.children('.price_list_check');

			btn_plus.on('click', function(event) {
				event.preventDefault();

				// Работа с счётчиком
				inp = $(this).parent().children().first();
				val = parseInt(inp.val());
				val += 1;
				inp.val(val);

				//Работа с расчетами
				var price = $(this).parent().prev().attr('data-price');//Цена
				var count = inp.val();// Количество

				if (price != undefined && count != undefined) {

					var amount = price * count;

					if(valute == 'rub'){
						$(this).parent().children().last().html(': ' + amount + ' руб');
					} else if(valute == 'dol'){
						$(this).parent().children().last().html(': ' + amount + ' $');
					}
					
				}
			});

			btn_minus.on('click', function(event) {
				event.preventDefault();

				// Работа с счётчиком
				inp = $(this).parent().children().first();
				val = parseInt(inp.val());
				if ( val > 0 ) {
					val -= 1;
					inp.val(val)
				}

				//Работа с расчетами
				var price = $(this).parent().prev().attr('data-price');//Цена
				var count = inp.val();// Количество

				if (price != undefined && count != undefined) {

					var amount = price * count;

					if(valute == 'rub'){
						$(this).parent().children().last().html(': ' + amount + ' руб');
					} else if(valute == 'dol'){
						$(this).parent().children().last().html(': ' + amount + ' $');
					}
				}
			});

			btn_check.on('click', function(event) {
				event.preventDefault();

				var price = $(this).parent().prev().attr('data-price');
				$(this).toggleClass('check');
				
				if ( $(this).hasClass('check') ){
					$(this).html('<i class="fas fa-check"></i>');

					if (price.slice(-1) == "%"){

						pricePer = parseInt(price.slice(0,-1)) / 100;

						var $amountList = $(this).parent().parent().prevAll();
						var sum = 0;
						for(item in $amountList){
							if(parseInt(item) || parseInt(item) == 0){

								var li = $($amountList[item]);
								amount = li.children('.price_list_form').find('.price_list_amount').html();

								if(valute == 'rub'){
									amount = parseInt(amount.slice(2,-3));
								} else if(valute == 'dol'){
									amount = parseInt(amount.slice(2,-1));
								}
								
								sum += amount;
							}
						}

						amount = sum * pricePer;
						amount = amount.toFixed(1)
						if(valute == 'rub'){
							$(this).parent().children().last().html(': ' + amount + ' руб');
						} else if(valute == 'dol'){
							$(this).parent().children().last().html(': ' + amount + ' $');
						}

					} else {
						amount = price;
						if(valute == 'rub'){
							$(this).parent().children().last().html(': ' + amount + ' руб');
						} else if(valute == 'dol'){
							$(this).parent().children().last().html(': ' + amount + ' $');
						}
						
					}
				} else {
					$(this).html('');
					amount = 0;
					if(valute == 'rub'){
						$(this).parent().children().last().html(': ' + amount + ' руб');
					} else if(valute == 'dol'){
						$(this).parent().children().last().html(': ' + amount + ' $');
					}
				}
			});

			input.on('keydown change', function(event) {
				/* Act on the event */

				var price = $(this).parent().prev().attr('data-price');//Цена
				var count = $(this).val();// Количество

				if (price != undefined && count != undefined) {

					var amount = price * count;

					if(valute == 'rub'){
						$(this).parent().children().last().html(': ' + amount + ' руб');
					} else if(valute == 'dol'){
						$(this).parent().children().last().html(': ' + amount + ' $');
					}
				}
			});
		}	
	}

	btn_countAll = $('.btn.price_btn');
	var resultPrice = $('#amount');

	btn_countAll.on('click', function(event) {
		event.preventDefault();

		var $spans = $('.price_list_amount');
		var valute = $('#price').data('valute')
		
		var result = 0;
		console.log(1)

		for(var span in $spans){
			if(parseInt(span) || parseInt(span) == 0){
				amount = $($spans[span]).html();
				if(valute == 'rub'){
					amount = parseInt(amount.slice(2,-3));
				} else if(valute == 'dol'){
					amount = parseInt(amount.slice(2,-1));
				}
				
				result += amount;

				if(valute == 'rub'){
					resultPrice.html(result + ' руб');
				} else if(valute == 'dol'){
					resultPrice.html(result + ' $');
				}
			}
		}
		
	});
	
























});


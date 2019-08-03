$(document).ready(function() {
	

	// Главное меню

	var menuBtn = $('.menu_btn');
	var menu = $('.menu');

	menuBtn.on('click', function(event) {
		event.preventDefault();
		console.log('click');

		menu.toggleClass('menu_mobile');

	});
	

	// Аккардион

	var accTitlesArray = document.querySelectorAll('.acc_title');

	for (var i = 0; i < accTitlesArray.length; i++) {

		var title = accTitlesArray[i];

		title.addEventListener("click", function() {
			this.classList.toggle("active");

			var content = this.nextElementSibling;
			content.classList.toggle('active-item')
		});		
	}

	// Карточки в магазине

	var shopBtnArray = document.querySelectorAll('.shop_btn');

	for (var i = 0; i < shopBtnArray.length; i++) {

		var btn = shopBtnArray[i];

		btn.addEventListener("mousedown", function() {
			this.parentNode.classList.add("active");
		});
		btn.addEventListener("mouseup", function() {
			this.parentNode.classList.remove("active");
		});			
	}


	// Слайкдер в contains секции

	(function () {
	    var controls = document.querySelectorAll('#con_controller .slider_controller_item i');
	    
	    var disactivePoint = 'far fa-dot-circle';
	    var activePoint = 'fas fa-dot-circle active';

	    var slides = document.querySelectorAll('#con_slider .slide');
	    var currentSlide = 0;
	    var slideInterval = setInterval(nextSlide,8000);

	    function nextSlide(){
	    	goToSlide(currentSlide+1);
	    }

	    function previousSlide(){
	    	goToSlide(currentSlide-1);
	    }

	    function pauseSlideshow(){
	    	playing = false;
	    	clearInterval(slideInterval);
	    }

	    function playSlideshow(){
	    	playing = true;
	    	slideInterval = setInterval(nextSlide,2000);
	    }

	    function goToSlide(n){
	    	slides[currentSlide].className = 'slide';
	    	controls[currentSlide].className = disactivePoint;
	    	currentSlide = (n+slides.length)%slides.length;
	    	slides[currentSlide].className = 'slide show';
	    	controls[currentSlide].className = activePoint;
	    }


	    var playing = true;

	}());


	// Слайкдер в feedback секции

	(function () {
	    var controls = document.querySelectorAll('#con_controller .slider_controller_item i');
	    
	    var slideInterval = setInterval(nextSlide,18000);

	    var slides = document.querySelectorAll('#feed_slider .slide');
	    var currentSlide = 0;

	    function nextSlide(){
	    	goToSlide(currentSlide+1);
	    }

	    function previousSlide(){
	    	goToSlide(currentSlide-1);
	    }

	    function pauseSlideshow(){
	    	playing = false;
	    	clearInterval(slideInterval);
	    }

	    function playSlideshow(){
	    	playing = true;
	    	slideInterval = setInterval(nextSlide,2000);
	    }

	    function goToSlide(n){
	    	slides[currentSlide].className = 'slide';
	    	currentSlide = (n+slides.length)%slides.length;
	    	slides[currentSlide].className = 'slide show';
	    }


	    var playing = false;

	    var next = document.getElementById('next');
	    var previous = document.getElementById('prev');

	    next.onclick = function(){
	    	pauseSlideshow();
	    	nextSlide();
	    };
	    previous.onclick = function(){
	    	pauseSlideshow();
	    	previousSlide();
	    };
	}());
});


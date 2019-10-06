$(document).ready(function () {
	
	$('.menu-btn').on('click',function () {
		$('body').addClass('noscroll');
		$('.nav').addClass('active');

	});

	$('.close').on('click',function (e) {
		e.preventDefault();

		$('body').removeClass('noscroll');
		$('.nav').removeClass('active');
	});

	$('.js-popup').on('click', function (e) {
		e.preventDefault();

		$('body').addClass('noscroll');
		$('#overlay').show();
		$('.popup').addClass('active');
	});

	$('.close-popup, #overlay').on('click', function (e) {
		e.preventDefault();

		$('body').removeClass('noscroll');
		$('#overlay').hide();
		$('.popup').removeClass('active');
	});

	// slider
	$('.main-slider').slick({
		appendArrows: '.main-slider__arrows',
		dots: true,
		appendDots: '.main-slider__dots',
		fade: true,
		infinite: false,
		prevArrow: '<span class="prev-arrow"><svg  width="14" height="25" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:avocode="https://avocode.com/" viewBox="0 0 14 25"><g><g><path d="M1.35331,13.35296l-0.70745,-0.70721l0.14625,-0.14624l-0.14625,-0.14624l0.70745,-0.70721l0.14614,0.14614l11.14676,-11.1461l0.70699,0.70678l-11.14646,11.14662l11.14646,11.14662l-0.70699,0.70678l-11.14676,-11.1461z" fill="currentColor" fill-opacity="1"></path></g></g></svg></span>',
		nextArrow: '<span class="next-arrow"><svg  width="14" height="25" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:avocode="https://avocode.com/" viewBox="0 0 14 25"><g><g><path d="M0.6458,1.3529l0.70745,-0.70678l11.14655,11.1463l0.14636,-0.14635l0.70699,0.70721l-0.14624,0.14624l0.14624,0.14624l-0.70699,0.70721l-0.14636,-0.14635l-11.14655,11.1463l-0.70745,-0.70678l11.14688,-11.14662z" fill="currentColor" fill-opacity="1"></path></g></g></svg></span>',
		responsive: [
			{
				breakpoints: 768,
				settings: {
				}
			}
		]
	});

	$('.slick-dots li:first-child button').text('Девушкам');
	$('.slick-dots li:nth-child(2) button').text('Мужчинам');
	$('.slick-dots li:last-child button').text('Детям');

	$('.js-toggle-slider').on('click', function() {
        var slide = $(this).attr('data-slide');
        var id  = $(this).attr('href'),
            top = $(id).offset().top;

        $('body,html').animate({scrollTop: top}, 1000);
        
        $('.main-slider').slick('slickGoTo', slide);
      });

	$(".type-list").on("click","a", function (e) {
        e.preventDefault();
        //забираем идентификатор бока с атрибута href
        

    });


})
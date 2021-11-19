$(function () {
	$('.menu__btn').on('click', function () {
		$('.menu__list').toggleClass('menu__list--active');
	});
	$('.menu__list').on('click', function () {
		$('.menu__list').removeClass('menu__list--active');
	});
	$('.friends__slider').slick({
		nextArrow: '<button class="slick-arrow slick-next"><img src="images/icons/right-arrow.png" alt="next arrow"></button>',
		prevArrow: '<button class="slick-arrow slick-prev"><img src="images/icons/left-arrow.png" alt="prev arrow"></button>',
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1300,
				settings: {
					arrows: false,
					dots: true,
				}
			},
			{
				breakpoint: 920,
				settings: {
					arrows: false,
					dots: true,
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 620,
				settings: {
					arrows: false,
					dots: true,
					slidesToShow: 1,
				}
			},
		]
	});
	$('[data-scroll]').on('click', function (event) {
		event.preventDefault();

		blockId = $(this).data('scroll');
		blockOffset = $(blockId).offset().top;

		$("html,body").animate({
			scrollTop: blockOffset + 50
		}, 700);
	});
});
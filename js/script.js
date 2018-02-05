$(function () {
	initialize();
	$(window).resize(function () {
		initialize();
	});
	function initialize() {
		var pd = $('.subscribe .btn').eq(0)[0].getBoundingClientRect().x;
		$('.subscribe .trial').css('left', pd - 25 + 'px');

	}
})();
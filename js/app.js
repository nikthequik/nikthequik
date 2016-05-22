$(function(){
	if ($(window).width() > 800) {
		$('.pull').hover(function() {
				$(this).stop().animate({right: "25%"}, 500);
				},
				function() {
				$(this).stop().animate({right: 0}, 500);
				});
		$('.push').hover(function() {
			$(this).stop().animate({left: "25%"}, 500);
			},
			function() {
			$(this).stop().animate({left: 0}, 500);
			});
	}
});
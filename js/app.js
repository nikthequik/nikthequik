$(function(){
	if ($(window).width() > 866) {
		$('.pull').hover(function() {
			$(this).children('article').stop().animate({right: "25%"}, 500);
			
				$('#michigan').stop().fadeIn(600);
				
			},
			function() {
			$(this).children('article').stop().animate({right: 0}, 500);
			$('#michigan').stop().fadeOut("fast");
			});
		$('.push').hover(function() {
			$(this).children('article').stop().animate({left: "25%"}, 500);
			},
			function() {
			$(this).children('article').stop().animate({left: 0}, 500);
			});
	}
});

function reveal() {


};
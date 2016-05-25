$(function(){
	//Perform only on screens above 842px
	if ($(window).width() > 842) {
		$('.pull').hover(function() {
			$(this).children('article').stop().animate({right: "25%"}, 500);
			$(this).children('img').stop().fadeIn(1000);	
			},
			function() {
			$(this).children('article').stop().animate({right: 0}, 500);
			$(this).children('img').stop().fadeOut("fast");
			});
		$('.push').hover(function() {
			$(this).stop().animate({left: "25%"}, 500);
			$(this).children('img').stop().fadeIn(1000);
			},
			function() {
			$(this).stop().animate({left: 0}, 500);
			$(this).children('img').stop().fadeOut("fast");
			});
	}

	//Perform only on screens below 842px
	else {

	}
});
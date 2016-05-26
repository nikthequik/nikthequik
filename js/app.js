$(function(){
	//Perform only on screens above 842px
	if ($(window).width() > 842) {
		//Slide pull to left
		$('.pull').hover(function() {
			$(this).children('article').stop().animate({right: "25%"}, 500);
			$(this).children('img').stop().fadeIn(1000);	
			},
			function() {
			$(this).children('article').stop().animate({right: 0}, 500);
			$(this).children('img').stop().fadeOut("fast");
			});
		//On hover make image appear
		$('.push').hover(function() {
			$(this).siblings('img').stop().slideToggle("slow");
			},
			function() {
			$(this).siblings('img').stop().slideToggle("slow");
			});
	}

	//Perform only on screens below 842px
	else {

	}
});
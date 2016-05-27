$(function(){
	//Perform only on screens above 842px
	if ($(window).width() > 842) {
		
		$('#story').hover(function() {
			$('#michigan, #nmu').stop().fadeIn(1000);
			
			},
			function() {
			$('#michigan, #nmu').stop().fadeOut("fast");
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
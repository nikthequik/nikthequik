$(function(){
	$('.pull').hover(function() {
		$('.pull').stop().animate({right: "25%"}, 500);
	},
	function() {
		$('.pull').stop().animate({right: 0}, 500);
	});
});
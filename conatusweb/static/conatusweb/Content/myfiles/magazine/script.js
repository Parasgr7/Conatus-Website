$(document).ready(function(){
	var $nav = $(".navbar");
	var $wrap = $(".wrap");
	var $main = $("main");
	var $back_to_top = $(".back_to_top");
	var $header_home = $(".header-home");
	var $header = $(".header");
	var $next = $(".next");
	var $previous = $(".previous");
	var $controls =  $(".controls");
	var $window_height = $(window).height();
	var $counter = 0; 

	$header_home.css("opacity","1").css("height",$window_height);
	$header.css("opacity","1");
	$next.css("top",$window_height/2);
	$previous.css("top",$window_height/2);
	$controls.css("visibility","visible");
	function Toggle_Display(){
		$wrap.css("width","200");
		$search.focus();
		$counter=1;
	}
	function Toggle_Hide(){
		$wrap.css("width","30");
		$counter=0;
	}

	$header_home.animate({
		height:"550px"
	},1000,function(){
	});

	$back_to_top.click(function(){
		console.log("abc");
		$('body,html').animate({
			scrollTop: "0"
		},1200);
	});

	$(window).scroll(function(){
		var height= $(window).scrollTop();
		if(height!=0)
		{
			$nav.addClass("navbar-top");
			$back_to_top.addClass("back_to_top_scrolled");

		}
		if(height==0){
			$nav.removeClass("navbar-top");
			$back_to_top.removeClass("back_to_top_scrolled");
		}
	});

	$(window).resize(function(){
		$window_height = $(window).height();
		$next.css("top",$window_height/2);
		$previous.css("top",$window_height/2);
	});
});

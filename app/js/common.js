$(function() {

//mobile menu
		$(".points-wrapper").after("<div id='my-menu'>");
		$(".points-wrapper").clone().appendTo("#my-menu");
		$("#my-menu").find("*").attr("style", "");
		$("#my-menu").find("ul").removeClass("points-wrapper");
		$("#my-menu").mmenu({
			extensions: [ 'widescreen', 'effect-menu-slide', 'pagedim-black' ],			
			navbar: {
				title: "Меню"
			}
		});		

		var api = $("#my-menu").data("mmenu");
		api.bind("closed", function() {
			$(".toggle-mnu").removeClass("on");
			$(".mobile-menu b").html("Меню");
		});

   	$(".mobile-menu").click(function() {
			var mmAPI = $("#my-menu").data( "mmenu" );			
			mmAPI.open();
			var thiss = $(this).find(".toggle-mnu");
		  thiss.toggleClass("on");
		  $(".points-wrapper").slideToggle();
		  $(".mobile-menu b").html("&nbsp;");
		  return false;
		});		

//owl carousel
	$(".slideshow-container .owl-carousel").owlCarousel({
		autoplay: true,
		autoplayTimeout: 10000,
		smartSpeed: 500,
		autoplayHoverPause: true,	
		navText: ['<img src="img/arrow-left.png" alt="left">','<img src="img/arrow-right.png" alt="right">'],	
		loop: true,
		nav: true,
		items: 1
	});

	$(".reviews .owl-carousel").owlCarousel({
		autoplay: true,
		autoplayTimeout: 15000,
		smartSpeed: 500,
		autoplayHoverPause: true,	
		loop: true,
		nav: false,
		items: 1
	});	

//Equal heights
  $(".about-people .about-man").equalHeights(); 

});

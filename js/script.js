$(document).ready(function () {

	$('#slides').superslides({
		play: 5000,
		animation_speed: 2000,
		animation: 'fade',
		pagination: false
	});

	// for cover images parallax effect
	// $('.parallax').scrolly({bgParallax: true});

	// for cover images slider
	$('.parallax').hide();
	function anim() {
		$("#slides .parallax").first().appendTo('#slides').fadeOut(1800);
		$("#slides .parallax").first().fadeIn(1800);
		setTimeout(anim, 5000);
	}
	anim();

	$('#startPlanningBtn').on('click', function() {
		ga('send', 'event', 'button', 'click', 'startPlanningBtn1');
	});

	$('#startPlanningBtn2').on('click', function() {
		ga('send', 'event', 'button', 'click', 'startPlanningBtn2');
	});

	$(".mr-navBrand").click(function (){
		scrolling = true;
		$('html, body').animate({
			scrollTop: $("#slides").offset().top
		}, 1000, function() {
			scrolling = false;
		});
		$('.nav').children('li').removeClass('active');
	});

	$(".arrow-down").click(function (){
		scrolling = true;
		$('html, body').animate({
			scrollTop: $("#about").offset().top
		}, 1000, function() {
			scrolling = false;
		});
		$('.nav').children('li').removeClass('active');
		$('#about-tab').addClass('active');
	});

	$("#about-tab").click(function (){
		scrolling = true;
		$('html, body').animate({
			scrollTop: $("#about").offset().top
		}, 1000, function() {
			scrolling = false;
		});
		$('.nav').children('li').removeClass('active');
		$(this).addClass('active');
	});

	$("#features-tab").click(function (){
		scrolling = true;
		$('html, body').animate({
			scrollTop: $("#features").offset().top
		}, 1000, function() {
			scrolling = false;
		});
		$('.nav').children('li').removeClass('active');
		$(this).addClass('active');
	});

	$("#widgets-tab").click(function (){
		scrolling = true;
		$('html, body').animate({
			scrollTop: $("#widgets").offset().top
		}, 1000, function() {
			scrolling = false;
		});
		$('.nav').children('li').removeClass('active');
		$(this).addClass('active');
	});

	$("#contact-tab").click(function (){
		scrolling = true;
		$('html, body').animate({
			scrollTop: $("#contact").offset().top
		}, 1000, function() {
			scrolling = false;
		});
		$('.nav').children('li').removeClass('active');
		$(this).addClass('active');
	});

	var scrolling = false;
	$(document).on('scroll', function() {
		console.log($(window).width());
		$('section').each(function() {
			var wt = $(window).scrollTop();
			var at = $(this).position().top;
			var dt = at - wt;
			if (dt >= 0 && dt < 520 && !scrolling) {
				var name = $(this).attr('id');
				$('.nav').children('li').removeClass('active');
				$('#' + name + '-tab').addClass('active');
			}
		});

	});


	$(".collapsed").collapse();

});




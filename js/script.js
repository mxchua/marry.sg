$(document).ready(function () {

    $('#slides').superslides({
        play: 5000,
        animation_speed: 2000,
        animation: 'fade',
        pagination: false
    });

    // for cover images parallax effect
    $('.parallax').scrolly({bgParallax: true});

    // for cover images slider
    $('.parallax').hide();
    function anim() {
        $("#slides .parallax").first().appendTo('#slides').fadeOut(1800);
        $("#slides .parallax").first().fadeIn(1800);
        setTimeout(anim, 5000);
    }
    anim();
});

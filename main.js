// ACTIVE NAVBAR
$(function(){
	$(window).on('scroll', function(){
		if($(window).scrollTop() > 10){
			$('.navigation-wrap').addClass('scroll-on');
		}
		else{
			$('.navigation-wrap').removeClass('scroll-on');
		}
	})
})

$(function(){
	$('.navbar-toggler').on('click', function(){
		$('.navigation-wrap').addClass('scroll-on');
	})
})

// NAVBAR HIDE

$('.navbar-nav>li>a').on('click', function(){
    $('#navbarNav').collapse('hide');
});

//ANIMATION

AOS.init({
	disable:'mobile'
});
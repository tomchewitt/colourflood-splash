$(document).ready(function() {

	// *****************************************************************
	// INIT
	// *****************************************************************




	// *****************************************************************
	// MAIN NAV
	// *****************************************************************
	$('.main-nav span').click(function() {
		var thisclass = $(this).attr('class');
		if (thisclass == 'bonus') {
			window.open($(this).attr('data-url'), '_blank');
			return;
		}

		$('.' + thisclass).css({display: 'block'});
		TweenMax.to('.content-panel', 0.8, {left: 0, ease:Expo.easeInOut});
		TweenMax.to('.content-wrap', 1.2, {marginLeft: 0, ease:Expo.easeOut, delay: 0.5, onComplete:function() {
			$('body').css({overflowY: 'visible'});
		}});
	});


	$('.content-wrap .close').click(function() {
		var classname = $(this).attr('data-close');
		TweenMax.to('.content-panel', 1.2, {left: '100%', ease:Expo.easeOut, delay: 0.5});
		TweenMax.to('.content-wrap', 0.8, {marginLeft: '100%', ease:Expo.easeInOut, onComplete:closeComplete, onCompleteParams:[classname]});
	});

	function closeComplete(classname) {
		$('.content-wrap .' + classname).css({display: 'none'});
	}


	// *****************************************************************
	// SLIDER IMAGES
	// *****************************************************************
	

	
});

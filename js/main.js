$(function() {
	$('.side-menu__item_drop').click(function(e) {
		e.preventDefault();
		var drop = $(this).find('.side-menu__child'),
				link = $(this).find('.toggle');

		if(drop.is(':hidden')){
			$('.side-menu__item_drop').removeClass('active');
			$('.side-menu__child').slideUp(350);
			$('.toggle').removeClass('active');
			$(this).addClass('active');
			drop.slideDown(350);
			link.addClass('active');
		}
		else{
			$(this).removeClass('active');
			drop.slideUp(350);
			link.removeClass('active');
		}
	});
});

$(function() {
	$('.navbar-toggle').click(function(e) {
		var menu = $('.mobile-menu');
		if(menu.is(':hidden'))
			$('.mobile-menu').slideDown(350)
		else
			$('.mobile-menu').slideUp(350)
	});

	$('.mobile-menu__toggle').click(function(e) {
		e.preventDefault();
		var drop = $(this).next();
		if(drop.is(':hidden')){
			$('.mobile-menu__toggle').removeClass('active');
			$('.modile-menu__drop').hide();
			$(this).addClass('active');
			drop.show();
		}
		else{
			$(this).removeClass('active');
			drop.hide();
		}
	});
});
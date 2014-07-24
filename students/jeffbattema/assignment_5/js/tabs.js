
$('nav').find('li').each(function(){
	
	$(this).on('click', function() {
		
		if ($(this).hasClass('active'))
		{
			return;											// do nothing if clicking on already active tab
		}
		
		var targ = $(this).find('a').attr('href'),			// find target content from href
			prev = $('#content-wrapper').find('.active');	// find previous target to hide

		$(this).siblings('.active').removeClass ('active');	// make rev tab inactive
		prev.removeClass('active');

		$(this).addClass ('active');
		$(targ).addClass('active');

	});

});


var clearPanel = function()
{
	$('nav').find('ul').empty();
	$('#content-wrapper').empty();
}

var populate = function () {
	$.getJSON ('http://rs.hankyates.com:3000/content',function(data){
		//console.log ('data: '+data);
		// writeNav(data);
		
		data.forEach(function(key, n){
			// console.log ('key: '+key+", "+value);
			// key.name
			// key.content
			// console.log ('value: '+value);
			var addClass='';
			if (!n)
			{
				addClass = ' class="active"';
			}
			$('nav').find('ul').append('<li '+addClass+'><a href="#'+key.name+'">'+key.name+'</a></li>');
			$('#content-wrapper').append('<div id="'+key.name+'" '+addClass+'>'+key.content+'</div>');

			activateNav();
		});
	});
}

var activateNav = function () {

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

}

populate ();
$('#btn-clear').click(function(){
	clearPanel ();
	populate ();
});
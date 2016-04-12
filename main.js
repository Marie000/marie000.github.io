var fadeOut = function(){
	var list = ['#home','#about','#work','#contact']
	for (var i=0;i<list.length;i++){
		if ($(list[i]).is(':visible')){
			$(list[i]).fadeOut('slow')
		}
	}
}

$(document).ready(function(){
	$('#about').hide();
	$('#work').hide();
	$('#contact').hide();

$('#aboutLink').click(function(){
	fadeOut();
	$('#about').fadeIn('slow');
})

$('#homeLink').click(function(){
	fadeOut();
	$('#home').fadeIn('slow');
})

$('#workLink').click(function(){
	fadeOut();
	$('#work').fadeIn('slow');
})

$('#contactLink').click(function(){
	fadeOut();
	$('#contact').fadeIn('slow');
})


});




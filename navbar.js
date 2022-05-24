$(document).ready(function(){
	//Load the navbar
	$('#navigation').load("/portfolio/navbar.html");
	
	//Add headings to the navbar
	headings = $("h1");
	for (var i=0; i<headings.length; i++) {
		$('#navbar-content').append('<li class="nav-item"><a class="nav-link" href="#' + headings[i].id + '">' + headings[i].textContent + '</a></li>');
	}
	
	//Add an offset when clicking the navbar headings
	$(function($){
		$('a[href*="#"]:not([href="#"])').click(function(){
			var target = $(this.hash);
			$('html, body').stop().animate({
				scrollTop: target.offset().top - 64
			}, 'linear');   
		});
	});
});
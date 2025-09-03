$(document).ready(function(){
	$('#navigation').load("/portfolio/navbar.html");
    setTimeout(function(){
        if (document.location.href.includes("index.html")) {
            load_navbar_content("header");
        } else {
            load_navbar_content("h1");
        }
    }, 100);
});

function load_navbar_content(header_type) {
    //Add headings to the navbar
    headings = $(header_type);
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

    //Sometimes (probably if the site is not cached) it needs a little time to work
    if ($("#navbar-content > li").length == 0) {
        setTimeout(load_navbar_content(header_type), 100);
    }
}

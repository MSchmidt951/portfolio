$(function(){
    if (document.location.href.includes("index.html") || !document.location.href.includes(".html")) {
        load_navbar_content("header");
    } else {
        load_navbar_content("h1");
    }
    load_footer_content();
});

function load_navbar_content(header_type) {
    //Add navbar
    navbar = `
        <nav class="navbar navbar-expand navbar-dark bg-dark ml-auto">
            <div class="container-xxl">
                <a class="navbar-brand" href="HOME_LINK">Home</a>
                <ul id="navbar-content" class="navbar-nav"></ul>
                <a id="contact" class="navbar-brand ms-auto" href="#footer">CV & Contact Me</a>
            </div>
        </nav>
    `
    if (header_type == "header") {
        navbar = navbar.replace("HOME_LINK", "#")
    } else {
        navbar = navbar.replace("HOME_LINK", "../index.html")
    }
    $('#navigation').append(navbar)

    //Add headings to the navbar
    headings = $(header_type);
    for (var i=0; i<headings.length; i++) {
        if (headings[i].id != "") {
            name = headings[i].textContent
            if (headings[i].textContent == "Design") {
                name = "Design, Build, Deliver"
            }
            $('#navbar-content').append('<li class="nav-item"><a class="nav-link" href="#' + headings[i].id + '">' + name + '</a></li>');
        }
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
}

function load_footer_content() {
    footer = `
        <div class="row justify-content-center">
            <div class="col-5 my-auto d-flex justify-content-end align-items-center">
                <b>CV</b>
                <a href="LOCATIONMartinSchmidt_CV.pdf">
                    <img src="LOCATIONimg/cv_preview.png" />
                </a>
            </div>
            <div class="vl col-1"></div>
            <div class="col-5 my-auto">
                <ul>
                    <figcaption>Contact info:</figcaption>
                    <li>Email: m.c.schmidt951@proton.me</li>
                    <li>Phone: +44 7491 226822</li>
                </ul>
            </div>
        </div>
    `
    if (document.location.href.includes("index.html") || !document.location.href.includes(".html")) {
        footer = footer.replaceAll("LOCATION", "")
    } else {
        footer = footer.replaceAll("LOCATION", "../")
    }
    $('#footer').append(footer)
}

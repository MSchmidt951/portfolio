function featured_project_builder(title, info, int_name, group) {
    let project = '<div class="col-12 col-lg d-flex flex-column"><h1>' + title + '</h1><ul>';
    for (const e of info) {
        project += '<li>' + e + '</li>';
    }
    project += '</ul>';
    project += '<div class="row mt-auto"><img src="img/' + int_name + '/icon.jpg"></div>';
    project += '<div class="row"><a href="projects/' + int_name + '.html"><button class="col-12 feat-btn">More info</button></a></div>';
    project += '<div class="row"><a href="#' + group + '"><button class="col-12 feat-btn">Similar projects</button></a></div>';
    $('#featured').append(project + '</div>');
}

featured_project_builder("Drone", ["A quadcopter drone with auto-levelling capabilities including designing and building the frame, flight controller and software"], "drone", "hardware")
featured_project_builder("Gaming Website", ["A website which users can upload, download and play games on"], "alevelcs", "software")
featured_project_builder("Planter", ["A planter that is able to provide light and water to plants automatically"], "aleveldt", "engineering")


function project_info_builder(id, title, info, picture, links) {
    let info_col = '<div class="col-lg position-relative m-1"><div class="row"><h2>' + title + '</h2></div><div class="row pb-5">';
    const info_titles = ["What is it", "How does it work", "What did I do to make it"];
    for (let i=0; i<3; i++) {
        info_col += "<ul><figcaption>" + info_titles[i] + "?</figcaption><li>" + info[i] +"</li></ul>";
    }
    info_col += '</div>'

    let links_col = '<div class="row text-center position-absolute bottom-0 start-50 translate-middle-x " style="width: 80%">';
    const link_titles = ["More Info", "Source Code"]
    for (let i=0; i<links.length; i++) {
        links_col += '<div class="col align-self-center p-3"><a href="' + links[i] + '"><button>' + link_titles[i] + '</button></a></div>';
    }
    $(id).append(info_col + links_col + '</div>');

    $(id).append('<div class="col-auto project-img mx-auto"><img src="img/' + picture + '"></div>');
}

project_info_builder("#drone-info", "Drone",
    [
        "A quadcopter drone with auto-levelling capabilities including designing and building the frame, flight controller and software",
        "It uses an ARM processor that uses sensor data to control the flight",
        "I created a PCB and software for the flight controller, designed and 3D printed the frame, learned how to do projects like these, learned about designing each aspect"
    ],
    "drone/DroneCover.jpg", ["projects/drone.html"]
);
project_info_builder("#alevelcs-info", "Gaming Website",
    [
        "A website which users can upload, download and play games on",
        "It uses an apache server hosted on a raspberry pi, with a backend written in PHP",
        "I developed a web server to a set of requirements"
    ],
    "alevelcs/icon.jpg", ["projects/alevelcs.html", "https://github.com/MSchmidt951/CS-A-Level-Coursework"] //TODO: change photo
);
project_info_builder("#aleveldt-info", "Self Caring Planter",
    [
        "A planter that is able to provide light and water to plants automatically",
        "Uses UV/IR LEDs to give the plants light, uses a water sensor and pump to water the plants",
        "Talked to industry proffessionals, user surveys, worked to specification to provide a product for a professional client"
    ],
    "aleveldt/icon2.jpg", ["projects/aleveldt.html"]
);


function project_card_builder(group, title, info, int_name, src_link) {
    let card = '<div class="col-6 col-sm-3 project-card d-flex flex-column"><div class="m-auto"><h3 clas>' + title + '</h3></div>';
    card += '<div class="project-content"><img src="img/' + int_name + '/icon.jpg" width="100%" height="auto" />';
    card += '<div><div class="row d-flex align-items-center h-100"><p>' + info + '</p></div>';

    card += '</div></div>'
    card += '<div class="row"><a href="projects/' + int_name + '.html"><button class="col-12 feat-btn">More info</button></a></div>';
    if (src_link.length > 0) {
        card += '<div class="row"><a href="' + src_link + '"><button class="col-12 feat-btn">Source Code</button></a></div>';
    }
    card += '</div>'
    $("#" + group + "-cards").append(card)
}

project_card_builder("hardware", "Multi Purpose Controller", "A wireless controller designed for use with multiple projects", "controller", "");
project_card_builder("hardware", "Bad USB", "A device that emulates a keyboard which runs a pre-programmed set of key presses to perform a task", "badusb", "");
project_card_builder("hardware", "LED Cube", "A display piece made of a 5x5x5 grid of RGB LEDs", "ledcube", "");
project_card_builder("hardware", "Wi-Fi LED Strip", "A device to control multiple RGB LED strips over WiFi", "ledstrip", "");

project_card_builder("software", "A* Visualiser", "A program visualising the A* pathfinding algorithm", "astar", "https://github.com/MSchmidt951/A-Star-Visualiser");
project_card_builder("software", "Tank Colosseum", "A 2D game where 2-4 players battle each other in tanks with various power ups", "tankgame", "https://github.com/MSchmidt951/Tank-Colosseum");
project_card_builder("software", "Wii Controller on Xbox", "This program allows a Wii controller to be used on an Xbox", "wiitoxbox", "https://github.com/MSchmidt951/Wii-Controller-on-Xbox");

project_card_builder("engineering", "Small RC Car", "A small project to see if I could design a small RC car for a low price", "smallcar", "");
project_card_builder("engineering", "CAD Projects", "A collection of some of my CAD projects", "cad", "");

function featured_project_builder(title, info, int_name, group) {
    let project = '<div class="col-12 col-lg d-flex flex-column"><h1>' + title + '</h1><ul>';
    for (const e of info) {
        project += '<li>' + e + '</li>';
    }
    project += '</ul>';
    project += '<div class="row mt-auto"><img src="img/' + int_name + '/icon.jpg"></div>';
    project += '<div class="row"><a href="#' + group + '"><button class="col-12 feat-btn">Read More</button></a></div>';
    $('#featured').append(project + '</div>');
}

featured_project_builder("Drone", ["A quadcopter drone with auto-levelling capabilities including designing and building the frame, flight controller and software"], "drone", "hardware")
featured_project_builder("Gaming Website", ["A website which users can upload, download and play games on"], "alevelcs", "software")
featured_project_builder("Planter", ["An indoor planter aimed for use in apartments that provides light and water automatically to help plants thrive"], "aleveldt", "engineering")


function project_info_builder(id, title, info, picture, links) {
    let info_col = '<div class="col-lg d-flex flex-column justify-content-evenly"><div class="row"><h2>' + title + '</h2></div>';
    const info_titles = ["What is it", "How does it work", "What did I do to make it"];
    for (let i=0; i<3; i++) {
        info_col += '<div class="row"><ul><figcaption>' + info_titles[i] + '?</figcaption>'
        for (let j=0; j<info[i].length; j++) {
            info_col += "<li>" + info[i][j] +"</li>";
        }
        info_col += "</ul></div>";
    }
    $(id).append(info_col + '</div>');

    let links_col = '<div class="row">';
    const link_titles = ["View Project", "Source Code"]
    for (let i=0; i<links.length; i++) {
        links_col += '<a href="' + links[i] + '"><button class="col-12">' + link_titles[i] + '</button></a>';
    }

    $(id).append('<div class="col-auto project-img m-auto"><div class="row"><img src="img/' + picture + '"></div>' + links_col + '</div>');
}

project_info_builder("#drone-info", "Drone",
    [
        ["A quadcopter drone with auto-levelling capabilities"],
        ["Uses an ARM processor with custom software that uses sensor data to control the flight", "Interfaces with the speed controllers to set the motor speeds", "Communicated with a wireless controller", "Logs flight data for analysis and visualisation"],
        ["Created a PCB and software for the flight controller", "Designed the frame for the drone", "Learned how to do multifaceted projects like these", "Designed and 3D printed the frame", "Learned about making different parts of the drone work together"]
    ],
    "drone/DroneCover.webp", ["projects/drone.html"]
);
project_info_builder("#alevelcs-info", "Gaming Website",
    [
        ["A website which users can upload, download and play games on"],
        ["It uses an apache server hosted on a raspberry pi, with a backend written in PHP", "Users can play games written in javascript on the site or download other games", "Users can upload games which will be displayed on the site when approved by an admin", "Players can rate games which will then be ranked and displayed on the home page"],
        ["Developed a front end to a set of requirements", "Created login system for administrators", "Created a system to display user generated content dynamically"]
    ],
    "alevelcs/icon.jpg", ["projects/alevelcs.html", "https://github.com/MSchmidt951/CS-A-Level-Coursework"]
);
project_info_builder("#aleveldt-info", "Self Caring Planter",
    [
        ["An indoor planter aimed for use in apartments", "Provides light and water automatically to help plants thrive"],
        ["Provides light for plants with ultraviolet and infrared LEDs", "Uses a water sensor and pump to provide the plants with water", "Includes storage for garden tools and related items"],
        ["Researched user and perormance requirements", "Worked to specification to provide a product for a professional client", "Talked to industry proffessionals and performed user surveys", "Used a variety of manufacturing techniques including welding, casting and sheet bending"]
    ],
    "aleveldt/icon2.jpg", ["projects/aleveldt.html"]
);


function project_card_builder(group, title, info, int_name, src_link) {
    let card = '<div class="col-6 col-lg-3 project-card d-flex flex-column"><div class="d-flex flex-column"><h3>' + title + '</h3>';
    card += '<div class="project-content"><img src="img/' + int_name + '/icon.jpg" width="100%" height="auto" />';
    card += '<div><div class="row d-flex align-items-center h-100"><p>' + info + '</p></div>';

    card += '</div></div>'
    card += '<div class="row"><a href="projects/' + int_name + '.html"><button class="col-12 feat-btn">View Project</button></a></div>';
    if (src_link.length > 0) {
        card += '<div class="row"><a href="' + src_link + '"><button class="col-12 feat-btn">Source Code</button></a></div>';
    }
    card += '</div></div>'
    $("#" + group + "-cards").append(card)
}

project_card_builder("hardware", "Multi Purpose Controller", "A wireless controller designed for use with multiple projects", "controller", "");
project_card_builder("hardware", "Bad USB", "A device that emulates a keyboard which runs a pre-programmed set of key presses to perform a task", "badusb", "");
project_card_builder("hardware", "LED Cube", "A colourful display piece made of a 5x5x5 grid of RGB LEDs that can run animations<br /><br />View project to see it working", "ledcube", "");
project_card_builder("hardware", "Wi-Fi LED Strip", "A device to control multiple RGB LED strips over WiFi", "ledstrip", "");

project_card_builder("software", "A* Visualiser", "A program visualising the A* pathfinding algorithm", "astar", "https://github.com/MSchmidt951/A-Star-Visualiser");
project_card_builder("software", "Tank Colosseum", "A 2D game where 2-4 players battle each other in tanks with various power ups", "tankgame", "https://github.com/MSchmidt951/Tank-Colosseum");
project_card_builder("software", "Wii Controller on Xbox", "This program allows a Wii controller to be used on an Xbox", "wiitoxbox", "https://github.com/MSchmidt951/Wii-Controller-on-Xbox");

project_card_builder("engineering", "Small RC Car", "A small project to see if I could design a small RC car for a low price", "smallcar", "");
project_card_builder("engineering", "CAD Projects", "A collection of some of my CAD projects", "cad", "");

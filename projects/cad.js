function cad_project_builder(id, img, description) {
    project = '<div class="project-card cad col-4 d-flex flex-column"><div>'
    project += '<h3>' + id + '</h3>'
    project += '<img src="../img/cad/' + img + '" />'
    project += '<ul>'
    for (let i=0; i<description.length; i++) {
        project += '<li>' + description[i] + '</li>'
    }
    project += '</ul>'
    $('#projects').append(project + '</div></div>')
}

cad_project_builder('Gridfinity Trays', 'icon.jpg', [
    'Parametric trays that can store <a href="https://gridfinity.xyz">gridfinity</a> (a 3D printed organisation system) boxes',
])

cad_project_builder('Gridfinity Drawer', 'drawers.jpg', [
    'Parametric drawer rails for my gridfinity trays'
])

cad_project_builder('Raspberry Pi Zero Case', 'pi_case.jpg', [
    'Raspberry Pi Zero case with space for a battery'
])

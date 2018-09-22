const fs = require('fs');

function upload_info(){

    let student = {
        name: $('#name').val(),
        phone: $('#phone').val(),
        hometown: $('#hometown').val(),
        interests: $('#interests').val(),
        occupation: $('#occupation').val(),
    };

    let data = JSON.stringify(student);
    fs.writeFileSync('student-2.json', data);

}
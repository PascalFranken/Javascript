let title = document.getElementById('website_title');

title.innerHTML = "neuer Titel";

document.getElementById('test_div').innerText = 'test';

document.getElementById('btn_test').innertext = 'Klick mich';

document.getElementById('test_div').classList.toggle('green_bg');
document.getElementById('test_div').classList.add('green_bg');
document.getElementById('test_div').classList.remove('green_bg');   //Styling über Javascript


// document.getElementById('test_input').setAttribute('type', 'text')
// document.getElementById('test_input').setAttribute('value', '123')

// document.getElementById('test_input').value = 1

// console.log(document.getElementById('test_input').value = 1);

document.getElementById('task').setAttribute('type', 'title')
document.getElementById('task').setAttribute('value', 'title2')

function toggleDNone(id) {
    document.getElementById(id).classList.toggle('d_none');
}

function logger() {
    console.log(555555);
    
}



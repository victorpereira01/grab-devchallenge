document.querySelector('#login-button')
    .addEventListener('click', verifyFields);

function verifyFields() {
    const container = document.querySelectorAll('.input-icon-container');

    const fields = document.querySelectorAll('input');

    const icons = document.querySelectorAll('i');

    for (var i = 0; i < fields.length; i++) {
        if (fields[i].value != "") {
            icons[i].style.color = '#FF5757';
            fields[i].style.borderColor = '#FF5757';
        }
    }
}



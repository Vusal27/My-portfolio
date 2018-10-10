function formfunc() {
    const myForm = document.querySelector('.form-connect');
    const send = document.querySelector('.nav__link');
    send.addEventListener('click', event => {
        event.preventDefault();
        
        if (validateForm(myForm)) {
            const data = {
                name: myForm.elements.name.value,
                email: myForm.elements.email.value,
                message: myForm.elements.message.value,
            };
            
            const xhr = new XMLHttpRequest();
            xhr.responseType = 'json';
            xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail');
            xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
            
            xhr.send(JSON.stringify(data));
        }
    });

    function validateForm(form) {
        let valid = true;

        if (!validateformblock(form.elements.name)) {
            valid = false;
        }
        if (!validateformblock(form.elements.email)) {
        valid = false;
        }
        if (!validateformblock(form.elements.message)) {
        valid = false;
        }
        return valid;
    }

    function validateformblock(formblock) {
            formblock.nextElementSibling.textContent = formblock.validationMessage;
            return formblock.checkValidity();
    }


    var clearButton = document.querySelector('.nav__link--clean');
    var inputsForm = document.querySelectorAll('.form-connect__input');
    clearButton.addEventListener('click', clearText);

    function clearText() {
        for (var input of inputsForm) {
            input.value = "";
            clearButton.style.backgroundColor = 'rgba(250, 250, 250, .1)';
        }
    }
    for (var input of inputsForm) {
        input.addEventListener('input', function (input,value) {
            if (input.value !== '') {
                document.querySelector('.nav__link--clean').style.backgroundColor = '#064cbd';
            } else {
                document.querySelector('.nav__link--clean').style.backgroundColor = 'rgba(250, 250, 250, .1)';
            }
        });
    }
}

module.exports={ formfunc };
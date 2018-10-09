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
            formblock.nextElementSibling.style.marginTop="-15px";
            return formblock.checkValidity();
    }

    function clear() {
        document.getElementsByName('myForm')[0].reset();
    }
}

module.exports={ formfunc };
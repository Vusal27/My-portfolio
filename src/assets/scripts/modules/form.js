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
        // xhr.addEventListener('load', () => {
            
        //     if (xhr.status === 200) {
        //         document.body.appendChild(openOverlayForm(xhr.response.message));
        //     } else {
        //         document.body.appendChild(openOverlayForm(xhr.response.message));
        //     }
        // });
    }
});
// function openOverlayForm(content) {
//     const overlayElement = document.createElement("div");
//     overlayElement.classList.add("over-lay");
//     overlayElement.addEventListener("click", e => {
//         if (e.target === overlayElement) {
//         closeElement.click();
//         }
//     });

//     const containerElement = document.createElement("div");
//     containerElement.classList.add("overlay-container");

//     const contentElement = document.createElement("div");
//     contentElement.classList.add("overlay-content");
//     contentElement.innerHTML = content;

//     const closeElement = document.createElement("button");
//     closeElement.classList.add("button_close");
//     closeElement.textContent = "закрыть";
//     closeElement.addEventListener("click", function() {
//         document.body.removeChild(overlayElement);
//     });

//     overlayElement.appendChild(containerElement);
//     containerElement.appendChild(contentElement);
//     containerElement.appendChild(closeElement);

//     return overlayElement;
// }

function validateForm(form) {
    let valid = true;

    if (!validateformblock(form.elements.name)) {
        valid = false;
    }
    if (!validateformblock(form.elements.phone)) {
    valid = false;
    }
    if (!validateformblock(form.elements.comment)) {
    valid = false;
    }
    return valid;
}

 function validateformblock(formblock) {
        formblock.nextElementSibling.textContent = formblock.validationMessage;
        return formblock.checkValidity();
 }
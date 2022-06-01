import throttle from 'lodash.throttle';

const LOCALSTORAGE_KEY = "feedback-form-state";

const refs = {
    form: document.querySelector('.feedback-form'),
    email: document.querySelector('.feedback-form input'),
    textarea: document.querySelector('.feedback-form textarea'),
}

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onTextareaInput, 500));

populateTextarea();

function onFormSubmit(event) {
    event.preventDefault();

     const message = {
        email: refs.email.value,
        message: refs.textarea.value,
    }

    event.currentTarget.reset();
    
    localStorage.removeItem(LOCALSTORAGE_KEY);

    console.log(message);
}

function onTextareaInput(event) {
    const message = {
        email: refs.email.value,
        message: refs.textarea.value,
    }
    
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(message));
}

function populateTextarea() {
    try {
        const savedMessage = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));

        if (savedMessage) {
            const getMessage = savedMessage.message;
            const getEmail = savedMessage.email;
            refs.textarea.value = getMessage;
            refs.email.value = getEmail;
        }
    }
    catch {
        console.log("error");
    }
}
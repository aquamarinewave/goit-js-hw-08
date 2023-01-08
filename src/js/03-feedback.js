import throttle from 'lodash.throttle';

// const emailInput = document.querySelector('[name="email"]');
// const messageInput = document.querySelector('[name="message"]');
const form = document.querySelector('form');
// const input = document.getElementById('form').elements;
// const textarea = document.getElementById('form').elements;
const formInputText = {};

const updateFormPerTime = throttle((updatedData) => {
  localStorage.setItem('feedback-form-state', updatedData);
}, 500, { trailing: false });

const getSavedForm = () => { 
    const savedForm = localStorage.getItem('feedback-form-state');
    return savedForm ? JSON.parse(savedForm) : {};
};

const formText = getSavedForm();

// const { email, message } = formText;

// const saveEmail = (email) => {
//     const formText = getSavedForm();
//     const updatedFormText = JSON.stringify({
//         ...formText,
//         email
//     });
//     updateFormPerTime(updatedFormText);
// };

// const saveMessage = (message) => {
//     const formText = getSavedForm();
//     const updatedFormText = JSON.stringify({
//         ...formText,
//         message
//     });
//     updateFormPerTime(updatedFormText);
// };  

const clearForm = () => { 
    emailInput.value = '';
    messageInput.value = '';
    localStorage.setItem('feedback-form-state', JSON.stringify({}));
};

if (email) {
    emailInput.value = email;
}

if (message) {
    messageInput.value = message;
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formText = getSavedForm();
    console.log(formText);
    clearForm();
});

form.addEventListener('change', event => {
    console.log(event.target.name);
    console.log(event.target.value);
    formInputText[event.target.name] = event.target.value;
    console.log(formInputText);

});

// emailInput.addEventListener('input', (event) => {
//     const emailText = event.target.value;
//     saveEmail(emailText);
// });

// messageInput.addEventListener('input', (event) => {
//     const messageText = event.target.value;
//     saveMessage(messageText);
// });

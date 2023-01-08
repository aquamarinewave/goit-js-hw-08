import throttle from 'lodash.throttle';

const LOCALSTORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('form');

getSavedForm();

form.addEventListener('submit', event => {
    event.preventDefault();
    const formText = new FormData(form);
    formText.forEach((name, value) => console.log(name, value));
    form.reset();
    localStorage.removeItem(LOCALSTORAGE_KEY);
});

form.addEventListener('input', event => {
    let savedForm = localStorage.getItem(LOCALSTORAGE_KEY); 
    savedForm = savedForm ? JSON.parse(savedForm) : {};
    savedForm[event.target.name] = event.target.value;
    updateFormPerTime(savedForm);
});

function getSavedForm() { 
    let savedForm = localStorage.getItem(LOCALSTORAGE_KEY);
    if (savedForm) {
        savedForm = JSON.parse(savedForm);
        Object.entries(savedForm).forEach(([name, value]) => {
            form.elements[name].value = value;
        })
    }
};


const updateFormPerTime = throttle((updatedData) => {
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(updatedData));
}, 500, { trailing: false });

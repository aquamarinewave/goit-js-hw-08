// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

console.log(galleryItems);

const galleryList = document.querySelector('.gallery');


const markup = galleryItems.map(({ preview, original, description }) =>
    `<a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>`
);

galleryList.innerHTML = markup.join('');


const lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: "alt",
    captionType: "attr",
    captionDelay: 250	
});
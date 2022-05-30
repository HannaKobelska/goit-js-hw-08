import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const galleryItemsMarkup = createGalleryItemsMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryItemsMarkup);

function createGalleryItemsMarkup(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
            return `
    <div class="gallery__item">
         <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
         </a>
    </div>
    `;
        })
        .join('');
}

galleryContainer.addEventListener('click', onGalleryContainerClick);

function onGalleryContainerClick(event) {
    event.preventDefault();

    if (!event.target.classList.contains("gallery__image")) {
        return;
    } else {
        const lightbox = new SimpleLightbox(".gallery a", { captionsData: "alt", captionDelay: 250, });
    }
    console.log(event.target);
}

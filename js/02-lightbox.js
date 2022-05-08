import { galleryItems } from './gallery-items.js';
// Change code below this line


// 1.створення розмітки
const galleryRef = document.querySelector('.gallery');
const galleyCards = createGalleryItemCard(galleryItems);
galleryRef.insertAdjacentHTML('beforeEnd', galleyCards);

function createGalleryItemCard(array) {
    return array.map(({preview, original, description}) => {
        return `
        <a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
    `
    }).join('')
}

// 2. додаэмо атрибут title
const imgElements = document.querySelectorAll('.gallery__image');

imgElements.forEach((element) => {
    element.setAttribute('title', element.alt);
});

// 3. Клік і модальне вікно
galleryRef.addEventListener('click', onGalleryClick);
let gallery = new SimpleLightbox('.gallery a'); 

function onGalleryClick(evt) {
    evt.preventDefault();
    
    if (!evt.target.classList.contains('gallery__image')) {
        return
    }

    gallery.on('show.simplelightbox', function () {
    gallery.defaultOptions.captionDelay = 250;
});
}
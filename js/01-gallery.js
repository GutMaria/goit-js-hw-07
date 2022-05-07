import { galleryItems } from './gallery-items.js';
// Change code below this line


// 1.створення розмітки
const galleryRef = document.querySelector('.gallery');
const galleyCards = createGalleryItemCard(galleryItems);
galleryRef.insertAdjacentHTML('beforeEnd', galleyCards);

function createGalleryItemCard(array) {
    return array.map(({preview, original, description}) => {
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
    `
    }).join('')
}


// 2.event delegation

galleryRef.addEventListener('click', onGalleryClick);

function onGalleryClick(evt) {
    evt.preventDefault(); 

    if (!evt.target.classList.contains('gallery__image')) {
        return
    }
    // 3. модальнe вікно basicLightbox
    const modalImgToShow = basicLightbox.create(
        `<img src="${evt.target.dataset.source}" width="800" height="600">`)
    modalImgToShow.show();

    // document.addEventListener("keydown",
}





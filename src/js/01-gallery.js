import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const containerGallery = document.querySelector('.gallery');
console.log(containerGallery);

function createItemsGallery(items) {
    return items.map(item =>
 `<div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
  <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>`).join('');
}
createItemsGallery(galleryItems);

containerGallery.insertAdjacentHTML('beforeend',
    createItemsGallery);


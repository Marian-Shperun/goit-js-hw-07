import { galleryItems } from "./gallery-items.js";

console.log(2);

const containerGallery = document.querySelector("ul.gallery");

console.log(SimpleLightbox);

const itemsTemplate = ({ original, preview, description }) =>
  ` 
    <a class="gallery__item" href="${original}">
      <img class="gallery__image"
        src="${preview}" 
        alt="${description}">
    </a>`;
const сreateList = () => {
  const galleryItem = galleryItems.map(itemsTemplate).join("");
  containerGallery.insertAdjacentHTML("beforeend", galleryItem);
};

сreateList();

const gallery = new SimpleLightbox(".gallery .gallery__item", {
  captionsData: "alt",
  captionDelay: 250,
});

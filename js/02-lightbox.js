import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(2);

const containerGallery = document.querySelector("ul.gallery");

console.log(SimpleLightbox);
galleryItems.map((item) => {
  const galleryItem = document.createElement("a");
  galleryItem.classList.add("gallery__item");
  galleryItem.href = item.original;

  const imgEl = document.createElement("img");
  imgEl.classList.add("gallery__image");
  imgEl.src = item.preview;
  // imgEl.dataset.source = item.original;
  imgEl.alt = item.description;

  galleryItem.append(imgEl);
  containerGallery.append(galleryItem);
});

const gallery = new SimpleLightbox(".gallery .gallery__item");

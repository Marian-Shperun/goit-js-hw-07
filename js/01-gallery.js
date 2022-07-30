import { galleryItems } from "./gallery-items.js";

console.log(galleryItems);

const containerGallery = document.querySelector("div.gallery");

galleryItems.map((item) => {
  const linkEl = document.createElement("a");
  linkEl.classList.add("gallery__link");
  linkEl.href = item.original;
  const imgEl = document.createElement("img");
  imgEl.classList.add("gallery__image");
  imgEl.src = item.preview;
  imgEl.dataset.source = item.original;
  imgEl.alt = item.description;

  linkEl.append(imgEl);
  containerGallery.append(linkEl);
});

console.log(containerGallery);
containerGallery.addEventListener("click", onImgClick);

function onImgClick(event) {
  event.preventDefault();

  // перевірка на клік по картинці
  const isLink = event.target.classList.contains("gallery__image");
  if (!isLink) {
    return;
  }

  // console.log("img");

  //  бібліотека модального вікна basicLightbox
  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`);
  instance.show();

  // закриття модалки через клавіатуру
  containerGallery.addEventListener("keydown", (event) => {
    if (event.code === "Escape") {
      instance.close()
    }
  });
}

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector(".gallery");
const loader = document.querySelector(".loader");

let lightbox = new SimpleLightbox(".gallery a", {
    captions: true,
    captionsData: "alt",
    captionDelay: 250,
  });
  

export const createGallery = (images) => {
    const markup = images.map(image => (
        `
            <li class="item-image">
                <a href="${image.largeImageURL}">
                    <img src="${image.webformatURL}" alt="${image.tags}" />
                </a>
                <ul class="image-info">
                    <li class="image-info-item">
                        <p>Likes</p>
                        <span>${image.likes}</span>
                    </li>
                    <li class="image-info-item">
                        <p>Views</p>
                        <span>${image.views}</span>
                    </li>
                    <li class="image-info-item">
                        <p>Comments</p>
                        <span>${image.comments}</span>
                    </li>
                    <li class="image-info-item">
                        <p>Downloads</p>
                        <span>${image.downloads}</span>
                    </li>
                </ul>
            </li>
        `
    )).join("")

    gallery.insertAdjacentHTML("beforeend", markup);
    lightbox.refresh();
}

export const clearGallery = () => {
    gallery.innerHTML = '';
}

export const showLoader = () => {
    loader.classList.remove("hidden");
    loader.classList.add("visible");

}

export const hideLoader = () => {
    loader.classList.add("hidden");
    loader.classList.remove("visible");
}
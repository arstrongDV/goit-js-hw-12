import getImagesByQuery from './js/pixabay-api'
import { createGallery, hideLoader, showLoader, clearGallery } from './js/render-functions';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector(".form");

const handleSubmit = (e) => {
    
    e.preventDefault();
    const input = e.target.elements["search-text"];
    const text = input.value;
    
    if(!text){
        return;
    }

    clearGallery();
    showLoader();

    getImagesByQuery(text)
        .then(images => {
            hideLoader();

            if (images.length === 0) {
                iziToast.show({
                    message: 'Sorry, there are no images matching your search query. Please try again!'
                });
                return;
            }

            createGallery(images);
            input.value = '';
        })
        .catch(() => {
            hideLoader();
            iziToast.show({
                message: 'Sorry, there was an error fetching images. Please try again!'
            });
        });
}

form.addEventListener("submit", handleSubmit);
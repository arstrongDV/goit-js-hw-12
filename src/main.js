import getImagesByQuery from './js/pixabay-api'
import { 
    createGallery, 
    hideLoader, 
    showLoader, 
    clearGallery,
    showLoadMoreButton,
    hideLoadMoreButton
} from './js/render-functions';

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector(".form");
const showMoreBtn = document.querySelector(".loadMoreBtn");

let currentQuery = "";
let currentPage = 1;

const getData = async(text) => {
    clearGallery();
    showLoader();
    hideLoadMoreButton();

    currentQuery = text;
    currentPage = 1;

    try{
        const data = await getImagesByQuery(text);
        hideLoader()
        if (data.hits.length === 0) {
            iziToast.show({
                message: 'Sorry, there are no images matching your search query. Please try again!'
            });
            return;
        }

        createGallery(data.hits);

        if(currentPage < Math.ceil(data.totalHits / 15)){
            showLoadMoreButton();
        }else{
            hideLoadMoreButton();
            iziToast.show({
                message: "We're sorry, but you've reached the end of search results."
            });
        }

    }catch{
        hideLoader();
        iziToast.show({
            message: 'Sorry, there was an error fetching images. Please try again!'
        });
    }
}

const handleSubmit = (e) => {
    
    e.preventDefault();
    const input = e.target.elements["search-text"];
    const text = input.value;
    
    if(!text){
        return;
    }

    getData(text);

    input.value = '';
}

form.addEventListener("submit", handleSubmit);

showMoreBtn.addEventListener("click", async(e) => {
    currentPage += 1;

    const elem = document.querySelector(".item-image");
    let rect = elem.getBoundingClientRect();
    // console.log("rect: ", rect);

    showLoader();
    hideLoadMoreButton()
    try{
        const data = await getImagesByQuery(currentQuery, currentPage);
        hideLoader();

        if (data.hits.length === 0) {
            iziToast.show({
                message: 'Sorry, there are no images matching your search query. Please try again!'
            });
            return;
        }

        createGallery(data.hits);
        window.scrollBy({
            top: rect.height*2,
            behavior: "smooth",
          });

        if (currentPage >= Math.ceil(data.totalHits / 15)) {
            hideLoadMoreButton();
            iziToast.show({
                message: "We're sorry, but you've reached the end of search results."
            });
        }
        showLoadMoreButton();
        // input.value = '';
    }catch{
        hideLoader();
        showLoadMoreButton();
        iziToast.show({
            message: 'Sorry, there was an error fetching images. Please try again!'
        });
    }
})
import axios from "axios"

const getImagesByQuery = (query) => {
    return axios.get("https://pixabay.com/api/", {
        params: {
            key: "54688659-274dda35ccf4409a95eb9f6bd",
            q: query,
            image_type: "photo",
            orientation: "horizontal",
            safesearch: true
        }
    }).then(response => response.data.hits);
};


export default getImagesByQuery;
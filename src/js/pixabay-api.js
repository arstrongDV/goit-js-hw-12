import axios from "axios"

const getImagesByQuery = async(query, page) => {
    const res = await axios.get("https://pixabay.com/api/", {
        params: {
            key: "54688659-274dda35ccf4409a95eb9f6bd",
            q: query,
            image_type: "photo",
            orientation: "horizontal",
            safesearch: true,
            page,
            per_page: 15
        }
    })

    return res.data;
};

export default getImagesByQuery;
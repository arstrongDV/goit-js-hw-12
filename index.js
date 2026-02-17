import{a as u,S as m,i as l}from"./assets/vendor-CC7y-xQd.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=t(e);fetch(e.href,s)}})();const p=a=>u.get("https://pixabay.com/api/",{params:{key:"54688659-274dda35ccf4409a95eb9f6bd",q:a,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data.hits),d=document.querySelector(".gallery"),i=document.querySelector(".loader");let f=new m(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});const h=a=>{const r=a.map(t=>`
            <li class="item-image">
                <a href="${t.largeImageURL}">
                    <img src="${t.webformatURL}" alt="${t.tags}" />
                </a>
                <ul class="image-info">
                    <li class="image-info-item">
                        <p>Likes</p>
                        <span>${t.likes}</span>
                    </li>
                    <li class="image-info-item">
                        <p>Views</p>
                        <span>${t.views}</span>
                    </li>
                    <li class="image-info-item">
                        <p>Comments</p>
                        <span>${t.comments}</span>
                    </li>
                    <li class="image-info-item">
                        <p>Downloads</p>
                        <span>${t.downloads}</span>
                    </li>
                </ul>
            </li>
        `).join("");d.insertAdjacentHTML("beforeend",r),f.refresh()},g=()=>{d.innerHTML=""},y=()=>{i.classList.remove("hidden"),i.classList.add("visible")},c=()=>{i.classList.add("hidden"),i.classList.remove("visible")},L=document.querySelector(".form"),b=a=>{a.preventDefault();const r=a.target.elements["search-text"],t=r.value;t&&(g(),y(),p(t).then(o=>{if(c(),o.length===0){l.show({message:"Sorry, there are no images matching your search query. Please try again!"});return}h(o),r.value=""}).catch(()=>{c(),l.show({message:"Sorry, there was an error fetching images. Please try again!"})}))};L.addEventListener("submit",b);
//# sourceMappingURL=index.js.map

import{a as w,S as b,i}from"./assets/vendor--6n4cVRZ.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const m of a.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&o(m)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();const f=async(r,e)=>(await w.get("https://pixabay.com/api/",{params:{key:"54688659-274dda35ccf4409a95eb9f6bd",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:15}})).data,y=document.querySelector(".gallery"),c=document.querySelector(".loader"),l=document.querySelector(".loadMoreBtn");let v=new b(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});const g=r=>{const e=r.map(t=>`
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
        `).join("");y.insertAdjacentHTML("beforeend",e),v.refresh()},S=()=>{y.innerHTML=""},p=()=>{c.classList.remove("hidden"),c.classList.add("visible")},d=()=>{c.classList.add("hidden"),c.classList.remove("visible")},h=()=>{l.classList.remove("hidden"),l.classList.add("visible")},u=()=>{l.classList.add("hidden"),l.classList.remove("visible")},M=document.querySelector(".form"),q=document.querySelector(".loadMoreBtn");let L="",n=1;const B=async r=>{S(),p(),u(),L=r,n=1;try{const e=await f(r);if(d(),e.hits.length===0){i.show({message:"Sorry, there are no images matching your search query. Please try again!"});return}g(e.hits),n<Math.ceil(e.totalHits/15)?h():(u(),i.show({message:"We're sorry, but you've reached the end of search results."}))}catch{d(),i.show({message:"Sorry, there was an error fetching images. Please try again!"})}},P=r=>{r.preventDefault();const e=r.target.elements["search-text"],t=e.value;t&&(B(t),e.value="")};M.addEventListener("submit",P);q.addEventListener("click",async r=>{n+=1;let t=document.querySelector(".item-image").getBoundingClientRect();p(),u();try{const o=await f(L,n);if(d(),o.hits.length===0){i.show({message:"Sorry, there are no images matching your search query. Please try again!"});return}g(o.hits),window.scrollBy({top:t.height*2,behavior:"smooth"}),n>=Math.ceil(o.totalHits/15)?(u(),i.show({message:"We're sorry, but you've reached the end of search results."})):h()}catch{d(),h(),i.show({message:"Sorry, there was an error fetching images. Please try again!"})}});
//# sourceMappingURL=index.js.map

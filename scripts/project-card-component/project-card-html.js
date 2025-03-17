// project-card-html.js

export function makeProjectHTML(h2, aLink, aText, pSource, pImg, imgAlt, p){
    return `
    <h2>${h2}</h2>   
    <a href="${aLink}">${aText}</a>
    <figure>
        <picture>
            <source srcset="${pSource}" media="(min-width: 550px)" />
            <img src="${pImg}" alt="${imgAlt}" height="200">
        </picture>
    </figure>
    <p>
        ${p}
    </p> 
    `;
}
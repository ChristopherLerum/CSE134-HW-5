import { makeProjectHTML } from './project-card-html.js';
import { makeProjectCSS } from './project-card-css.js';

class ProjectCard extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const style = document.createElement('style');
        style.textContent = makeProjectCSS();

        const h2 = this.getAttribute('h2') || 'Blank Project';
        const aLink = this.getAttribute('aLink') || '';
        const aText = this.getAttribute('aText') || '';
        const pSource = this.getAttribute('pSource') || '';
        const pImg = this.getAttribute('pImg') || '';
        const imgAlt = this.getAttribute('imgAlt') || 'No Image';
        const p = this.getAttribute('p') || 'Insert Text Here';
        const projectHTML = makeProjectHTML(h2, aLink, aText,pSource, pImg, imgAlt, p); 
        
        this.innerHTML = '';
		this.appendChild(style);
        this.innerHTML += projectHTML;
    }
}

// Define the custom element
customElements.define('project-card', ProjectCard);


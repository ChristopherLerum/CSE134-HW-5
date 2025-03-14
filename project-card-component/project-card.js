import { makeProjectHTML } from './project-card-html.js';

class ProjectCard extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const h2 = this.getAttribute('h2') || 'Blank Project';
        const aLink = this.getAttribute('aLink') || '';
        const aText = this.getAttribute('aText') || '';
        const pSource = this.getAttribute('pSource') || '';
        const pImg = this.getAttribute('pImg') || '';
        const imgAlt = this.getAttribute('imgAlt') || 'No Image';
        const p = this.getAttribute('p') || 'Insert Text Here';
        const projectHTML = makeProjectHTML(h2, aLink, aText,pSource, pImg, imgAlt, p); 
        
        this.innerHTML = '';
        this.innerHTML += projectHTML;
    }
}

// Define the custom element
customElements.define('project-card', ProjectCard);


/*

        let h2 = "Research Project: Evaluation of Pollster Accuracy";
        let aLink = 'https://github.com/COGS108/Group047-FA24';
        let aText = 'Link to Research Project Github';
        let pSource = 'resources/map.png';
        let pImg = 'resources/mapfast.png';
        let imgAlt = 'Icon map of the USA';
        let p = '<b>Evaluation of Pollster Accuracy</b> is a research project I helped make in <i>COGS 108</i>. Our project looks into which polling sources are the most accurate at predicting the outcomes of U.S. federal and gubernatorial elections.';
        const projectHTML = makeProjectHTML(h2, aLink, aText,pSource, pImg, imgAlt, p); 

        let article = document.createElement('article');
        article.innerHTML = projectHTML;

        this.appendChild(article);
*/
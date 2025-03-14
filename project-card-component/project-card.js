class ProjectCard extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        // Create a style tag for the component’s CSS
        const style = document.createElement('style');
        style.textContent = getMyComponentCSS();

        // Get the HTML content with the current date
        const currentDate = new Date();
        const content = getMyComponentHTML(currentDate);

        // Attach styles and HTML content to the component
        this.innerHTML = '';
        this.appendChild(style);
        this.innerHTML += content;
    }
}

// Define the custom element
customElements.define('project-card', ProjectCard);
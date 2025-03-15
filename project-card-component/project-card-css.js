// project-card-css.js

export function makeProjectCSS(){
    return `
        project-card{
            display: flex;
            flex-direction: column;
            align-items: center;
            border: solid .5em var(--framing-color);
            border-radius: 2em;
            padding: 1em;
            margin: 0.5em;
            max-width: 40%;
        }
        project-card h2{
            margin-bottom: 0;
        }`
}
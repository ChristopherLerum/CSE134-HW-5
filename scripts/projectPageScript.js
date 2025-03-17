// projectPageScript.js
document.getElementById("remote").addEventListener("click", async function(event){
    const url = "https://api.jsonbin.io/v3/b/67d4ac338561e97a50ec20aa"; 
    try {
        
        const response = await fetch(url);      
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        
        const jsonData = await response.json();
        const projectData = jsonData.record.storageData;

        localStorage.setItem('storageData', JSON.stringify(projectData));

        projectData.forEach(card => { 
            window.project = document.createElement("project-card");
            window.project.setAttribute('h2', `${card.h2}`);
            window.project.setAttribute('aLink', `${card.aLink}`);
            window.project.setAttribute('aText', `${card.aText}`);
            window.project.setAttribute('pSource', `${card.pSource}`);
            window.project.setAttribute('pImg', `${card.pImg}`);
            window.project.setAttribute('imgAlt', `${card.imgAlt}`);
            window.project.setAttribute('p', `${card.p}`);
            window.project.setAttribute('class', `${card.class}`);
            document.getElementById('project-area').appendChild(window.project);
        });

    } catch (error) {
        console.error(error.message);
    }
});
document.getElementById("local").addEventListener("click", async function(event){
    try {
        const jsonGet = localStorage.getItem('storageData');
        if (!jsonGet) {
            alert(`local storage data undefined\nCannot load local data`);
            throw new Error(`local storage data undefined`);
        }
        const projectData = JSON.parse(jsonGet);

        projectData.forEach(card => { 
            window.project = document.createElement("project-card");
            window.project.setAttribute('h2', `${card.h2}`);
            window.project.setAttribute('aLink', `${card.aLink}`);
            window.project.setAttribute('aText', `${card.aText}`);
            window.project.setAttribute('pSource', `${card.pSource}`);
            window.project.setAttribute('pImg', `${card.pImg}`);
            window.project.setAttribute('imgAlt', `${card.imgAlt}`);
            window.project.setAttribute('p', `${card.p}`);
            window.project.setAttribute('class', `${card.class}`);
            document.getElementById('project-area').appendChild(window.project);
        });
        
    } catch (error) {
        console.error(error.message);
    }
});
document.getElementById("project-select").addEventListener("change", function(event){

const projects = document.getElementsByTagName("project-card");

for(let i = 0; i < projects.length; i++){
    projects[i].style.display = "flex";
}

if(event.target.value == "coding"){
    const personal = document.getElementsByClassName("personal");
    const research = document.getElementsByClassName("research");

    for(let i = 0; i < personal.length; i++){
        personal[i].style.display = "none";
    }
    for(let i = 0; i < research.length; i++){
        research[i].style.display = "none";
    }
}
if(event.target.value == "research"){
    const personal = document.getElementsByClassName("personal");
    const coding = document.getElementsByClassName("coding");

    for(let i = 0; i < personal.length; i++){
        personal[i].style.display = "none";
    }
    for(let i = 0; i < coding.length; i++){
        coding[i].style.display = "none";
    }
}
if(event.target.value == "personal"){
    const research = document.getElementsByClassName("research");
    const coding = document.getElementsByClassName("coding");

    for(let i = 0; i < research.length; i++){
        research[i].style.display = "none";
    }
    for(let i = 0; i < coding.length; i++){
        coding[i].style.display = "none";
    }
}
});
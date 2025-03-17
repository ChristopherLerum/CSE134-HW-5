/** index.html -------------------------------------------------*/
window.addEventListener('DOMContentLoaded', function(){
    const check = localStorage.getItem("theme-check");

    document.getElementById("test").style.display = "block";
    if (check == "unchecked"){       
        document.getElementById("theme").checked = false;
        let mode = document.getElementById("theme-label");
        mode.textContent = "Light Mode:☼";

        let root = document.documentElement;
        root.style.backgroundColor = "#97b5c4";
        root.style.setProperty("--box-color", "#B0BEC5");
        root.style.setProperty("--title-color", "#CFD8DC");
        root.style.setProperty("--framing-color", "#8c949e");
        root.style.setProperty("--nav-color", "black");
        root.style.setProperty("--link-color", "blue");
        root.style.color = "black";
    }
    
    document.getElementById("project-select").style.display = "block";
});
document.getElementById("theme").addEventListener("change", function(event) {
    if (event.target.checked){
        let mode = document.getElementById("theme-label");
        mode.textContent = "Dark Mode: ☽";

        let root = document.documentElement;
        root.style.backgroundColor = "#282b30";
        root.style.setProperty("--box-color", "#36393e");
        root.style.setProperty("--title-color", "#424549");
        root.style.setProperty("--framing-color", "#5e6369");
        root.style.setProperty("--nav-color", "lightgray");
        root.style.setProperty("--link-color", "lightskyblue");
        root.style.color = "lightgray";

        localStorage.setItem("theme-check", "checked");
    } else {
        let mode = document.getElementById("theme-label");
        mode.textContent = "Light Mode:☼";

        let root = document.documentElement;
        root.style.backgroundColor = "#97b5c4";
        root.style.setProperty("--box-color", "#B0BEC5");
        root.style.setProperty("--title-color", "#CFD8DC");
        root.style.setProperty("--framing-color", "#8c949e");
        root.style.setProperty("--nav-color", "black");
        root.style.setProperty("--link-color", "blue");
        root.style.color = "black";

        localStorage.setItem("theme-check", "unchecked");
    }
});

/** contactMe.html -------------------------------------------------*/
let form_errors = [];

document.getElementById("fullname").addEventListener("input", function(event) {
    let errorTime;

    if(!event.target.checkValidity()){
        const outError = document.getElementById("error-text");
        outError.style.display = "block";
        outError.textContent = `Error: Full Name field is incomplete or has illegal characters`;
        form_errors.push("Error: Full Name field was incomplete or had illegal characters");
        errorTime = setTimeout(() => {
            outError.style.display = "none";
        }, 5000);
    } else {
        const outError = document.getElementById("error-text");
        outError.style.display = "none";
    }
});

document.getElementById("email").addEventListener("blur", function(event) {
    let errorTime;

    if(email.validity.typeMismatch ){
        const outError = document.getElementById("error-text");
        outError.style.display = "block";
        outError.textContent = `Error: Email field is incomplete or has illegal characters`;
        form_errors.push("Error: Email field was incomplete or had illegal characters");
        errorTime = setTimeout(() => {
            outError.style.display = "none";
        }, 5000);

    } else {
        const outError = document.getElementById("error-text");
        outError.style.display = "none";
    }
});

document.getElementById("topic").addEventListener("input", function(event) {
    let errorTime;

    if(!event.target.checkValidity()){
        const outError = document.getElementById("error-text");
        outError.style.display = "block";
        outError.textContent = `Error: Topic field is incomplete or has illegal characters`;
        form_errors.push("Error: Topic field was incomplete or had illegal characters");
        errorTime = setTimeout(() => {
            outError.style.display = "none";
        }, 5000);
    } else {
        const outError = document.getElementById("error-text");
        outError.style.display = "none";
    }
});

document.getElementById("message").addEventListener("keypress", function(event){
    if (!(event.key.charCodeAt(0) >= 32 && event.key.charCodeAt(0) <= 126)){
        event.preventDefault();
        const outError = document.getElementById("error-text");
        outError.style.display = "block";
        outError.textContent = `Error: Illegal character input in Message field`;
        form_errors.push("Error: Illegal character was input in Message field");
        errorTime = setTimeout(() => {
            outError.style.display = "none";
        }, 5000);
    }
});

document.getElementById("email").addEventListener("keypress", function(event){
    if (!(event.key.charCodeAt(0) >= 32 && event.key.charCodeAt(0) <= 126)){
        event.preventDefault();
        const outError = document.getElementById("error-text");
        outError.style.display = "block";
        outError.textContent = `Error: Illegal character input in Email field`;
        form_errors.push("Error: Illegal character was input in Email field");
        errorTime = setTimeout(() => {
            outError.style.display = "none";
        }, 5000);
    }
});

document.getElementById("message").addEventListener("input", function(event) {
    let count = event.target.value.length;
    const charCounter = document.getElementById("char-count");
    
    charCounter.textContent = `${count}/300`;

    if (event.target.value.length >= 250){
        charCounter.style.color='rgb(255, 29, 29)';
    } else{
        charCounter.style.color= 'white';
    }
    if (event.target.value.length > 275){
        const outinfo = document.getElementById("result");
        const infotext = document.getElementById("info-text");
        outinfo.style.display = "block";
        infotext.textContent = `Info: Message Field is reaching character limit`;
        errorTime = setTimeout(() => {
            infotext.textContent = `Info: `;
            outinfo.style.display = "none";
        }, 5000);
    } else {
        const outError = document.getElementById("error-text");
        outError.style.display = "none";
    }
});

document.getElementById("message").addEventListener("blur", function(event) {

    const myform = document.getElementById("contactform");
    const myformdata = new FormData(myform);

    let str = "";
    for (const [key,value] of myformdata.entries()) {
        if(key == `possible_bot` || key == `form-errors`){
            continue;
        }
        str+=(`${key}: ${value}\n`);
    }
    
    document.getElementById("result-text").textContent = str;
    document.getElementById("result").style.display = "block";
});

document.getElementById("contactform").addEventListener("submit", function(){
    document.getElementById("form-errors").value = form_errors;
});
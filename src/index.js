import loadHomePage from "./pageLoad.js";
import loadMenuPage from "./menu.js";
import loadContactPage from "./contact.js";
import "./styles.css"

// loadHomePage();
// loadMenuPage();
// loadContactPage();

function addNavEvents(){
    const navButtons = document.querySelectorAll(".nav-btn");

    navButtons.forEach(button => {
        button.addEventListener("click", () => {
            const tab = button.textContent.toLowerCase();

            if(tab === "home"){
                loadHomePage();
            }
            else if(tab === "menu"){
                loadMenuPage();
            }
            else if(tab === "contact"){
                loadContactPage();
            }


        });
    });
}

//Initial page load
document.addEventListener("DOMContentLoaded", () => {
    loadHomePage();
    addNavEvents();
});












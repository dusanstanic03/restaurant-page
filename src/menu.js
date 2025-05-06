import menuImg from "./images/taverna-menu-crop.jpeg"
export default function loadMenuPage(){
    const content = document.querySelector("#content");
    content.innerHTML = "";

    const menuDiv = document.createElement("div");
    menuDiv.id = "menu-div";
    const menuImage = document.createElement("img");
    menuImage.src = menuImg;
    menuImage.id = "menu-image";


    menuDiv.append(menuImage);
    content.append(menuDiv);
}
import mapImage from "./images/naxos-map.png"
export default function loadContactPage(){
    const content = document.querySelector("#content");
    content.innerHTML = "";

    const contactDiv = document.createElement("div");
    contactDiv.id = "contact-div";
    const contactText = document.createElement("p");
    contactText.innerHTML = `
        <p>📍 Naxos Island, Greece</p>
        <p>📞 +30 123 456 789</p>
        <p>📧 hello@psarotaverna.gr</p>
        `
    ;
    const map = document.createElement("img");
    map.src = mapImage;
    map.id = "map";

    
    contactDiv.append(map);
    contactDiv.append(contactText);
    content.append(contactDiv);
}
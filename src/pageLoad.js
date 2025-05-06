import greeceImg from './images/greece.jpg';
import pappousImg from './images/pappous.jpg';
import logoImg from './images/psarotaverna_logo.png';


export default function loadHomePage(){
    const divContent = document.querySelector("#content");
    // Clear anything inside (optional, but safe)
    divContent.innerHTML = "";


    // const greece = document.createElement("img");
    // greece.src = greeceImg;
    // greece.id = "greece";

    const divInfo = document.createElement("div");
    divInfo.id = "info";

    const p1Info = document.createElement("p");
    p1Info.id = "p1-info";
    p1Info.innerHTML = "Since 1960<br>Traditional taverna on Naxos island";

    const pappous = document.createElement("img");
    pappous.src= pappousImg;
    pappous.id = "pappous";

    const p2Info = document.createElement("p");
    p2Info.id = "p2-info";
    p2Info.textContent = "Visit us and enjoy the slow life";

    divInfo.appendChild(p1Info);
    divInfo.appendChild(pappous);
    divInfo.appendChild(p2Info);

    // divContent.appendChild(greece);
    divContent.appendChild(divInfo);

}
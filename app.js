const eventLocation = "Keep It Kaimuki";
const eventLink = "https://keep-it-kaimuki.myshopify.com/";
const date = new Date("2026-02-16");
const blurb = "We're so excited to be out there with our Kaimuki friends and hope to see you there!";

const links = new Map([
    ["images/standwith.png", "https://decolonizepalestine.com/"],
    ["images/button.png", "https://newlevant.com/COVIDzine"],
    ["images/LIBRARY.png", "https://uncensoredlibrary.com/en"]
]);

function loadUpdate(w,x,y,z){
    document.getElementById("update-link").innerHTML = w;
    document.getElementById("update-link").href = x;
    document.getElementById("blurb").innerHTML = y;
    document.getElementById("date").innerHTML = z;
}

function loadSideLinks(x){
    let linkArea = document.getElementById("side-links");
    x.forEach(function(link, img) {
        let anchor = document.createElement("a");
        let newLink = document.createElement("img");
        newLink.src = img;
        newLink.setAttribute("class", "side-link");
        anchor.appendChild(newLink);
        anchor.href = link;
        linkArea.appendChild(anchor);
    });
}

loadUpdate(eventLocation,eventLink,blurb,date);
loadSideLinks(links);
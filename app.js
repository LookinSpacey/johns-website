const eventLocation = "Keep It Kaimuki";
const eventLink = "https://keep-it-kaimuki.myshopify.com/";
const date = new Date("2026-02-16");
const blurb = "We're so excited to be out there with our Kaimuki friends and hope to see you there!";

function loadUpdate(w,x,y,z){
    document.getElementById("update-link").innerHTML = w;
    document.getElementById("update-link").href = x;
    document.getElementById("blurb").innerHTML = y;
    document.getElementById("date").innerHTML = z;
}

loadUpdate(eventLocation,eventLink,blurb,date);
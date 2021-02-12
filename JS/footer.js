const footerData = {
    "link": {
        "twitter": "http://www.twitter.com/MarniJoelen",
        "fb": "http://www.facebook.com/MarniJoelen",
        "ig": "https://www.instagram.com/marnijoelen_and_her_cats/",
    },
    "img": {
        "twitter": "images/twitter.png",
        "fb": "images/fb.png",
        "ig": "images/ig.png",
    },
    "year": {
        "thisYear": "2021",
    }
}



const footer = document.querySelector("footer");

// Images Container
const imgDiv = document.createElement("div");
imgDiv.classList.add("container008");
imgDiv.classList.add("gap");
footer.appendChild(imgDiv);

const tTag = document.createElement("a");
tTag.setAttribute("href", footerData.link["twitter"]);
imgDiv.appendChild(tTag);

const tImg = document.createElement("img");
tImg.classList.add("icons");
tImg.setAttribute("width","30");
tImg.setAttribute("src", footerData.img["twitter"]);
tImg.setAttribute("alt",`Twitter`);
tTag.appendChild(tImg);

const fbTag = document.createElement("a");
fbTag.setAttribute("href", footerData.link["fb"]);
imgDiv.appendChild(fbTag);

const fbImgA = document.createElement("img");
fbImgA.classList.add("icons");
fbImgA.setAttribute("width","30");
fbImgA.setAttribute("src", footerData.img["fb"]);
fbImgA.setAttribute("alt",`Twitter`);
fbTag.appendChild(fbImgA);

const iTag = document.createElement("a");
iTag.setAttribute("href", footerData.link["ig"]);
imgDiv.appendChild(iTag);

const iImg = document.createElement("img");
iImg.classList.add("icons");
iImg.setAttribute("width","30");
iImg.setAttribute("src", footerData.img["ig"]);
iImg.setAttribute("alt",`Twitter`);
iTag.appendChild(iImg);


// Copyright Container
const copyDiv = document.createElement("div");
copyDiv.classList.add("container009");
copyDiv.classList.add("BoxOverride001");
footer.appendChild(copyDiv);

const copyright = document.createElement("p");
copyright.textContent = `© ${footerData.year["thisYear"]} Marni Joelen`
copyDiv.appendChild(copyright);
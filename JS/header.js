
// HTML Pages
const data = {
  "links": {
    "biography": "biography.html",
    "contactMe": "contact.html",
    "CYOAIntro": "cyoa-intro.html",
    "cyoaW1": "cyoa-week-1.html",
    "cyoaW2": "cyoa-week-2.html",
    "cyoaW3": "cyoa-week-3.html",
    "cyoaW4": "cyoa-week-4.html",
    "cyoaW5": "cyoa-week-5.html",
    "deadMenTellTales": "dead-men-tell-tales.html",
    "upcomingEvents": "events.html",
    "henzoAndTheDrawnCats": "henzo.html",
    "sideshowComic": "sideshow.html",
    "freeStory": "the-hunters-chase.html",
    "theRive": "the-rive.html"
  },
  "nav": {
    "stories": "Stories",
    "published": "Published",
    "free": "Free!",
    "wip": "WIP",
    "sideshow": "Sideshow",
    "dmtt": "Dead Men Tell Tales",
    "henzo": "Henzo and the Drawn Cats",
    "freeStory": "The Hunter's Chase",
    "rive": "The Rive",
    "cyoa": "Choose Your Own Adventure: Zombies",
    "bio": "Biography",
    "contact": "Contact Me",
    "events": "Upcoming Events"
  }
}

// Header containers

  // Header Above Nav
const wholeHeader = document.querySelector("#header");

const headerContainer = document.createElement("nav");
const brand = document.createElement("a"); 
const thumbprint = document.createElement("img");

headerContainer.classList.add("navbar");

brand.classList.add("navbar-brand");

brand.textContent = `Marni Joelen`;
brand.setAttribute("href", data.links["deadMenTellTales"]);

thumbprint.classList.add("d-inline-block")
thumbprint.classList.add("align-top")

thumbprint.setAttribute("src", "images/thumbprint2.png");
thumbprint.setAttribute("height", "50");
thumbprint.setAttribute("alt", "Bloody Thumbprint");
thumbprint.setAttribute("loading", "lazy");

headerContainer.appendChild(brand);
brand.prepend(thumbprint);
console.log(wholeHeader)

// Nav Bar
const navBar = document.createElement("nav");
navBar.classList.add("navbar")
navBar.classList.add("navbar-light")
navBar.classList.add("navbar-expand-lg")

const toggleButton = document.createElement("button");
toggleButton.classList.add("navbar-toggler")
toggleButton.setAttribute("type", "button");
toggleButton.setAttribute("data-toggle", "collapse");
toggleButton.setAttribute("data-target", "#navbarSupportedContent");
toggleButton.setAttribute("aria-controls","navbarSupportedContent");
toggleButton.setAttribute("aria-expanded","false");
toggleButton.setAttribute("aria-label", "Toggle navigation");
navBar.appendChild(toggleButton);

const toggleSpan = document.createElement("span");
toggleSpan.classList.add("navbar-toggler-icon")
toggleButton.appendChild(toggleSpan);

//---
const collapse = document.createElement("div");
collapse.classList.add("collapse")
collapse.classList.add("navbar-collapse")
collapse.setAttribute("id","navbarSupportedContent");
navBar.appendChild(collapse);

const navList = document.createElement("ul");
navList.classList.add("navbar-nav");
navList.classList.add("mr-auto");

collapse.appendChild(navList);

// Dropdown Menu
const dropdown = document.createElement("li");
dropdown.classList.add("nav-item");
dropdown.classList.add("dropdown");
navList.appendChild(dropdown);

const navDropdown = document.createElement("a");
navDropdown.classList.add("nav-link");
navDropdown.classList.add("dropdown-toggle");
navDropdown.setAttribute("href", "#");
navDropdown.setAttribute("id","navbarDropdown");
navDropdown.setAttribute("role","button");
navDropdown.setAttribute("data-toggle","dropdown");
navDropdown.setAttribute("aria-haspopup", "true");
navDropdown.setAttribute("aria-expanded", "false");
navDropdown.innerText = data.nav["stories"];
dropdown.appendChild(navDropdown);

const dropMenu = document.createElement("div");
dropMenu.classList.add("dropdown-menu");
dropMenu.setAttribute("aria-labelledby","navbarDropdown");
dropdown.appendChild(dropMenu);

const dropDiv = document.createElement("div");
dropDiv.classList.add("dropdown-divider");
dropDiv.textContent = data.nav["published"];
dropMenu.appendChild(dropDiv);

const sideshow = document.createElement("a");
sideshow.classList.add("dropdown-item")
sideshow.setAttribute("href", data.links["sideshowComic"])
sideshow.textContent = data.nav["sideshow"];
dropMenu.appendChild(sideshow);

const dmtt = document.createElement("a");
dmtt.classList.add("dropdown-item");
dmtt.setAttribute("href", data.links["deadMenTellTales"]);
dmtt.textContent = data.nav["dmtt"];
dropMenu.appendChild(dmtt);

const henzo = document.createElement("a");
henzo.classList.add("dropdown-item");
henzo.setAttribute("href", data.links["henzoAndTheDrawnCats"]);
henzo.textContent = data.nav["henzo"];
dropMenu.appendChild(henzo);

const freeDiv = document.createElement("div");
freeDiv.classList.add("dropdown-divider");
freeDiv.textContent = data.nav["free"];
dropMenu.appendChild(freeDiv);

const huntersChase = document.createElement("a");
huntersChase.classList.add("dropdown-item");
huntersChase.setAttribute("href", data.links["freeStory"]);
huntersChase.textContent = data.nav["freeStory"];
dropMenu.appendChild(huntersChase);

const wip = document.createElement("div");
wip.classList.add("dropdown-divider");
wip.textContent = data.nav["wip"];
dropMenu.appendChild(wip);

const rive = document.createElement("a");
rive.classList.add("dropdown-item");
rive.setAttribute("href", data.links["theRive"]);
rive.textContent = data.nav["rive"];
dropMenu.appendChild(rive);

// Choose Your Own Adventure
const cyoa = document.createElement("li");
cyoa.classList.add("nav-item");
cyoa.classList.add("active");
navList.appendChild(cyoa);

const cyoaLink = document.createElement("a");
cyoaLink.classList.add("nav-link");
cyoaLink.setAttribute("href", data.links["CYOAIntro"]);
cyoaLink.textContent = data.nav["cyoa"];
cyoa.appendChild(cyoaLink);

const cyoaSpan = document.createElement("span");
cyoaSpan.classList.add("sr-only");
cyoaSpan.textContent = `(current)`;
cyoaLink.appendChild(cyoaSpan);

// Biography
const bio = document.createElement("li");
bio.classList.add("nav-item");
bio.classList.add("active");
navList.appendChild(bio);

const bioLink = document.createElement("a");
bioLink.classList.add("nav-link");
bioLink.setAttribute("href", data.links["biography"]);
bioLink.textContent = data.nav["bio"];
bio.appendChild(bioLink);

const bioSpan = document.createElement("span");
bioSpan.classList.add("sr-only");
bioSpan.textContent = `(current)`;
bioLink.appendChild(bioSpan);

// Contact
const contact = document.createElement("li");
contact.classList.add("nav-item");
contact.classList.add("active");
navList.appendChild(contact);

const contactLink = document.createElement("a");
contactLink.classList.add("nav-link");
contactLink.setAttribute("href", data.links["contactMe"]);
contactLink.textContent = data.nav["contact"];
contact.appendChild(contactLink);

const contactSpan = document.createElement("span");
contactSpan.classList.add("sr-only");
contactSpan.textContent = `(current)`;
contactLink.appendChild(contactSpan);

// Events
const events = document.createElement("li");
events.classList.add("nav-item");
events.classList.add("active");
navList.appendChild(events);

const eventsLink = document.createElement("a");
eventsLink.classList.add("nav-link");
eventsLink.setAttribute("href", data.links["upcomingEvents"]);
eventsLink.textContent = data.nav["events"];
events.appendChild(eventsLink);

const eventsSpan = document.createElement("span");
eventsSpan.classList.add("sr-only");
eventsSpan.textContent = `(current)`;
eventsLink.appendChild(eventsSpan);

// Create Whole Thing
wholeHeader.appendChild(headerContainer);
wholeHeader.appendChild(navBar);
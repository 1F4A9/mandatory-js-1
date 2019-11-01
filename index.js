// CHANGING APPEARANCE ON H1 ELEMENT
document.querySelector('h1').textContent = 'Fruits & Vegetables Corp';

// CHANGING APPEARANCE ON LI ELEMENT
const liElement = document.querySelector('ul > li:last-child > a');
liElement.textContent = 'Vegetables'
liElement.href = '#vegetables';

// SWAPPING SECTION TAGS
const main = document.getElementById('main');
const about = document.getElementById('about');

main.insertAdjacentElement('afterbegin', about);

// CREATE NEW H2 ELEMENTS
const contact = document.getElementById('contact');

const elementAbout = document.createElement('H2');
const elementContact = document.createElement('H2');
elementAbout.innerHTML = 'About';
elementContact.innerHTML = 'Contact';

about.insertAdjacentElement("afterbegin", elementAbout);
contact.insertAdjacentElement("afterbegin", elementContact);

// WRAPPING TEXT IN A P-TAG
const pElement = document.createElement('p');
about.appendChild(pElement);
pElement.appendChild(about.childNodes[1]);

// CHANGE TD ELEMENTS TO TH INSIDE THEAD
const tdElement = document.querySelectorAll('thead > tr > td');

for (let nodes of tdElement) {
    let thElement = document.createElement('TH');
    thElement.innerHTML = nodes.innerHTML;
    nodes.replaceWith(thElement);
};

// ADDING MAIN.CSS
const addStylesheet = document.createElement('link');
addStylesheet.rel = 'stylesheet';
addStylesheet.href = 'main.css';
document.querySelector('head').appendChild(addStylesheet);

// CHANGING APPEARANCE IN HEAD TITLE
document.title = 'Fruits & Vegetables Corp';
import './style.css';
const element = document.createElement('div');
element.innerHTML = `<h1>Hello, world!</h1>`;

const page = document.querySelector('body');
page.appendChild(element);
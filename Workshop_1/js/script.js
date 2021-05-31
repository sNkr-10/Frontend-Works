let component = document.querySelector('ul');
let pop = document.querySelector('div#header .menu');
component.addEventListener('click',()=>{
     component.classList.toggle('active');
     pop.classList.toggle("active");
})

let drop1 = document.querySelector('#contact .drop-down>div:first-child>div');
let drop2 = document.querySelector('#contact .drop-down>div:nth-child(2)>div');
let drop3 = document.querySelector('#contact .drop-down>div:last-child>div');

const setDropdown1 = () => {
     drop1.classList.toggle('active');
     drop2.classList.remove('active');
     drop3.classList.remove('active');
}

const setDropdown2 = () => {
     drop2.classList.toggle('active');
     drop1.classList.remove('active');
     drop3.classList.remove('active');
}

const setDropdown3 = () => {
     drop3.classList.toggle('active');
     drop2.classList.remove('active');
     drop1.classList.remove('active');
}
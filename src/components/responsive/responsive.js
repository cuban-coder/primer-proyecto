const sizes = document.querySelectorAll('.size');
const plato = document.querySelector('.plato'); 

const platoBg = document.querySelector('.platoBackground');

let animationEnd = true;

function changeSize(){
    sizes.forEach(size => size.classList.remove('active'));
    this.classList.add('active');
}

sizes.forEach(size => size.addEventListener('click', changeSize));

let x = window.matchMedia("(max-width: 1000px)");

function changeHeight(){
    if(x.matches){
       // let platoHeight = plato.offsetHeight;
       // platoBg.style.height = `${platoHeight *1.08}px`;
    }
    else{
       // platoBg.sty.height = "475px";
    }
}

changeHeight();
window.addEventListener('resize', changeHeight);
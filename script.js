/* =========================
HERO SLIDER
========================= */

let slides = document.querySelectorAll(".hero-slide");
let nextBtn = document.querySelector(".next");
let prevBtn = document.querySelector(".prev");

let index = 0;

/* SHOW SLIDE */

function showSlide(i){
slides.forEach(slide=>{
slide.classList.remove("active");
});
slides[i].classList.add("active");
}

/* NEXT BUTTON */

if(nextBtn){
nextBtn.addEventListener("click", ()=>{
index++;
if(index >= slides.length){
index = 0;
}
showSlide(index);
});
}

/* PREVIOUS BUTTON */

if(prevBtn){
prevBtn.addEventListener("click", ()=>{
index--;
if(index < 0){
index = slides.length - 1;
}
showSlide(index);
});
}

/* AUTO SLIDER */

setInterval(()=>{
index++;
if(index >= slides.length){
index = 0;
}
showSlide(index);
},5000);


/* =========================
SCROLL REVEAL ANIMATION
========================= */

function reveal(){

let reveals = document.querySelectorAll(".reveal");

reveals.forEach(section => {

let windowHeight = window.innerHeight;
let elementTop = section.getBoundingClientRect().top;
let visible = 120;

if(elementTop < windowHeight - visible){
section.classList.add("active");
}

});

}

window.addEventListener("scroll", reveal);


/* =========================
3D PLOT CLICK DETAILS
========================= */

let plots = document.querySelectorAll(".plot3d");
let plotDetails = document.getElementById("plotDetails");

plots.forEach(plot => {

plot.addEventListener("click", function(){

let info = this.getAttribute("data-info");

if(plotDetails){

if(info){
plotDetails.innerText = info;
}else{
plotDetails.innerText = "This plot is already sold";
}

}

});

});


/* =========================
3D PLOT MOUSE EFFECT
========================= */

plots.forEach(plot => {

plot.addEventListener("mousemove",(e)=>{

let x = e.offsetX;
let y = e.offsetY;

plot.style.transform =
"rotateX("+(y/5)+"deg) rotateY("+(x/5)+"deg) scale(1.1)";

});

plot.addEventListener("mouseleave",()=>{
plot.style.transform="rotateX(20deg) rotateY(0deg)";
});

});


/* =========================
LIGHTBOX GALLERY
========================= */

function openLightbox(img){

let lightbox = document.getElementById("lightbox");
let lightboxImg = document.getElementById("lightbox-img");

if(lightbox && lightboxImg){
lightbox.style.display = "flex";
lightboxImg.src = img.src;
}

}

function closeLightbox(){

let lightbox = document.getElementById("lightbox");

if(lightbox){
lightbox.style.display = "none";
}

}

/* CLOSE LIGHTBOX ON OUTSIDE CLICK */

let lightbox = document.getElementById("lightbox");

if(lightbox){

lightbox.addEventListener("click",function(e){

if(e.target.id === "lightbox"){
this.style.display = "none";
}

});

}


/* =========================
MOBILE MENU TOGGLE
========================= */

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

if(menuToggle && nav){

// menu open close
menuToggle.addEventListener("click", (e) => {
nav.classList.toggle("show");
e.stopPropagation();
});

// outside click hide
document.addEventListener("click", (e) => {

if(!nav.contains(e.target) && !menuToggle.contains(e.target)){
nav.classList.remove("show");
}

});

// menu link click hide
document.querySelectorAll("nav a").forEach(link => {
link.addEventListener("click", () => {
nav.classList.remove("show");
});
});

}
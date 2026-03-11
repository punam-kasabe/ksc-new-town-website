
/* =========================
   HERO SLIDER
========================= */

let slides = document.querySelectorAll(".hero-slide");
let nextBtn = document.querySelector(".next");
let prevBtn = document.querySelector(".prev");

let index = 0;

function showSlide(i){

slides.forEach(slide=>{
slide.classList.remove("active");
});

slides[i].classList.add("active");

}

/* NEXT */

nextBtn.addEventListener("click", ()=>{

index++;

if(index >= slides.length){
index = 0;
}

showSlide(index);

});

/* PREVIOUS */

prevBtn.addEventListener("click", ()=>{

index--;

if(index < 0){
index = slides.length - 1;
}

showSlide(index);

});


/* AUTO SLIDE */

setInterval(()=>{

index++;

if(index >= slides.length){
index = 0;
}

showSlide(index);

},5000);



/* =========================
   SCROLL REVEAL
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
   PLOT CLICK DETAILS
========================= */

let plots = document.querySelectorAll(".plot3d");
let plotDetails = document.getElementById("plotDetails");

plots.forEach(plot => {

plot.addEventListener("click", function(){

let info = this.getAttribute("data-info");

if(info){

plotDetails.innerText = info;

}else{

plotDetails.innerText = "This plot is already sold";

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

lightbox.style.display = "flex";
lightboxImg.src = img.src;

}

function closeLightbox(){

document.getElementById("lightbox").style.display = "none";

}


/* CLOSE ON OUTSIDE CLICK */

document.getElementById("lightbox").addEventListener("click",function(e){

if(e.target.id === "lightbox"){

this.style.display = "none";

}

});
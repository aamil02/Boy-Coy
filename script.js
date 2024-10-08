function a (){
    gsap.registerPlugin(ScrollTrigger);
  
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
  });
  locoScroll.on("scroll", ScrollTrigger.update);
  
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, 
    getBoundingClientRect() {
      return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });
  
  
  
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  
  ScrollTrigger.refresh();
  }
  
a();

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


var face1 = document.querySelector("#face1")
var face2 = document.querySelector("#face2")

face1.addEventListener("mouseenter",function(){
    face2.style.opacity = "1"
})

face1.addEventListener("mouseleave",function(){
    face2.style.opacity = "0"
})

var face3 = document.querySelector("#face3")
var face4 = document.querySelector("#face4")

face3.addEventListener("mouseenter",function(){
    face4.style.opacity = "1"
})

face3.addEventListener("mouseleave",function(){
    face4.style.opacity = "0"
})

var face5 = document.querySelector("#face5")
var face6 = document.querySelector("#face6")

face5.addEventListener("mouseenter",function(){
    face6.style.opacity = "1"
})

face5.addEventListener("mouseleave",function(){
    face6.style.opacity = "0"
})


gsap.to("#wave2",{
  scrollTrigger: {
    trigger: "#wave2",
    start: "top 60%",
    end: "top 0%",
    scrub: .5,
    scroller: "#main",
    // markers: true
  },
  left: "-5%",
})

gsap.to("#wave3",{
  scrollTrigger: {
    trigger: "#wave2",
    start: "top 60%",
    end: "top 0%",
    scrub: .5,
    scroller: "#main",
    // markers: true
  },
  left: "0%",
})

gsap.to("#loader",{
  y: "-100%",
  duration: 2,
  delay: 2,
  ease: Expo.easeInOut
})
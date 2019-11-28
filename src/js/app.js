import LazyLoad from "vanilla-lazyload";
import AOS from "aos";

var myLazyLoad = new LazyLoad({
  elements_selector: ".lazyload",
  load_delay: 100
});


AOS.init({
  easing: 'ease-in-out-cubic',
  delay: 300,
  once: true,
  duration: 800,
  anchorPlacement: 'top-center'
});

let menuToggle = document.getElementById("menuToggle")
let menu = document.getElementById("menu")

menuToggle.addEventListener("click", function() {
  menu.classList.toggle("hidden")
});

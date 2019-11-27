import LazyLoad from "vanilla-lazyload";
import AOS from "aos";

var myLazyLoad = new LazyLoad({
  elements_selector: ".lazyload",
  load_delay: 100
});

AOS.init({
  disable: 'mobile',
  disable: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  easing: 'ease-in-sine',
  delay: 100,
  duration: 600,
});

let menuToggle = document.getElementById("menuToggle")
let menu = document.getElementById("menu")

menuToggle.addEventListener("click", function() {
  menu.classList.toggle("hidden")
});

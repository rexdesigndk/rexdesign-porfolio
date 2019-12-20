import LazyLoad from "vanilla-lazyload";
import AOS from "aos";
var WebFont = require("webfontloader");

var myLazyLoad = new LazyLoad({
  load_delay: 100
});

WebFont.load({
  google: {
    families: ["Raleway:400,700&display=swap"]
  }
});

AOS.init({
  disable: "mobile",
  disable: window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  easing: "ease-in-out-cubic",
  delay: 300,
  once: true,
  duration: 800,
  anchorPlacement: "top-center"
});

let menuToggle = document.getElementById("menuToggle");
let menu = document.getElementById("menu");

menuToggle.addEventListener("click", function() {

  if (menu.classList.contains("active")) {
    this.setAttribute("aria-expanded", "false");
    menu.classList.remove("active");
    menu.classList.remove("hidden");
  } else {
    menu.classList.add("active");
    menu.classList.add("hidden");
    this.setAttribute("aria-expanded", "true");
  }

});

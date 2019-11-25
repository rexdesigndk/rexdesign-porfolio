import LazyLoad from "vanilla-lazyload";
import Swup from "swup";

var myLazyLoad = new LazyLoad({
  elements_selector: ".lazyload",
  load_delay: 100
});

const swup = new Swup();

let menuToggle = document.getElementById("menuToggle")

menuToggle.addEventListener("click", function() {
  menuToggle
});

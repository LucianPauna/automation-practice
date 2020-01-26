import '../css/styles.css';
import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from './modules/StickyHeader';


new RevealOnScroll(document.querySelectorAll('.feature-item')); 
new RevealOnScroll(document.querySelectorAll('.testimonial')); 

let mobileMenu = new MobileMenu();
let stickyHeader = new StickyHeader();

if (module.hot) {
  module.hot.accept();
}
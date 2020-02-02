import '../css/styles.css';
import 'lazysizes'
import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from './modules/StickyHeader';

// React related code goes here
import React from 'react';
import ReactDOM from 'react-dom';
import MyAmazingComponent from './modules/MyComponent';

ReactDOM.render(<MyAmazingComponent />, document.querySelector('#react-example'));

new RevealOnScroll(document.querySelectorAll('.feature-item')); 
new RevealOnScroll(document.querySelectorAll('.testimonial')); 

let mobileMenu = new MobileMenu();
let stickyHeader = new StickyHeader();

if (module.hot) {
  module.hot.accept();
}
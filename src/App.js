import Menu from './modules/Menu.js';
import SlideNav from './modules/Slide.js';
import Dropdown from './modules/Dropdown.js';
import ScrollToTop from './modules/ScrollToTop.js';
import SmoothScroll from './modules/SmoothScroll.js';

const menu = new Menu('.menu-btn', 'nav.mobile ul', 'show');
menu.init();

const smoothScroll = new SmoothScroll('a[href^="#"]');
smoothScroll.init();

const dropdown = new Dropdown('.faq-single');
dropdown.init();

const scrollToTop = new ScrollToTop('#btnScrollToTop', 'scroll-top-active');
scrollToTop.init();

const slide = new SlideNav('.slide', '.slide-wrapper');
slide.init();
slide.addControl('.custom-controls');


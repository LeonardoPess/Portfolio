import smoothScrollTo from './smoothScrollTo.js';

export default class Menu {
  constructor(btn, classActive) {
    this.btn = document.querySelector(btn);
    this.classActive = classActive;

    this.toggleBtn = this.toggleBtn.bind(this);
  }

  showBtn() {
    this.btn.classList.add(this.classActive);
  }

  removeBtn() {
    this.btn.classList.remove(this.classActive);
  }

  toggleBtn() {
    (window.pageYOffset > 40) ?  this.showBtn() : this.removeBtn();
  }

  handleEvents() {
    window.addEventListener('scroll', this.toggleBtn);
    this.btn.addEventListener('click', () => smoothScrollTo(0, 0));
    ; 
  }

  init() {
    this.handleEvents();
  }
}
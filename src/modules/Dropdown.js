export default class Dropdown {
  constructor(list) {
    this.dropdownList = document.querySelectorAll(list);
    this.activeClass = 'faq-active';
  }

  faqDesc(el){
    const faqDesc = el.querySelector('.faq-description');
    const faqArrow = el.querySelector('#faqArrow');
    if(faqDesc.style.maxHeight){
        faqDesc.style.maxHeight = null;
        faqArrow.classList.remove('open');
    }else{
        faqDesc.style.maxHeight = faqDesc.scrollHeight + 'px';
        faqArrow.classList.add('open');
    }
  }

  toggleDropdown(item) {
    item.classList.toggle(this.activeClass);
    this.faqDesc(item);
  }

  addDropdownEvent() {
    this.dropdownList.forEach((item) => {
      item.addEventListener('click', () => this.toggleDropdown(item));
    });
  }

  init() {
    if (this.dropdownList.length) {
      this.addDropdownEvent();
    }
    return this;
  }
}

//vars global
var d = document;

//functions
function toggle(e,classeName) {
    e.classList.toggle(classeName);
}

//Faq dropDown
const faq = d.querySelectorAll(".faq-single");
let i;
var lenFaq = faq.length;

for(i = 0; i < lenFaq; i++){
    faq[i].addEventListener('click', toggleFaq);

    function toggleFaq(){
        toggle(this,'faq-active');
        faqDesc(this);
    }

    function faqDesc(el){
        var faqDesc = el.querySelector('.faq-description');
        const faqArrow = el.querySelector('#faqArrow');
        if(faqDesc.style.maxHeight){
            faqDesc.style.maxHeight = null;
            faqArrow.classList.remove('open');
        }else{
            faqDesc.style.maxHeight = faqDesc.scrollHeight + 'px';
            faqArrow.classList.add('open');
        }
    }
}

//scroll Top

btnScrollTop = d.querySelector('#btnScrollToTop');

btnScrollTop.addEventListener('click',scrollTop);
window.addEventListener('scroll',toggleBtnScrollTop);

function scrollTop() {
    smoothScrollTo(0, 0);
}

function toggleBtnScrollTop() {
    (window.pageYOffset > 40) ?  showBtnScrollTop() : removeBtnScrollTop();
}

function showBtnScrollTop() {
    btnScrollTop.classList.add('scroll-top-active')
}

function removeBtnScrollTop() {
    btnScrollTop.classList.remove('scroll-top-active')
}

//hover project
const projects = d.querySelectorAll(".jobs");

projects.forEach(item => {
    item.addEventListener('mouseover', mouseOnProject);
});

function mouseOnProject(){
    const projectDesc = this.querySelector(".info-project");
    projectDesc.style.opacity = "1";
    this.addEventListener('mouseleave', mouseOffProject);
}

function mouseOffProject(){
    const projectDesc = this.querySelector(".info-project");
    projectDesc.style.opacity = "0";
}


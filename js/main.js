//vars global
var d = document;

//Toggle menu mobile
let menuStatus = false;
const menuBtn = d.querySelector(".menu-btn");
const menu = d.querySelector("nav.mobile ul");

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu(e) {
    e.preventDefault();
    if (menuStatus == false) {
        openMenu();
    } else {
        closeMenu();
    }
}

function openMenu() {
    menu.style.display = "flex";
    menu.style.width = "100%";
    menuStatus = true;
    menubtnAnimation(menuStatus)
}

function closeMenu() {
    menu.style.display = "none";
    menuStatus = false;
    menubtnAnimation(menuStatus)
}

//Animation menu mobile
function menubtnAnimation(menuStatus){
    (menuStatus == true) ? menuBtn.classList.add('open') : menuBtn.classList.remove('open');
}

//Menu scroll
const itemsScroll = d.querySelectorAll('a[href^="#"]');

itemsScroll.forEach(item => {
    item.addEventListener('click', scrollToIdOnClick)
});

function getScrollTopByHref(element) {
    const id = element.getAttribute('href');
    return d.querySelector(id).offsetTop;
}

function scrollToIdOnClick(event) {
    event.preventDefault();
    const to = getScrollTopByHref(event.target) - 30;

    closeMenu();
    scrollToPosition(to);
};

function scrollToPosition(to) {
    // window.scroll({
    //   top: to,
    //   behavior: "smooth",
    // });
    smoothScrollTo(0, to);
}

/**
 * Smooth scroll animation
 * @param {int} endX: destination x coordinate
 * @param {int} endY: destination y coordinate
 * @param {int} duration: animation duration in ms
 */
function smoothScrollTo(endX, endY, duration) {
    const startX = window.scrollX || window.pageXOffset;
    const startY = window.scrollY || window.pageYOffset;
    const distanceX = endX - startX;
    const distanceY = endY - startY;
    const startTime = new Date().getTime();

    duration = typeof duration !== 'undefined' ? duration : 400;

    // Easing function
    const easeInOutQuart = (time, from, distance, duration) => {
        if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
        return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
    };

    const timer = setInterval(() => {
        const time = new Date().getTime() - startTime;
        const newX = easeInOutQuart(time, startX, distanceX, duration);
        const newY = easeInOutQuart(time, startY, distanceY, duration);
        if (time >= duration) {
            clearInterval(timer);
        }
        window.scroll(newX, newY);
    }, 1000 / 60); // 60 fps
};
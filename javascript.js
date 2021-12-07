window.addEventListener('scroll', function () {
    var header = document.querySelector('.top-menu');
    header.classList.toggle('top-header', window.scrollY > 100)
});
const toggle = document.querySelector('.fa-bars');
const menuopen = document.querySelector('.right-menu');
toggle.onclick = function () {
    menuopen.classList.toggle('menu-open');
}
const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0) {
    for (let i = 0; i < menuLinks.length; i++) {
        const menuLink = menuLinks[i];
        menuLink.addEventListener("click", onMenuLinkClick);
    }

    function onMenuLinkClick(elem) {
        const menuLink = elem.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLinks.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - document.querySelector("header").offsetHeight;
        
            if (iconMenu.classList.contains('_active')) {
                document.body.classList.toggle('._lock');
                iconMenu.classList.toggle('_active');
                
            }
        }
    }
}
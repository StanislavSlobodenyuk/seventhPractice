const popupLinks =document.querySelectorAll('.popup-link');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll('.lock-padding');

let unlock = true;

const timeout = 800;

if (popupLinks.length > 0) {
    for (let index = 0; index < popupLinks.length; index++) {
        const popupLink = popupLinks[index];
        popupLink.addEventListener("click", function (elem) {
            const popupName = popupLink.getAttribute('href').replace("#",'');
            const curentPopup = document.getElementById(popupName);
            popupOpen(curentPopup);
            elem.preventDefault();
        });
    }
}

const popupCloseIcon = document.getElementById("#close-popup")
if (popupCloseIcon.length > 0) {
    for (let index = 0; index < popupCloseIcon.length; index++) {
        const el = popupCloseIcon[index];
        el.addEventListener('click', function (elem){
            popupClose(elem.closest('.popup'));
            elem.preventDefault(); 
        });
    }
}

function popupOpen(curentPopup) {
    if(curentPopup && unlock){
        const popupActive = document.querySelector('.popup.open');
        if (popupActive) {
            popupClose(popupActive, false)
        } else {
            bodyLock();
        }
        curentPopup.classList.add('open');
        curentPopup.addEventListener("click", function (elem) {
           if (!elem.target.closest('.popup__content')) {
                popupClose(elem.target.closest('.popup'))
           } 
        });
    }
}
function popupClose(popupActive, doUnlock = true) {
    if (unlock) {
        popupActive.classList.remove('open');
        if (doUnlock) {
            bodyUnlock();
        }
    }
}

function bodyLock() {
    const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';

    if (lockPadding.length > 0) {
        for (let index = 0; index < lockPadding.length; index++) {
            const el = lockPadding[index];
            el.style.paddingRight = lockPaddingValue;
        }
        body.style.paddingRight = lockPaddingValue;
        body.classList.add('_lock')

        unlock = false;
        setTimeout(function()  {
            unlock = true;
        }, timeout);
    }
}

function bodyUnlock() {
    setTimeout(function()  {
       if (lockPadding.length > 0) {
            for (let index = 0; index < lockPadding.length; index++) {
                const el = lockPadding[index];
                el.style.paddingRight = '0px';
            }
       }
        body.style.paddingRight = '0px';
        body.classList.remove('_lock')
    }, timeout);

    unlock = false;
        setTimeout(function()  {
            unlock = true;
        }, timeout);
}

document.addEventListener('keydown', function(elem){
    if (elem.key === "Escape") {
        const popupActive = document.querySelector('.popup.open')
        popupClose(popupActive);
    }
});
// поліфили для того щоб працювали: closest, matches
(function() {
    // проверяем поддержку
    if (!Element.prototype.closest) {
      // реализуем
      Element.prototype.closest = function(css) {
        var node = this;
        while (node) {
          if (node.matches(css)) return node;
          else node = node.parentElement;
        }
        return null;
      };
    }
})();
(function() {
    // проверяем поддержку
    if (!Element.prototype.matches) {
  
      // определяем свойство
      Element.prototype.matches = Element.prototype.matchesSelector ||
        Element.prototype.webkitMatchesSelector ||
        Element.prototype.mozMatchesSelector ||
        Element.prototype.msMatchesSelector;
    }
})();
// поліфили для того щоб працювали: closest, matches

function Accordion() {
    let items = document.querySelectorAll('.header__menu');
    for (let i = 0; i < items.length; i++) {
        items[i].addEventListener('click', function(e) {
            e.preventDefault();
            if (items[i].classList.contains('header__menu_active')) {
                items[i].classList.remove('header__menu_active')
            } else {
                for (let i = 0; i < items.length; i++) {
                    items[i].classList.remove('header__menu_active')
                }
                items[i].classList.add('header__menu_active');
            }
        });
    }
}
Accordion();
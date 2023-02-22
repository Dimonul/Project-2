const shop = document.querySelector('.shop');

shop.addEventListener('click', () => {
    if (shop.classList.contains('active')) {
        shop.classList.remove('active');
        document.querySelector('body').classList.remove('zeroscroll');
    } else {
        shop.classList.add('active');
        document.querySelector('body').classList.add('zeroscroll');
    }

})

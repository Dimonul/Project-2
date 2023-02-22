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

if (window.innerWidth < 1024){
    //cod sub 1024
    console.log("123");
}
else {
    //cod peste 1024
}

window.onresize=function (){
    if (window.innerWidth <1024){
        //aici vine codul sub 1024
        console.log("456");
    }
    else{
        //cod peste 1024
    }
    };

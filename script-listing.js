function categoriesSlider() {
    let slide = '';
    let categorii = JSON.parse(sessionStorage.getItem('categorii'));
    if (categorii) {
        categorii.forEach(function (categorie) {
            slide += '<li class="glide__slide"><a href="?categoryId=' + categorie.id + '"><img src="https://magento-demo.tk/' + categorie.imageUrl + '">' + categorie.name + ' </a></li>';
        });
        document.querySelector('.glide__slides').innerHTML = slide;
    }
}

categoriesSlider();



new Glide('.glide', {
    type: 'carousel',
    perView: 5,
    gap: 20,
    breakpoints: {
        580: {
            perView: 1
        },
        768: {
            perView: 2
        },
        1024: {
            perView: 3
        },
        1200: {
            perView: 4
        }
    }
}).mount()





function productsHtml() {
    let productTemplate = '';
    let products = JSON.parse(sessionStorage.getItem('products'));
    if (products) {
        products.forEach(function (product) {
            console.log(product);
            productTemplate +=
                '<div class="card">' +
                '<a href="product.html?sku=' + product.sku + '">' +
                '<img src="https://magento-demo.tk/' + product.image + '" alt="' + product.name + '"></a>' +
                '<div class="cardinfo">' +
                '<a href="product.html?sku=' + product.sku + '">' +
                '<h4>' + product.name + '</h4></a>' +
                '<h5>' + product.weight + '</h5>' +
                '<div class="card-overlap">' +
                '<div class="review">' +
                '<i class="stars"></i>' +
                '<i class="stars full" style="width: 80%;"></i>' +
                '</div>' +
                '<div class="price">' +
                '<p>' + product.price + '</p>' +
                '</div>'+
                 '</div >'+
                '</div>'+
                '</div>';
        });
        document.querySelector('.fruits').innerHTML = productTemplate;
    }
}
productsHtml();
   // <span
    //         class="sale">Sale</span>


    //parse array/objects multi dimensional
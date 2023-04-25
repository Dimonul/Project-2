

function productsHtml() {
    let finalPrice = '';
    let saleLabel = '';
    let items ='';
    let titleimg = '';
    let title ='';
    let stock='';
    let products = JSON.parse(sessionStorage.getItem('products'));

    let sku = window.location.search ? window.location.search.replace('?sku=', '') : '';  //opertori ternari , daca conditia este adevarata, apelam prima parte, intre semnul intrebarii si :, daca nu e adevarata se va apela ce este dupa :, adica nimic in cazul nostru
    console.log(sku);
    if (sku) {
        items = Object.values(products).filter(function(product) {

        
        if (Object.values(product)[0].sku.includes(sku)) {
            return product;
        }
        
        })
    console.log(items)
    
    } else {
         items =products
    }
    
    items.forEach(function (product) {
        const productFinal = product[Object.keys(product)[0]];
        if (Number(productFinal.final_price) < Number(productFinal.price)) {

            finalPrice = '<p class="finalprice">' + productFinal.final_price + '</p>';
            saleLabel = '<span class="sale">Sale</span>'
        }
        else {
            finalPrice = '';
            saleLabel = '';
        }
        title += productFinal.name;
        titleimg += '<img src="https://magento-demo.tk/media/catalog/product' + productFinal.image + '" alt="' + productFinal.name + '">' + saleLabel + '</a>'
        if(productFinal.stock_status == "0"){
            stock += '<h5>In Stock</h5>';

        }
        else{
            stock +='<h5>Not in Stock</h5>';

        }
    });
    console.log(stock);
    document.querySelector('.homepage span').textContent = title;
    document.querySelector('.titleimg').innerHTML = titleimg;
    document.querySelector('.title h2').innerHTML = title;
    document.querySelector('.instock').innerHTML = stock;


}

const intervalProduse = setInterval(function () {
    if (sessionStorage.getItem('products')) {
        productsHtml();
        clearInterval(intervalProduse);

    }
}, 200);




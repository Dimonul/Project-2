

function getCategories(categoryId) {
    fetch('https://magento-demo.tk/rest/V1/curs/categorii/' + categoryId, { method: 'GET' })
    .then((response) => response.json())
    .then((result) =>{
sessionStorage.setItem('categorii', JSON.stringify(result));
    })

};

if (!sessionStorage.getItem('categorii')){  //daca nu exista categorii luate de pe server, se executa getCategories 56
getCategories(56);
}



function getProducts(categoryId) {
    fetch('https://magento-demo.tk/rest/V1/curs/produse/' + categoryId, { method: 'GET' })
    .then((response) => response.json())
    .then((result) =>{
sessionStorage.setItem('products', JSON.stringify(result));

})};

if (!sessionStorage.getItem('products')){  //daca nu exista categorii luate de pe server, se executa getCategories 56
getProducts(56);
}


function getReviews(categoryId) {
    fetch('https://magento-demo.tk/rest/V1/curs/produse/' + categoryId, { method: 'GET' })
    .then((response) => response.json())
    .then((result) =>{
sessionStorage.setItem('products', JSON.stringify(result));

})};

if (!sessionStorage.getItem('products')){  //daca nu exista categorii luate de pe server, se executa getCategories 56
getProducts(56);
}

function categoriesHeader (){
    let meniu='';
    let categorii=JSON.parse(sessionStorage.getItem('categorii'));  
    if (categorii){
        categorii.forEach(function (categorie){
    meniu += '<li><a href="?categoryId='+categorie.id+'">'+categorie.name+' </a></li>';
        });
        document.querySelector('li.shop ul').innerHTML=meniu;
    }
}
categoriesHeader();


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

// if (window.innerWidth < 1024) {
//     //cod sub 1024
//     console.log("123");
// }
// else {
//     //cod peste 1024
// }

// window.onresize = function () {
//     if (window.innerWidth < 1024) {
//         //aici vine codul sub 1024
//         console.log("456");
//     }
//     else {
//         //cod peste 1024
//     }
// };

function showMenu() {
    document.querySelector(".navigation").classList.toggle("active");
    document.querySelector(".fa-bars").classList.toggle("hide");
    document.querySelector(".fa-x").classList.toggle("show");

}
 

function productsHtml() {
    let finalPrice = '';
    let saleLabel = '';
    let items = '';
    let titleimg = '';
    let title = '';
    let stock = '';
    let description = '';
    let ingredients = '';
    const ingredientsTitle = document.querySelector('.ingredients');
    let nutritionBenefits ='';
    const nutrition = document.querySelector('.nutrition');
    let healthBenefits ='';
    const healthBen =document.querySelector('.healthbenefits');

    let products = JSON.parse(sessionStorage.getItem('products'));

    let sku = window.location.search ? window.location.search.replace('?sku=', '') : '';  //opertori ternari , daca conditia este adevarata, apelam prima parte, intre semnul intrebarii si :, daca nu e adevarata se va apela ce este dupa :, adica nimic in cazul nostru
    console.log(sku);
    if (sku) {
        items = Object.values(products).filter(function (product) {


            if (Object.values(product)[0].sku.includes(sku)) {
                return product;
            }

        })
        console.log(items)

    } else {
        items = products
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

        if (productFinal.stock_status === "0") {
            stock += '<h5 style="color:red;">Not In Stock</h5>';

        }
        else {
            stock += '<h5>In Stock</h5>' +
                '<div class="discount">' +
                '<p>' + productFinal.price + '</p>' +
                '<p>'+ productFinal.final_price + '</p>' +
                '</div>';
            
        }
        
        description += '<p>'+ productFinal.description + '</p>';


        if(productFinal.ingredients === null)
        {
            ingredientsTitle.remove();  
            document.querySelector(".accordion__title").classList.add("active");

                }
        else{
        ingredients += '<li>'+ productFinal.ingredients + '</li>';
        }


        if(productFinal.nutritional_information === null)
        {
            nutrition.remove();  
            document.querySelector(".accordion__title").classList.add("active");

                }
        else{
        nutritionBenefits += '<li>'+ productFinal.nutritional_information + '</li>';
        }


        if(productFinal.health_benefits === null)
        {
            healthBen.remove();  
            document.querySelector(".accordion__title").classList.add("active");


                }
        else{
        healthBenefits += '<ul>'+ productFinal.health_benefits + '</ul>';
        }
    });
                document.querySelector('.homepage span').textContent = title;
                document.querySelector('.titleimg').innerHTML = titleimg;
                document.querySelector('.title h2').innerHTML = title;
                document.querySelector('.instock').innerHTML = stock;
                document.querySelector('.description').innerHTML = description;
                document.querySelector('.ingrediente').innerHTML = '<ul>' + ingredients + '</ul>';
                document.querySelector('.nutritie').innerHTML = '<ul>' + nutritionBenefits + '</ul>';
                document.querySelector('.beneficii').innerHTML = '<ul>' + healthBenefits + '</ul>';



}

                const intervalProduse = setInterval(function () {
    if (sessionStorage.getItem('products')) {
                    productsHtml();
                clearInterval(intervalProduse);

    }
}, 200);



document.querySelector(".accordion__title").classList.add("active");
document.onclick = function (event) {
  if (event.target.classList.contains("accordion__title")) {
    if (event.target.classList.contains("active")) {
      event.target.classList.remove("active");
    }
    else {
      document.querySelector(".accordion__title.active").classList.remove("active");}
      event.target.classList.add("active");

  }
};
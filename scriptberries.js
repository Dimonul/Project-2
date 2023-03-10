function getCategories(categoryId) {
  fetch('https://magento-demo.tk/rest/V1/curs/categorii/' + categoryId, { method: 'GET' })
  .then((response) => response.json())
  .then((result) =>{
sessionStorage.setItem('categorii', JSON.stringify(result));
  })

};
if (!sessionStorage.getItem('categorii')){  //daca nu exista categorii luate de pe server, se executa getCategories 56
getCategories(56);
};

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

if (window.innerWidth < 1024) {
    //cod sub 1024
    console.log("123");
}
else {
    //cod peste 1024
}

var minus = document.querySelector(".fa-minus");
var add = document.querySelector(".fa-plus");
var quantity = document.querySelector(".quantity1");

// includes button minus disablement if at minimum or below
const minimum = 1;

minus.addEventListener("click", function () {
  if (quantity.value <= minimum) {
    minus.disabled = true;
    return; // return to avoid decrementing
  } else {
    minus.disabled = false;
  }
  quantity.value--;
});

add.addEventListener("click", function () {
  if (quantity.value > minimum) {
    minus.disabled = false;
  }
  quantity.value++;
});



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


function showMenu() {
  document.querySelector(".navigation").classList.toggle("active");
  document.querySelector(".fa-bars").classList.toggle("hide");
  document.querySelector(".fa-x").classList.toggle("show");

}
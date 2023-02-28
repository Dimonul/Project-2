var minus = document.querySelector(".fa-minus");
var add = document.querySelector(".fa-plus");
var quantity = document.querySelector(".quantity1");

// includes button minus disablement if at minimum or below
const minimum = 1;

minus.addEventListener("click", function(){
    if (quantity.value <= minimum) {
        minus.disabled = true;
        return; // return to avoid decrementing
      } else {
        minus.disabled = false;
      }
    quantity.value--;
});

add.addEventListener("click", function() {
    if (quantity.value > minimum) {
        minus.disabled = false;
      }
    quantity.value++;
});




const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget)
    tabContents.forEach(tabContent => {
      tabContent.classList.remove('active')
    })
    tabs.forEach(tab => {
      tab.classList.remove('active')
    })
    tab.classList.add('active')
    target.classList.add('active')
  })
})

function showMenu (){
  document.querySelector(".navigation").classList.toggle("active");
  document.querySelector(".fa-bars").classList.toggle("hide");
  document.querySelector(".fa-x").classList.toggle("show");

}
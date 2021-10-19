var plus = document.querySelectorAll(".plus");
var minus = document.querySelectorAll(".minus");
var remove = document.querySelectorAll(".remove");
var like = document.querySelectorAll(".like");




for (let i = 0; i<plus.length; i++) {
plus[i].addEventListener("click", function (){
plus[i].nextElementSibling.innerHTML++;
Total()
})
}

for(let i = 0; i<minus.length; i++) {
minus[i].addEventListener("click", function () {
if (minus[i].previousElementSibling.innerHTML > 0)
minus[i].previousElementSibling.innerHTML--;
Total()
})
}


for (let i=0; i<remove.length; i++) {
remove[i].addEventListener("click", function() {
remove[i].parentNode.parentNode.remove();
Total()
})
}

for (let i = 0 ; i<like.length; i++) {
like[i].addEventListener("click", function() {
like[i].classList.toggle("red");
alert("Product added to wishlist!")

})
}


function Total() {
var price = document.querySelectorAll(".price");
var quantity = document.querySelectorAll(".number");
var total = 0;
var totamount = document.querySelector(".totamount")
for (var i = 0; i < quantity.length; i++) {

total += parseInt(price[i].innerText) * parseInt(quantity[i].innerText)
}
totamount.innerHTML = total + (" TND");

}






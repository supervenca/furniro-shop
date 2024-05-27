const shoppingCart = document.querySelector('.shopping-cart');
const cartBtn = document.querySelector('.cart');
const closeBtn = document.querySelector('.shopping-cart__icon');

function openShoppingCart() {
    if (shoppingCart.style.display = 'none'){
        shoppingCart.style.display = 'grid';
    }
}
function closeShoppingcart() {
    if (shoppingCart.style.display = 'grid'){
        shoppingCart.style.display = 'none';
    }
}

cartBtn.addEventListener('click', openShoppingCart);
closeBtn.addEventListener('click', closeShoppingcart);
const shoppingCart = document.querySelector('section');
const cartBtn = document.querySelector('.cart');
const closeBtn = document.querySelector('.shopping-cart__icon');

function openShoppingCart() {
    if (shoppingCart.style.display = 'none'){
        shoppingCart.style.display = 'block';
    }
}
function closeShoppingcart() {
    if (shoppingCart.style.display = 'block'){
        shoppingCart.style.display = 'none';
    }
}

cartBtn.addEventListener('click', openShoppingCart);
closeBtn.addEventListener('click', closeShoppingcart);
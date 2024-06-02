document.addEventListener('DOMContentLoaded', () => {
    const cart = [];
    const cartCountElement = document.getElementById('cart-count');

    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const productElement = event.target.closest('.product');
            const productId = productElement.dataset.id;
            const productName = productElement.querySelector('h2').textContent;
            const productPrice = productElement.querySelector('p').textContent;

            const product = {
                id: productId,
                name: productName,
                price: productPrice
            };

            cart.push(product);
            updateCartCount();
        });
    });

    function updateCartCount() {
        cartCountElement.textContent = cart.length;
    }
});

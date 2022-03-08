const displayCartInitial = () => {
    const cart = getOrCreateCart();
    for (const name in cart) {
        displayProducts(name);
    }
}

document.getElementById("add").addEventListener("click", () => {
    const inputBox = document.getElementById("input");
    const input = inputBox.value;

    if (!input) {
        return;
    }

    displayProducts(input);
    addToCartStorage(input);

    inputBox.value = "";

});
// add to cart
const displayProducts = input => {
    const items = document.getElementById("items-container");
    const newItem = document.createElement("li");
    newItem.innerText = input;
    items.appendChild(newItem);
}
const getOrCreateCart = () => {
    const cart = localStorage.getItem("cart");
    let cartObj;
    if (cart) {
        cartObj = JSON.parse(cart);
    }
    else {
        cartObj = {};
    }
    return cartObj;
};
const addToCartStorage = name => {
    const cart = getOrCreateCart();
    if (cart[name]) {
        cart[name] += 1;
    }
    else { cart[name] = 1; }
    const cartString = JSON.stringify(cart);
    localStorage.setItem("cart", cartString);
}
// display cart items initial time
displayCartInitial();

// buy now
const buyNow = () => {
    localStorage.removeItem('cart');
    document.getElementById("items-container").textContent = "";
}
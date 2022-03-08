const input = document.getElementById("input");

document.getElementById("add").addEventListener("click", () => {
    displayProducts(input.value);
    addToCartStorage(input.value)

});
// add to cart
const displayProducts = input => {
    const items = document.getElementById("items-container");
    const newItem = document.createElement("li");
    newItem.innerText = input;
    items.appendChild(newItem);
}
const getCartOnStorage = () => {
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
    const cart = getCartOnStorage();
    cart[name] = 1;
    const cartString = JSON.stringify(cart);
    localStorage.setItem("cart", cartString);
}
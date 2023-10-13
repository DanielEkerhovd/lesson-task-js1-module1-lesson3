const product = {
    name: "Fancy Product",
    price: 99,
    onSale: true,
};

let productContainer = document.querySelector(".container");
let nameUnderline = "none"
let productPrice = "Unavailable";
let productSale = "NOT";

if (product.price) {
    productPrice = product.price + " $"

}

if (product.onSale) {
    productSale = ""
    nameUnderline = "underline"

}

productContainer.innerHTML += 
`<h1 style="text-decoration: ${nameUnderline}">${product.name}</h1>
    <p>Pricing: ${productPrice}</p>
    <p>This product is ${productSale} on sale!</p>`;
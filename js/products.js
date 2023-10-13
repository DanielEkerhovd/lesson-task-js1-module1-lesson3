const products = [
    {
        name: "Fancy Product",
        price: 40,
        soldOut: true,
    },
    {
        name: "Another Product",
        soldOut: false,
    },
    {
        name: "Cheap Product",
        price: 10,
        soldOut: true,
    },
];


let productCard = document.querySelector(".container");
let html = "";




for (let i = 0; i < products.length; i++) {

    let name = products[i].name;
    let pricing = products[i].price + " $";
    let stock = products[i].soldOut;
    let stockColor = "#008000";

    stock = "In stock";



    if (!products[i].soldOut) {
        stock = "Sold Out"
        stockColor = "red";
    }

    if (!products[i].price) {
        pricing = "Pricing Unavailable"
        
    }; 


    html += `<h1>${name}</h1>
                <p>Cost: ${pricing}</p>
                <p>Stock: <span style="color: ${stockColor}">${stock}</span></p>
`    
}

productCard.innerHTML = html;

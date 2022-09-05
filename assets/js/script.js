function fetchProduct(){
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(products => products.forEach(product => renderProduct(product)))
}

function renderProduct(product){
    let item = document.createElement("div")
    item.className = "responsive"
    item.innerHTML = `
        <div class="responsive-gallery">
            <a href="#">
                <img src="${product.image}" alt="" width="600px" height="400px">
            </a>
            <div class="desc">
                <p>$ ${product.price}</p>
                <button>Add to Cart</button>
            </div>
        </div>
    `

    document.querySelector(".container").appendChild(item)
}

fetchProduct()
//fonctionalité Ajout au panier
let iconCart = document.querySelector('.icon-cart');
let closeCart = document.querySelector('.close-btn');
let listProductHTML =document.querySelector('.listProduct');
let listCartHTML = document.querySelector('.listCart');
let iconCartSpan = document.querySelector('.icon-cart span');
let listProduct = [];
let carts = [];

iconCart.addEventListener('click', () => {
  body.classList.toggle('showCart');
});
closeCart.addEventListener('click', () => {
  body.classList.toggle('showCart');
});

const addDataToHTML = () => {
    listProductHTML.innerHTML = '';
    if(listProduct.length > 0){
        listProduct.forEach(product => {
            let newProduct = document.createElement('div');
            newProduct.classList.add('items');
            newProduct.innerHTML = `
            <img src="${product.image}" alt="">
            <h3>${product.name}</h3>
            <div class="price">${product.price}€</div>
            <button class="addCart">AJOUTER</button>`;

            listProductHTML.appendChild(newProduct);
        })
    }
}
listProductHTML.addEventListener('click', (event) => {
    let positionClick = event.target;
    if(positionClick.classList.contains('addCart')){
        let product_id = positionClick.parentElement.dataset.id;
        addToCart('product_id');
    }
})

const addToCart = (product_id) => {
    let positionThisProductCart = carts.findIndex((value) => value.product_id);
    if(carts.length <= 0){
        carts = [{
            product_id: product_id,
            quantity: 1
        }]
    }else if(positionThisProductCart < 0){
        carts.push({
            product_id: product_id,
            quantity: 1
        })
    }else{
        carts[positionThisProductCart].quantity = carts[positionThisProductCart].quantity + 1;
    }
    addCartToHTML();
}

const addCartToHTML = () =>{
    listCartHTML.innerHTML = '';
    let totalQuantity = 0;
    if(carts.length > 0){
        carts.forEach(cart => {
            totalQuantity = totalQuantity + cart.quantity;
        let newCart = document.createElement('div');
        newCart.classList.add('items');
        let positionProduct = listProduct.findIndex((value) => value.id = cart.product_id);
        let info = listProduct[positionProduct];
        newCart.innerHTML = `
        <div class="image-cart">
                                <img src="${info.image}" alt="">
                            </div>
                            <div class="name">
                                ${info.name}
                            </div>
                            <div class="totalPrice">
                            ${info.price * cart.quantity}€
                            </div>
                            <div class="quantity">
                                <span class="minus">&lt;</span>
                                <span>${cart.quantity}</span>
                                <span class="plus">&gt;</span>
                            </div>`;

        listCartHTML.appendChild(newCart);
        })
        
    }
    iconCartSpan.innerText = totalQuantity;
}

const initApp = () => { 
    // data from json
    fetch('products.json')
    .then(response => response.json())
    .then(data => {
        listProduct = data;
        addDataToHTML();
    })
}
initApp();
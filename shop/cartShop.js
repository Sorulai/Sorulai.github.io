let productBtn = document.getElementsByClassName('product-element__btn')
let cartProductList = document.getElementById('cart-container__list')
let cartHeader = document.getElementById('header-cart__main')
let cartCount = document.querySelector('.header-counter')
let fullPrice = document.querySelector('.fullprice')
let price = 0


function generateCartProduct(img, name, price, id) {
    return `
    <li class="cart-container__el" data-id="${id}">
                    <img class="cart-el__img" src="${img}" alt="">
                    <div class="cart-el__text">
                        <h3 class="cart-el__title">${name}</h3>
                        <span class="cart-el__price">${price} USD</span>                            
                    </div>
                    <button class="cart-product__delete"></button>                         
                </li>
    `

}

function plusPrice(currentPrice) {
    return price += currentPrice

}

function minusPrice(currentPrice) {
    return price -= currentPrice

}

function printFullPrice() {
    fullPrice.textContent = `${price} USD`

}

function printCount() {
    cartCount.textContent = cartProductList.getElementsByClassName('cart-container__el').length

}

for (let i of productBtn) {
    i.addEventListener('click', function (e) {
        let self = e.currentTarget
        let parent = self.closest('.product-element')
        let id = parent.dataset.id
        let name = parent.querySelector('.product-element__name').innerText
        let img = parent.querySelector('.product-element__img').getAttribute('src')
        let priceString = parseInt(parent.querySelector('.product-element__price').innerText.replace(/ USD/i, ''))

        plusPrice(priceString)
        printFullPrice()
        cartProductList.insertAdjacentHTML('afterbegin', generateCartProduct(img, name, priceString, id))
        printCount()
        self.className = 'product-element__btn_active'
        self.textContent = 'Added'
        self.disabled = true
        e.stopPropagation()
    })
}

function deleteProducts(prodParent) {
    let id = prodParent.dataset.id
    console.log(document.querySelector(`.product-element[data-id="${id}"]`).querySelector('.product-element__btn_active'))
    let btn = document.querySelector(`.product-element[data-id="${id}"]`).querySelector('.product-element__btn_active')
    btn.disabled = false

    let curPrice = parseInt(prodParent.querySelector('.cart-el__price').innerText.replace(/ USD/i, ''))
    console.log(curPrice)

    minusPrice(curPrice)
    printFullPrice()
    prodParent.remove()
    printCount()

    btn.className = 'product-element__btn'
    btn.textContent = 'Add to cart'
    btn.disabled = false


}

cartProductList.addEventListener('click', function (e) {
    if (e.target.classList.contains('cart-product__delete')) {
        deleteProducts(e.target.closest('.cart-container__el'))

    }

})



/*
2 Сделать генерацию корзины динамической: верстка корзины не должна находиться в HTML-структуре.
Там должен быть только div, в который будет вставляться корзина, сгенерированная на базе JS:
Пустая корзина должна выводить строку «Корзина пуста»;
Наполненная должна выводить «В корзине: n товаров на сумму m рублей».

4 * Сделать так, чтобы товары в каталоге выводились при помощи JS:
Создать массив товаров (сущность Product);
При загрузке страницы на базе данного массива генерировать вывод из него.
HTML-код должен содержать только div id=”catalog” без вложенного кода. Весь вид каталога генерируется JS.
 */

const products = {
    rootProducts: document.getElementById('catalog'),
    render: function () {
        let htmlCatalog = ''
        for (let i of CATALOG) {
            htmlCatalog += `
            <li class="product-element" data-id="${i.id}">
            <span class="product-element__name">${i.name}</span>
            <img class="product-element__img" src="${i.img}" alt="Sneakers">
            <span class="product-element__price">${i.price.toLocaleString()} USD</span>
            <button class="product-element__btn">Add to cart</button> 
           
            </li>
            `
        }
        this.rootProducts.innerHTML = `
        <ul class="product-container">
        ${htmlCatalog}
        </ul>
        `
    }
}

const header = {
    rootHeader: document.getElementById('header'),
    openCart: function (event) {
        cart.rootCart.style.display = 'block'
    },
    render: function () {
        this.rootHeader.innerHTML = `
        <div class="header-container">
            <img class="header-icon" src="img/sneakers.svg" alt="sn">
            <ul class="header-menu">
                <li class="header-menu__element">For man</li>
                <li class="header-menu__element header-menu__element-active">For women</li>
                <li class="header-menu__element">For kids</li>
            </ul>
            <div id="header-cart__main">
                <div id="header-cart">Cart</div>
                <span class="header-counter">0</span>
            </div>
        </div>
        `
        let el = document.getElementById('header-cart__main')
        el.addEventListener('click', this.openCart)


    }
}

const cart = {
    rootCart: document.getElementById('cart'),
    closeCart: function () {
        this.rootCart.style.display = 'none'

    },
    render: function () {
        this.rootCart.innerHTML = `
            <div class="cart-container">
            <div class="cart__close" onclick="cart.closeCart()"></div>
            <h4 id="cart-title">Your order ⬆</h4>
            <ul id="cart-container__list" class="display_block_first"></ul>
            <div class="cart-container__bottom">
                <div class="cart-container__fullprice">
                    <span>Total</span>
                    <span class="fullprice"></span>
                </div>
                 <form action="" id="form">
                <fieldset id="address_field">
                <legend>Delivery address ⬇</legend>
                <label for="town" class="display_none">City
                    <input type="text" id="town">
                </label>
                <label for="address" class="display_none">Address
                 <input type="text" id="address">
                </label>
               
            </fieldset>
             <fieldset id="comment-filed">
                <legend>Your comment ⬇</legend>
                <textarea name="" class="display_none" cols="30" rows="10"></textarea>
            </fieldset>
           
            </form>
<!--                <button id="checkout" class="cart-container__btn product-element__btn">Checkout</button>-->
            </div>
            </div>
        `



    }
}


products.render()
header.render()
cart.render()







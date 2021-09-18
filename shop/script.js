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
            <li class="product-element">
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
    rootHeader:document.getElementById('header'),

    openCart: function(){
        cart.render()
    },
    render:function () {
        this.rootHeader.innerHTML = `
        <div class="header-container">
            <img class="header-icon" src="img/sneakers.svg" alt="sn">
            <ul class="header-menu">
                <li class="header-menu__element">For man</li>
                <li class="header-menu__element header-menu__element-active">For women</li>
                <li class="header-menu__element">For kids</li>
            </ul>
            <div class="header-counter" onclick="header.openCart()">0</div>
        </div>
        `
    }
}

const cart ={
    rootCart:document.getElementById('cart'),
    closeCart:function () {
        this.rootCart.innerHTML = ''

    },
    render:function () {
        this.rootCart.innerHTML = `
            <div class="cart-container">
            <div class="cart__close" onclick="cart.closeCart()"></div>
            Корзина пуста
            </div>
        `

    }
}
products.render()
header.render()

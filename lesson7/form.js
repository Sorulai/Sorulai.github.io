let fieldAddress = document.getElementById('address_field')
let labelAddress = fieldAddress.querySelectorAll('label')
let fieldComment = document.getElementById('comment-filed')
let labelComment = fieldComment.querySelector('textarea')
let legendAddress = fieldAddress.querySelector('legend')
let legendComment = fieldComment.querySelector('legend')
let titleOrder = document.getElementById('cart-title')


fieldAddress.addEventListener('click', function () {
    for (let i of labelAddress) {
        i.classList.toggle('display_block')
    }
    console.log(labelAddress[0].classList)
    if (labelAddress[0].classList.length === 2) {
        legendAddress.textContent = 'Delivery address ⬆ '

    } else {
        legendAddress.textContent = 'Delivery address ⬇'
    }

})

fieldComment.addEventListener('click', function () {
    labelComment.classList.toggle('display_block')
    console.log(labelComment.classList.length)
    console.log(legendComment)
    if (labelComment.classList.length === 2) {
        legendComment.textContent = 'Your comment ⬆'
    } else {
        legendComment.textContent = 'Your comment ⬇'
    }
})

titleOrder.addEventListener('click',function () {
    cartProductList.classList.toggle('display_none_second')

    if(cartProductList.classList.length === 2){
        titleOrder.textContent = 'Your order ⬇'
    } else {
         titleOrder.textContent = 'Your order ⬆'
    }

})
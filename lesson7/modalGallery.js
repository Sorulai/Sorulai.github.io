const modal = document.getElementById('modal-gallery')
const cardEl = document.querySelectorAll('.product-element')


function generateModal(name, img, img1, img2) {
    return `
        <div class="gallery-container">
             <div class="gallery-close"></div>
           <h3 class="gallery-title">${name}</h3>
             <div class="gallery">
                 <div class="gallery-content">
                     <img  class="img-1" src="${img}" alt="">
                 </div>
                 <div class="gallery-footer">
                     <img src="${img}" alt="" data-id="1">
                     <img src="${img1}" alt="" data-id="2">
                    <img src="${img2}" alt="" data-id="3">
                </div>
            </div>
         </div>
    `

}


function closeModal(e) {
    e.target.parentNode.remove()
    e.stopPropagation()
}

function openImage(e) {
     let img = document.querySelector('.img-1')
     let imgSmall = e.currentTarget.getAttribute('src')
     img.setAttribute('src', imgSmall)
     e.stopPropagation()

}



for (let i of cardEl){
    i.addEventListener('click', function (e) {
        let name = i.querySelector('.product-element__name').textContent
        let img = i.querySelector('.product-element__img').getAttribute('src')
        let id = i.dataset.id
        let img1
        let img2
        for (let k of CATALOG) {
            if (k.id === id) {
                img1 = k.imgArr[0]
                img2 = k.imgArr[1]
            }
        }
        modal.insertAdjacentHTML('beforeend', generateModal(name, img, img1, img2))
        modal.querySelector('.gallery-close').addEventListener('click', closeModal)
        let images = modal.querySelectorAll('.gallery-footer > img')
        for (let j of images){
            j.addEventListener('click', openImage)

        }



    })
}
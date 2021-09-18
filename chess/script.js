/*
1 Создать функцию, генерирующую шахматную доску.
Можно использовать любые html-теги.
Доска должна быть верно разлинована на черные и белые ячейки.
Строки должны нумероваться числами от 1 до 8, столбцы — латинскими буквами A, B, C, D, E, F, G, H.

3 * Заполнить созданную таблицу буквами, отвечающими за шахматную фигуру, например К – король, Ф – ферзь и т.п.,
 причем все фигуры должны стоять на своих местах и быть соответственно черными и белыми.
 */


const chessDeck = {
    chess: document.createElement('table'),
    spt: document.getElementsByTagName('script'),
    trChess: document.createElement('tr'),
    thChess: document.createElement('th'),
    tdChess: document.createElement('td'),
    arrTr: document.getElementsByTagName('tr'),

    render: function () {
        this.createRow()
        this.createColumns()
        this.createClassForRows()
        this.addInscription()
        this.figures()

    },
    createRow: function () {
        for (let i = 0; i < 10; i++) {
            this.trChess.id = `${i + 1}`
            this.chess.appendChild(this.trChess.cloneNode(true))

        }
        document.body.insertBefore(this.chess, (this.spt)[0])


    },
    createColumns: function () {

        for (let i of this.arrTr) {
            if (i.attributes.id.nodeValue === '1' || i.attributes.id.nodeValue === '10') {
                for (let k = 0; k < 10; k++) {
                    i.appendChild(this.thChess.cloneNode(true))
                }
            } else {
                for (let k = 0; k < 10; k++) {
                    if (k === 0 || k === 9) {
                        i.appendChild(this.thChess.cloneNode(true))
                    } else {
                        i.appendChild(this.tdChess.cloneNode(true))
                    }

                }
            }

        }

    },
    createClassForRows: function () {

        for (let i of this.arrTr) {
            if (i.attributes.id.nodeValue === '1' || i.attributes.id.nodeValue === '10') {
                continue
            } else {
                let count = 1
                let lnt = i.children.length
                if (Number(i.attributes.id.nodeValue) % 2 === 0) {
                    for (let j of i.children) {
                        if (j === i.children[0] || j === i.children[lnt - 1]) {
                            continue
                        } else if (count % 2 === 0) {
                            j.className = 'white'
                        } else {
                            j.className = 'black'
                        }
                        count++
                    }

                } else {

                    for (let j of i.children) {
                        if (j === i.children[0] || j === i.children[lnt - 1]) {
                            continue
                        } else if (count % 2 === 0) {
                            j.className = 'black'
                        } else {
                            j.className = 'white'
                        }
                        count++
                    }
                }

            }
        }


    },
    addInscription: function () {
        let arrChar = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
        let num = 8
        for (let i of this.arrTr) {
            let lnt = i.children.length
            if (i.attributes.id.nodeValue === '1' || i.attributes.id.nodeValue === '10') {
                let count = 0
                for (let j of i.children) {
                    if (j === i.children[0] || j === i.children[lnt - 1] || count > arrChar.length - 1) {
                        continue
                    } else {
                        j.innerHTML = `<strong>${arrChar[count]}</strong>`
                        count++
                    }
                }

            } else {
                for (let j of i.children) {
                    if (j === i.children[0] || j === i.children[lnt - 1]) {
                        j.innerHTML = `<strong>${num}</strong>`
                    }
                }
                num -= 1
            }
        }

    },
    figures: function () {
        let figArr = ['Л', 'К', 'С', 'Ф', 'К', 'С', 'К', 'Л']
        for (let i of this.arrTr) {
            let lnt = i.children.length
            if (i.attributes.id.nodeValue === '3') {
                for (let j of i.children) {
                    if (j === i.children[0] || j === i.children[lnt - 1]) {
                        continue
                    } else {
                        j.innerHTML = '<span>П</span>'
                        j.style.color = 'black'
                        j.style.textAlign = 'center'
                        j.style.fontSize = '36px'
                        j.style.fontWeight = 'bold'
                        j.style.textShadow = 'white 2px 2px 0, white -2px -2px 0, white -2px 2px 0,white 2px -2px 0'

                    }
                }

            } else if (i.attributes.id.nodeValue === '8') {
                for (let j of i.children) {
                    if (j === i.children[0] || j === i.children[lnt - 1]) {
                        continue
                    } else {
                        j.innerHTML = '<span>П</span>'
                        j.style.color = 'white'
                        j.style.textAlign = 'center'
                        j.style.fontSize = '36px'
                        j.style.fontWeight = 'bold'
                        j.style.textShadow = 'black 2px 2px 0, black -2px -2px 0, black -2px 2px 0,black 2px -2px 0'

                    }
                }

            } else if (i.attributes.id.nodeValue === '9') {
                let count = 0
                for (let j of i.children) {
                    if (j === i.children[0] || j === i.children[lnt - 1]) {
                        continue
                    } else {
                        j.innerHTML = `<span>${figArr[count]}</span>`
                        j.style.color = 'white'
                        j.style.textAlign = 'center'
                        j.style.fontSize = '36px'
                        j.style.fontWeight = 'bold'
                        j.style.textShadow = 'black 2px 2px 0, black -2px -2px 0, black -2px 2px 0,black 2px -2px 0'
                        count++

                    }
                }
            } else if (i.attributes.id.nodeValue === '2') {
                let numFig = 0
                for (let j of i.children) {
                    if (j === i.children[0] || j === i.children[lnt - 1]) {
                        continue
                    } else {
                        j.innerHTML = `<span>${figArr[numFig]}</span>`
                        j.style.color = 'black'
                        j.style.textAlign = 'center'
                        j.style.fontSize = '36px'
                        j.style.fontWeight = 'bold'
                        j.style.textShadow = 'white 2px 2px 0, white -2px -2px 0, white -2px 2px 0,white 2px -2px 0'
                        numFig++

                    }
                }

            }
        }

    }


}

chessDeck.render()


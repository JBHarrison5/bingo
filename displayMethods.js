export const displayRows = (rows, mainDiv, title, imageURL) => {
    let sheet = document.createElement('div')
    let img1 = document.createElement('img')
    let img2 = document.createElement('img')
    let headingDiv = document.createElement('div')
    let headingText = document.createElement('h3')
    img1.src = imageURL
    img2.src = imageURL
    sheet.classList.add('sheet')
    sheet.classList.add('html2pdf__page-break')
    headingDiv.classList.add('sheetHeading')
    headingText.innerText = title
    headingDiv.appendChild(img1)
    headingDiv.appendChild(headingText)
    headingDiv.appendChild(img2)
    sheet.appendChild(headingDiv)
    for (let i = 0; i < 18; i += 3) {
        let gameTable = document.createElement('table')
        for (let j = i; j < i+3; j++) {
            let displayRow = document.createElement('tr')
            for (let k = 0; k < 9; k++) {
                let tableData = document.createElement('td')
                if (rows[j][k] === 0){
                    tableData.classList.add('nonNum')
                }
                else {
                    tableData.innerText = rows[j][k]
                }
                displayRow.appendChild(tableData)
            }
            gameTable.appendChild(displayRow)
        }
        sheet.appendChild(gameTable)
    }
    mainDiv.appendChild(sheet)
}

export const clearCardsDiv = (cardsDiv) => {
    cardsDiv.innerHTML = '';
}
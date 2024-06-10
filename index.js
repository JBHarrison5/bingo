import {generateNums, generateRandomNums, makeRows}  from "./numericalMethods.js";
import {displayRows, clearCardsDiv} from "./displayMethods.js";
import {downloadPDF} from "./utilityMethods.js";
import {validateTitle} from "./validationMethods.js";

let cardsDiv = document.querySelector('.cards')
let generateCardsBtn = document.querySelector('#generateCardsButton')
let imageInput = document.querySelector('#image')
const pdfDownloadButton = document.getElementById('download-button');

let nums = []
let imageURL = 'bingo.png'

//create and display cards
generateCardsBtn.addEventListener('click', () => {
    let title = document.querySelector('#title').value
    if (validateTitle(title)) {
        clearCardsDiv(cardsDiv)
        let numberOfSheets = document.querySelector('#number').value
        for (let i = 0; i < numberOfSheets; i++) {
            let numsToPick = [1,2,3,4,5,6,7]
            nums = generateNums()
            generateRandomNums(nums)
            let rows = makeRows(numsToPick, nums)
            displayRows(rows, cardsDiv, title, imageURL)
    }
    }
    else {
        let titleError = document.querySelector('#errorMessage')
        titleError.classList.remove('hidden')
    }
})

imageInput.addEventListener('change', () => {
    const reader = new FileReader();
    reader.readAsDataURL(imageInput.files[0]);
    reader.addEventListener('load', () => {
        imageURL = reader.result
    })
})

pdfDownloadButton.addEventListener('click', downloadPDF)
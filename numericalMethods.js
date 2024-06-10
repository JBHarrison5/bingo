export const generateNums = () => {
    return [[1,2,3,4,5,6,7,8,9], [10,11,12,13,14,15,16,17,18,19], [20,21,22,23,24,25,26,27,28,29],
        [30,31,32,33,34,35,36,37,38,39], [40,41,42,43,44,45,46,47,48,49], [50,51,52,53,54,55,56,57,58,59],
        [60,61,62,63,64,65,66,67,68,69], [70,71,72,73,74,75,76,77,78,79], [80,81,82,83,84,85,86,87,88,89,90]]
}

export const generateRandomNums = (numbersArray) => {
    for (let i = 0; i < 9; i++) {
        shuffle(numbersArray[i])
    }
}

const shuffle = (array) => {
    let currentIndex = array.length;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

        // Pick a remaining element...
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }
    return array
}

const findZero = (value) => {
    return value === 0
}

function removeItemOnce(arr, value) {
    let index = arr.indexOf(value);
    if (index > -1) {
        arr.splice(index, 1);
    }
    return arr;
}

export const makeRows = (numsToPick, nums) => {
    let rows = [[0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0]]
    //distribute row 1 and row 8
    let zeroToSeventeen = shuffle([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17])
    for (let i = 0; i < 9; i++) {
        rows[zeroToSeventeen[i]][0] = nums[0][i]
    }
    shuffle(zeroToSeventeen)
    for (let j = 0; j < 11; j++){
        rows[zeroToSeventeen[j]][8] = nums[8][j]
    }
    shuffle(numsToPick)
    for (let row of rows) {
        while (row.filter(findZero).length > 4) {
            let randCol = numsToPick[0]
            if (row[randCol] === 0 && row.filter(findZero).length > 4) {
                row[randCol] = nums[randCol].pop()
                numsToPick = removeItemOnce(numsToPick, randCol)
                numsToPick.push(randCol)
            }
        }
    }
    return rows
}
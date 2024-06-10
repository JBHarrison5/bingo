export const validateTitle = (input) => {
    if (input.split(' ').length <= 2) {
        for (let i = 0; i < input.split(' ').length; i++){
            if (input.split(' ')[i].length > 12) {
                return false
            }
        }
        return true
    }
    else {
        return false
    }
}



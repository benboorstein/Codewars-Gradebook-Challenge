// Complete the function so that it finds the mean of the three scores passed to it and returns the letter value associated with that grade.

// Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.


let score1 = 0
let score2 = 0
let score3 = 0

function scores(score1, score2, score3) {

    let scoresMean = (score1 + score2 + score3) / 3

    if (score1 >= 90 && score1 <= 100) { 
        return 'A'
    } else if (score1 >= 80 && score1 < 90) {
        return 'B'
    } else if (score1 >= 70 && score1 < 80) {
        return 'C'
    } else if (score1 >= 60 && score1 < 70) {
        return 'D'
    } else if (score1 >= 0 && score1 < 60) { // QQQ: If above there were a condition for > 100, then this line could just be "else" instead of "else if", right?
        return 'F'
    }

    if (score2 >= 90 && score2 <= 100) { 
        return 'A'
    } else if (score2 >= 80 && score2 < 90) {
        return 'B'
    } else if (score2 >= 70 && score2 < 80) {
        return 'C'
    } else if (score2 >= 60 && score2 < 70) {
        return 'D'
    } else if (score2 >= 0 && score2 < 60) {
        return 'F'
    }

    if (score3 >= 90 && score3 <= 100) { 
        return 'A'
    } else if (score3 >= 80 && score3 < 90) {
        return 'B'
    } else if (score3 >= 70 && score3 < 80) {
        return 'C'
    } else if (score3 >= 60 && score3 < 70) {
        return 'D'
    } else if (score3 >= 0 && score3 < 60) {
        return 'F'
    }

    return scoresMean
}
scores(70, 40, 90)
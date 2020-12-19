// Complete the function so that it finds the mean of the three scores passed to it and returns the letter value associated with that grade.

// Tested values are all between 0 and 100. There is no need to check for negative values or values greater than 100.


function avgGrade(score1, score2, score3) {

    let scoresMean = (score1 + score2 + score3) / 3
    let letterGrade

    if (scoresMean >= 90 && scoresMean <= 100) { 
        letterGrade = 'A'
    } else if (scoresMean >= 80 && scoresMean < 90) {
        letterGrade = 'B'
    } else if (scoresMean >= 70 && scoresMean < 80) {
        letterGrade = 'C'
    } else if (scoresMean >= 60 && scoresMean < 70) {
        letterGrade = 'D'
    } else if (scoresMean >= 0 && scoresMean < 60) {
        letterGrade = 'F'
    }

    return letterGrade
}
avgGrade(63, 81, 97)






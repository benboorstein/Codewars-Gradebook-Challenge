// Complete the function so that it finds the mean of the three scores passed to it and returns the letter value associated with that grade.

// Tested values are all between 0 and 100. There is no need to check for negative values or values greater than 100.


// Sixth version (the final version, an ideal version, and a great example to learn from):

let listOfScores = [63, 81, 97, 20, 45, 68, 94, 91, 99]

// This function calculates the average score (i.e., average numerical grade)
function calcScoresMean(list) {
    return list.reduce((a, c) => a + c, 0) / list.length
}

// This function gives that average score (i.e., average numerical grade) a letter grade
function avgGrade(num) {

    let letterGrade

    if (num >= 90 && num <= 100) {
        letterGrade = 'A'
    } else if (num >= 80 && num < 90) {
        letterGrade = 'B'
    } else if (num >= 70 && num < 80) {
        letterGrade = 'C'
    } else if (num >= 60 && num < 70) {
        letterGrade = 'D'
    } else if (num >= 0 && num < 60) {
        letterGrade = 'F'
    } // Just FYI: ALWAYS include the "else" part in order to "leave no holes". But for the purposes of this exercise it's not necessary.

    return letterGrade
}
console.log(avgGrade(calcScoresMean(listOfScores))) // C


// // Fifth version:

// function avgGrade(listOfScores) {

//     let scoresMean = listOfScores.reduce((a, c) => a + c, 0) / listOfScores.length
//     // "a" stands for "accumulator", "c" stands for "current item" (e.g., 63 in the array)
//     // In "5 + 8 + 3 = 16", 5, 8, and 3 are each a "current item" and 16 is the "accumulator"
//     // The "0" (which is the reduce method's second argument) is the number (not index) at which we want the accumulator to start. If we wanted it to start on the first index of the array (e.g., 63), then we wouldn't have to specify a value here
//     // FYI: "array.length - 1" is when you're accessing the final item/index of an array
//     // "array.length" is used when you're iterating through an array's items/indexes 
//     // And here is what the line above looks like with a regular anonymous function instead of an arrow function:
//     // let scoresMean = listOfScores.reduce(function(a, c) {return a + c}, 0) / listOfScores.length

//     let letterGrade

//     if (scoresMean >= 90 && scoresMean <= 100) {
//         letterGrade = 'A'
//     } else if (scoresMean >= 80 && scoresMean < 90) {
//         letterGrade = 'B'
//     } else if (scoresMean >= 70 && scoresMean < 80) {
//         letterGrade = 'C'
//     } else if (scoresMean >= 60 && scoresMean < 70) {
//         letterGrade = 'D'
//     } else if (scoresMean >= 0 && scoresMean < 60) {
//         letterGrade = 'F'
//     } 

//     return letterGrade
// }
// console.log(avgGrade([63, 81, 97, 20, 45, 68, 94, 91, 99])) // C


// // Fourth version:

// // const scores = [63, 81, 97, 20, 45, 68, 94, 91, 99] // This line has been deleted for two reasons:
// // 1) To test whether this program works when run many times, we have to pass an array of the numbers *themselves* (as opposed to an array called "scores" or anything else) in as the function call's argument because only then can we call it many times in a row with different numbers (as shown below where the multiple function calls are).
// // 2) In a good program, you want to be able to pass the numbers themselves in as the function call's argument.

// function avgGrade(listOfScores) {

//     let scoreSum = 0 // this line has to be inside the function so that scoreSum does in fact start back at 0 the second (and third and fourth and fifth and...) time calling the function. Having this line outside of the function works if only calling the function once. But it doesn't work after the first time.

//     for (let i = 0; i < listOfScores.length; i++) { // FYI: Ideally don't use for loops for iterating through arrays. The much cleaner alternative is shown in the "Fifth version" above.
//         scoreSum += listOfScores[i]
//     }

//     let scoresMean = scoreSum / listOfScores.length

//     let letterGrade // FYI: When declaring a variable but *not defining it*, the value it stores is "undefined".

//     if (scoresMean >= 90 && scoresMean <= 100) { 
//         letterGrade = 'A'
//     } else if (scoresMean >= 80 && scoresMean < 90) {
//         letterGrade = 'B'
//     } else if (scoresMean >= 70 && scoresMean < 80) {
//         letterGrade = 'C'
//     } else if (scoresMean >= 60 && scoresMean < 70) {
//         letterGrade = 'D'
//     } else if (scoresMean >= 0 && scoresMean < 60) {
//         letterGrade = 'F'
//     }

//     return letterGrade
// }
// console.log(avgGrade([63, 81, 97, 20, 45, 68, 94, 91, 99])) // C
// console.log(avgGrade([81, 97, 29])) // D
// console.log(avgGrade([63, 94, 91, 99])) // B
// console.log(avgGrade([94, 81])) // B


// // Third version:

// const scores = [63, 81, 97, 20, 45, 68, 94, 91, 99]
// let scoreSum = 0

// function avgGrade(listOfScores) {

//     for (let i = 0; i < listOfScores.length; i++) {
//         scoreSum += listOfScores[i]
//     }

//     let scoresMean = scoreSum / listOfScores.length

//     let letterGrade

//     if (scoresMean >= 90 && scoresMean <= 100) { 
//         letterGrade = 'A'
//     } else if (scoresMean >= 80 && scoresMean < 90) {
//         letterGrade = 'B'
//     } else if (scoresMean >= 70 && scoresMean < 80) {
//         letterGrade = 'C'
//     } else if (scoresMean >= 60 && scoresMean < 70) {
//         letterGrade = 'D'
//     } else if (scoresMean >= 0 && scoresMean < 60) {
//         letterGrade = 'F'
//     }

//     return letterGrade
// }
// console.log(avgGrade(scores)) // C


// // Second version:

// const scores = [63, 81, 97] 

// function avgGrade(listOfScores) {

//     let scoresMean = (listOfScores[0] + listOfScores[1] + listOfScores[2]) / 3
//     let letterGrade

//     if (scoresMean >= 90 && scoresMean <= 100) { 
//         letterGrade = 'A'
//     } else if (scoresMean >= 80 && scoresMean < 90) {
//         letterGrade = 'B'
//     } else if (scoresMean >= 70 && scoresMean < 80) {
//         letterGrade = 'C'
//     } else if (scoresMean >= 60 && scoresMean < 70) {
//         letterGrade = 'D'
//     } else if (scoresMean >= 0 && scoresMean < 60) {
//         letterGrade = 'F'
//     }

//     return letterGrade
// }
// console.log(avgGrade(scores)) // B


// // First version:

// function avgGrade(score1, score2, score3) {

//     let scoresMean = (score1 + score2 + score3) / 3
//     let letterGrade

//     if (scoresMean >= 90 && scoresMean <= 100) { 
//         letterGrade = 'A'
//     } else if (scoresMean >= 80 && scoresMean < 90) {
//         letterGrade = 'B'
//     } else if (scoresMean >= 70 && scoresMean < 80) {
//         letterGrade = 'C'
//     } else if (scoresMean >= 60 && scoresMean < 70) {
//         letterGrade = 'D'
//     } else if (scoresMean >= 0 && scoresMean < 60) {
//         letterGrade = 'F'
//     }

//     return letterGrade
// }
// console.log(avgGrade(63, 81, 97)) // B
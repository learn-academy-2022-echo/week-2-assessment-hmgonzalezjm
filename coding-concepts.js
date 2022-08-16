// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

// const cohort = "Echo 2022"
// console.log(cohort.split(""))

// a) Your answer: (9) ['E', 'c', 'h', 'o', ' ', '2', '0', '2', '2']
// b) Verify and explain: The ".split" method divides a string into a list of ordered substrings that return back as an array.


// // --------------------2) What will this log?

// const greeter = (name) => {
//   `Hello, ${name}!`
// }
// console.log(greeter("LEARN Student"))

// // a) Your answer: I believe the output will return back as undefined
// // b) Verify and explain: The above code didn't work because line 20 is missing a "return" statement


// // --------------------3) What will this log?

// const multipliedByTwo = [4, 5, 6, 7, 8].map(number => number * 2)
// console.log(multipliedByTwo)

// // a) Your answer: (5) [8, 10, 12, 14, 16]
// // b) Verify and explain: The ".map" method was used to create a new array by calling a function for each element inside of the array. In this case, each element inside of the array was multiplied by 2.


// // --------------------4) What will this log?

// const onlyOdds = [11, 12, 13, 14, 15].filter(number => number % 2 !== 0)
// console.log(onlyOdds)

// // a) Your answer: (3) [11, 13, 15]
// // b) Verify and explain: The ".filter" method  was used to pass through only odd numbers in the array using a function. A modulo was used to figure out which numbers are even by dividing them and determining which element has a remainder of "0". Those elements were selected to be filtered out of the array.


// // --------------------5) What will this log?

// const myCodingSkills = {
//   languages: ["JavaScript", "Ruby"],
//   frameworks: ["React", "Ruby on Rails"],
//   databases: "PostgreSQL",
//   versionControl: "GitHub"
// }
// console.log(myCodingSkills.languages[0])

// // a) Your answer: I believe "Javascript" will be the resulting output.
// // b) Verify and explain: The console log entry is outputting the first indexed element inside of the array property called ".languages".


// // --------------------STRETCH: What will this log?

class Learn {
  constructor(name){
    this.student = name,
    this.cohort = "Echo",
    this.year = 2022
  }
}
const learnStudent = new Learn("George")
console.log(learnStudent)

// // a) Your answer: Learn {student: 'George', cohort: 'Echo', year: 2022}
// // b) Verify and explain: A function was created using "new" that calls a new instance of a class which references the objects belonging to that class. In the case, the console log is outputting "this.student", "this.cohort", and "this.year" when referenced.

'use strict'
const prompt = require('prompt-sync')();
start()
function start (){
let person = {};
const firstName = prompt('Enter your name :');
const lastName = prompt('Enter your lastname :');
// const age = parseInt(prompt('Enter your age :'));
const dateOfBirth = parseInt(prompt('Enter your date of birth :'));
// let ageAsNumber = parseInt(age)
let date = new Date
let year = date.getFullYear()
let month = date.getMonth()
let firstNameWordCounter = firstName.length
let lastNameWordCounter = lastName.length



// if (isNaN(age)) {
//     console.log("age should be a number");
//     return
// }

if (isNaN(dateOfBirth)) {
    console.log("enter only numbers");
    return
}

let calculatedAge = year - dateOfBirth
console.log(calculatedAge);


// for(let i = 0; i < firstName.length; i++){
//     let splittedName = firstName[i]
//     console.log(splittedName)
// }
// for(let i = 0; i < lastName.length; i++){
//     let splittedLastName = lastName[i]
//     console.log(splittedLastName)
// }

person = {
    name: firstName,
    lastName: lastName,
    age: calculatedAge
}

// console.log("in your name there's " + firstNameWordCounter + ' words');
// console.log(firstName.toUpperCase() + ' => ' + firstNameWordCounter);

// console.log("in your lastname there's " + lastNameWordCounter + ' words');
// console.log(lastName.toUpperCase() + ' => ' + lastNameWordCounter)
console.log("your full name is : " + firstName + ' ' + lastName)
console.log('age is :' + calculatedAge)
console.log('hello ', person.name);


}
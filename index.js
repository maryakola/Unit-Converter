/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound 
*/
let num = 0
const input = document.getElementById("type")
const convertButton = document.getElementById("convert-btn")
const resetButton = document.getElementById("reset-btn")
const length = document.getElementById("length")
const volume = document.getElementById("volume")
const mass = document.getElementById("mass")

function multiply(numberInput, multiplicand){
    let result = (numberInput* multiplicand).toFixed(2)
    return result
}

function division(numberInput, divisor){
    let result = (numberInput / divisor).toFixed(2)
    return result
}

function calcLength(){
    const metersToFeet = multiply(input.value, 3.281)
    const feetToMeters = division(input.value, 3.281)
    return `
    ${input.value} meters = ${metersToFeet} feet |
    ${input.value} feet = ${feetToMeters} meters`
}

function calcVolume(){
    const litersToGallons = multiply(input.value, 0.264)
    const gallonsToLiters = division(input.value,0.264)
    return `
    ${input.value} liters = ${litersToGallons} gallons |
    ${input.value} gallons = ${gallonsToLiters} liters`
}

function calcMass(){
    const kilogramsToPounds = multiply(input.value, 2.204)
    const poundsToKilograms = division(input.value, 2.204)
    return `
    ${input.value} kilograms = ${kilogramsToPounds} pounds |
    ${input.value} pounds = ${poundsToKilograms} kilograms`
}


convertButton.addEventListener("click", function(){
    length.innerHTML = calcLength()
    volume.innerHTML = calcVolume()
    mass.innerHTML = calcMass()
    event.preventDefault()
})

let add = (num1, num2) =>{
return num1 + num2
}

console.log(add)
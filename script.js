//form with 5 inputs (email, country, postal code, password, password confirmation), live inline validation, highlight field in red 
// when its invalid and show error mesage to guide user

const form = document.querySelector('#form')
const emailInput = form.elements.email
const countryInput  = form.elements.country
const postalCodeInput = form.elements.postalCode
const passwordInput = form.elements.password
const confirmInput = form.elements.confirmPassword

console.log(form)
console.log(emailInput,countryInput,postalCodeInput,passwordInput,confirmInput)


const emailError = emailInput.nextElementSibling
const countryError = countryInput.nextElementSibling
const postalCodeError=postalCodeInput.nextElementSibling
const passwordError = passwordInput.nextElementSibling
const confirmError = confirmInput.nextElementSibling
console.log(emailError, countryError, postalCodeError, passwordError, confirmError)



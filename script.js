//form with 5 inputs (email, country, postal code, password, password confirmation), live inline validation, highlight field in red 
// when its invalid and show error mesage to guide user

const form = document.querySelector('#form')
const emailInput = form.elements.email
const countryInput  = form.elements.country
const postalCodeInput = form.elements.postalCode
const passwordInput = form.elements.password
const confirmInput = form.elements.confirmPassword

console.log(form,emailInput)

const emailError = emailInput.nextElementSibling
const countryError = countryInput.nextElementSibling
const postalCodeError=postalCodeInput.nextElementSibling
const passwordError = passwordInput.nextElementSibling
const confirmError = confirmInput.nextElementSibling

function validateEmail(email){
    if(email===""){
        return false
    }

    if(!email.includes("@")){
        return false
    }

    const parts = email.split("@");
    
    const domain = parts[1]
    if(!domain||!domain.includes(".")){
        return false
    }
    const domainParts = domain.split(".")
    const lastPart =domainParts[domainParts.length -1]
    if(lastPart.length<2){
        return false
    }
    return true;
}

emailInput.addEventListener("blur",(e)=>{
    const userEmail = e.target.value
    if(validateEmail(userEmail)===true){
        emailError.textContent="";
        emailInput.classList.add("valid")
        emailInput.classList.remove('invalid')
        
    } else{
        emailError.textContent="Please enter a valid email address"
        emailInput.classList.remove("valid")
        emailInput.classList.add("invalid")


}
})

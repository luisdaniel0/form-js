//form with 5 inputs (email, country, postal code, password, password confirmation), live inline validation, highlight field in red 
// when its invalid and show error mesage to guide user

const messageDiv = document.createElement('div')
const formGrid = document.querySelector('.form-grid')
messageDiv.className='form-message'
formGrid.appendChild(messageDiv)


const form = document.querySelector('#form')
const emailInput = form.elements.email
const countryInput  = form.elements.country
const postalCodeInput = form.elements.postalCode
const passwordInput = form.elements.password
const confirmInput = form.elements.confirmPassword


const emailError = emailInput.nextElementSibling
const countryError = countryInput.nextElementSibling
const postalCodeError=postalCodeInput.nextElementSibling
const passwordError = passwordInput.nextElementSibling
const confirmError = confirmInput.nextElementSibling
const submit = document.querySelector('.submit-btn')

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

function validateCountry(country){
    if(country === ""){
        return false
    }
    return /^[a-zA-Z\s]+$/.test(country)  // this already returns true/false
}

countryInput.addEventListener("blur",(e)=>{
    const userCountry = e.target.value
    if(validateCountry(userCountry)===true){
        countryError.textContent="";
        countryInput.classList.add("valid");
        countryInput.classList.remove("invalid");

    } else{
        countryError.textContent="Please enter a valid country";
        countryInput.classList.remove("valid");
        countryInput.classList.add("invalid")
    }
})

function validatePostalCode(postalCode){
    const allowedCharacters="0123456789abcdefghijklmnopqrstuvxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

    if(postalCode==="")
        return false

    if(postalCode.length < 3){
        return false
    }

    for(let char of postalCode){
        if(!allowedCharacters.includes(char)){
            return false;
        }
    }
    return true;
}

postalCodeInput.addEventListener("blur",(e)=>{
    const userPostalCode = e.target.value
    if(validatePostalCode(userPostalCode)===true){
        postalCodeError.textContent="";
        postalCodeInput.classList.add("valid")
        postalCodeInput.classList.remove("invalid")
    } else{
        postalCodeError.textContent="Please enter a valid postal code"
        postalCodeInput.classList.remove("valid")
        postalCodeInput.classList.add("invalid")
    }
})

function validatePassword(password){
    const specialChars = "!@#$%^&*()_+-=[]{}|;:,.<>?";

    if(password==="") return false;
    if(password.length < 7) return false;

    let hasUpper = false;
    let hasSpecial = false;
    let hasNumber = false;

    for(let char of password){
        if(char>= "A" && char<="Z"){
            hasUpper = true;
        }
        if(specialChars.includes(char)){
            hasSpecial = true
        }
        if(char>="0" && char <="9"){
            hasNumber = true;
        }
        if(hasUpper && hasSpecial && hasNumber){
            break
        }
    }

    return hasUpper && hasSpecial && hasNumber;

}

passwordInput.addEventListener("blur",(e)=>{
    const userPassword = e.target.value

    if(validatePassword(userPassword)=== true){
        passwordError.textContent="";
        passwordInput.classList.add("valid")
        passwordInput.classList.remove("invalid")
    } else{
        passwordError.textContent="Please enter a valid Password: 1 uppercase, 1 number, and 1 special character"
        passwordInput.classList.remove("valid")
        passwordInput.classList.add("invalid")
    }
})

confirmInput.addEventListener("blur",(e)=>{
    const confirmPassword = e.target.value
    const firstPassword = passwordInput.value

    if(confirmPassword === firstPassword){
        confirmError.textContent = "";
        confirmInput.classList.add('valid')
        confirmInput.classList.remove('invalid')
    } else{
        confirmError.textContent="Passwords do not match"
        confirmInput.classList.add("invalid")
        confirmInput.classList.remove('valid')
    }

})

form.addEventListener("submit",(e)=>{
    e.preventDefault()



    const isEmailValid = validateEmail(emailInput.value)
    const isCountryValid = validateCountry(countryInput.value)
    const isPostalCodeValid= validatePostalCode(postalCodeInput.value)
    const isPasswordValid = validatePassword(passwordInput.value)
    const isConfirmedValid = (confirmInput.value !== "" && confirmInput.value ===passwordInput.value)

    if(isEmailValid && isCountryValid && isPostalCodeValid && isPasswordValid && isConfirmedValid){
        messageDiv.textContent="Sucess! High Five!";
        messageDiv.className="form-message success";
        
        
    } else{
        messageDiv.textContent="Please correct all errors!"
        messageDiv.className="form-message error"
        
    }
})
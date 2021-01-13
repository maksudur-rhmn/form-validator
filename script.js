const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const confirmPassword = document.getElementById('confirm-password')

// Show input Error Message
function showError(input, message)
{
    const formControl = input.parentElement
    formControl.className = 'form-control error'
    const small = formControl.querySelector('small')
    small.innerText = message
}

// Show success outline 
function showSuccess(input)
{
    const formControl = input.parentElement
    formControl.className = 'form-control success'
}

// Check Email is invalid 
function checkEmail(input)
{
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input.value))
    {
        showSuccess(input)
    }
    else
    {
        showError(input, `Email is not valid`)
    }
}

// Check Required fields 
function checkRequired(inputArray)
{
   inputArray.forEach(function(input){
       if(input.value.trim() == '')
       {
           showError(input, `${getFieldName(input)} is required`)
       }
       else 
       {
           showSuccess(input)
       }
   })
}
// Get Field Name 
function getFieldName(input)
{
     return input.id.charAt(0).toUpperCase() + input.id.slice(1)
}

// Check input Length 
function checkLength(input, min, max)
{
    if(input.value.length < min)
    {
        showError(input, `${getFieldName(input)} must be atleast ${min} characters`)
    }
    else if(input.value.length > max)
    {
        showError(input, `${getFieldName(input)} must be less than ${max} characters`)
    }
    else 
    {
        showSuccess(input)
    }
  
}

// Check Password 
function checkPasswordMatch(inputOne, inputTwo)
{
    if(inputOne.value != inputTwo.value)
    {
        showError(inputTwo, 'Passwords do not match')
    }
    else 
    {
        showSuccess(inputTwo)
    }
}

// Event Listeners 
form.addEventListener('submit', function(event){
    event.preventDefault()

    checkRequired([username, email, password, confirmPassword])
    checkLength(username, 3, 15)
    checkLength(password, 6, 25)
    checkEmail(email)
    checkPasswordMatch(password, confirmPassword)
    
})


const form = document.querySelector('form')
const input = document.querySelector('input')
const error = document.querySelector('.errorMessage')


// input.addEventListener('blur', (event) => {
//   if(!event.target.validity.valid) {
// //     Handmatig message toevoegen
//     error.textContent = "dit veld is incorrect"
// //  werkt alleen op submit
//     // event.target.classList.add('input-error')
//     // error.classList.remove('error-hidden')
//     // event.target.setAttribute('aria-describedby', 'error-id')
//     // event.target.setCustomValidity('error')

//   } else {
//     // event.target.setCustomValidity('')
//     // error.textContent = ""
//     // event.target.classList.remove('input-error')
//     // error.classList.add('error-hidden')
//     // event.target.removeAttribute('aria-describedby')
//   }
// });

// input.addEventListener('submit', (event) => {
//   event.preventDefault()
// });

input.addEventListener('blur', (event) => {
    if (event.target.validity.patternMismatch) {
        error.textContent = "Zorg ervoor dat je de gegevens op de juiste manier in vult."
    } else if (event.target.validity.tooShort) {
        error.textContent = "Er zijn te weinig karakters ingevuld."
    } else if (event.target.validity.tooLong) {
        error.textContent = "Er zijn te veel karakters ingevuld."
    } 
});
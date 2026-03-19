const form = document.querySelector('form')
const inputs = document.querySelectorAll('input')


inputs.forEach((input) => {
  input.addEventListener('blur', (event) => {

    const errorId = 'err_' + input.id
    const error = document.getElementById(errorId)

    if (event.target.validity.patternMismatch) {
      error.textContent = "Zorg ervoor dat je de gegevens op de juiste manier invult."
      error.classList.remove('errorHidden')
      event.target.setAttribute('aria-describedby', errorId)

    } else if (event.target.validity.tooShort) {
      error.textContent = "Er zijn te weinig karakters ingevuld."
      error.classList.remove('errorHidden')
      event.target.setAttribute('aria-describedby', errorId)

    } else if (event.target.validity.tooLong) {
      error.textContent = "Er zijn te veel karakters ingevuld."
      error.classList.remove('errorHidden')
      event.target.setAttribute('aria-describedby', errorId)

    } else {
      error.textContent = ""
      error.classList.add('errorHidden')
      event.target.removeAttribute('aria-describedby')
    }

  })
})






// array.forEach((element)

// input.forEach()  {

// input.addEventListener('blur', (event) => {
//     if (event.target.validity.patternMismatch) {
//         error.textContent = "Zorg ervoor dat je de gegevens op de juiste manier in vult."
//         error.classList.remove('errorHidden')
//         event.target.setAttribute('aria-describedby', 'errorId')

//     } else if (event.target.validity.tooShort) {
//         error.textContent = "Er zijn te weinig karakters ingevuld."
//         error.classList.remove('errorHidden')
//         event.target.setAttribute('aria-describedby', 'errorId')

//     } else if (event.target.validity.tooLong) {
//         error.textContent = "Er zijn te veel karakters ingevuld."
//         error.classList.remove('errorHidden')
//         event.target.setAttribute('aria-describedby', 'errorId')

//     } else {
//         error.textContent = ""
//         error.classList.add('errorHidden')
//         event.target.removeAttribute('aria-describedby')

//     }
// })
// }

// const test = document.querySelectorAll
// const errorId = 'err' + input.id
// const error = document.querySelector('.errorMessage')
// const error1 = document.getElementById(errorId)

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

// err_xx_fristName
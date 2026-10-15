const form = document.querySelector('.footer-form')


form.addEventListener('submit', (event) => {
    event.preventDefault()
    const test1 = new FormData(form)
    const test2 = Object.fromEntries(test1.entries())
    console.log(test2)
})

const regest = document.querySelector('.reges')
const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')


regest.addEventListener('click', () => {
    regest.classList.add("active")
    modal.classList.add("modal-showed")
    overlay.classList.add("showed")

    
})

const tim = document.querySelector('.times')

tim.addEventListener('click', () => {
    regest.classList.remove("active")
    modal.classList.remove("modal-showed")
    overlay.classList.remove("showed")
})

const form2 = document.querySelector('.modal-form')
const pas = document.querySelector('.new-password')
const pass = document.querySelector('.password-repeated')



form2.addEventListener('submit', (event) => {
    if (pas.checkValidity() && pass.checkValidity()){
      event.preventDefault()
      const test3 = new FormData(form2)
      const test4 = Object.fromEntries(test3.entries())
      console.log(test4)
      
    } else  {
        alert ("У ваc несовподает пароль пароль!!!")

    }
})

const but = document.querySelector('.modal-button')

but.addEventListener('click', () => {
    regest.classList.remove("active")
    modal.classList.remove("modal-showed")
    overlay.classList.remove("showed")
})

const user = {
    form2,
    createdOn: new Date()
}
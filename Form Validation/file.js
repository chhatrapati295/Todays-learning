const form = document.querySelector('#form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const confirmPass = document.getElementById('confirm')

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    if(username.value === ''){
        const formControl = username.parentElement
        formControl.className = 'form-control failure'
    }
})
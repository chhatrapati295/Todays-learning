const API_KEY = 'jFgS8tteGD425f4oZfygQVaVnD6gt6GucN2yyz3xFek';

const box = document.querySelector('.box')
const loader = document.querySelector('.lds-roller')
const next = document.querySelector('.next')
const form = document.querySelector('form')
const input = document.querySelector('.input')

let count=6
async function getData(word){
    loader.style.display = 'inline-block'
    try{
        const url = await fetch( `https://api.unsplash.com/photos/random?client_id=${API_KEY}&count=${count}&query=${word}`)
        const data = await url.json()
        loader.style.display = 'none'
        console.log(data)
        sendData(data)
        next.style.display = 'block'
    }catch{
        err=>console.log(err)
    }
}
function setNext(){
    if(box.innerHTML === ''){
        next.style.display = 'none'
    }
}
function sendData(data){
    data?.map(item=>{
        const image = document.createElement('img')
        image.className = 'img'
        image.src = item?.urls?.regular
        box.appendChild(image)
    })
}

window.addEventListener('DOMContentLoaded',()=>{
    getData("car")
})
next.addEventListener('click',()=>{
    box.textContent = ''
    setNext()
    getData()
})
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    box.textContent = ''
    setNext()
    getData(input.value)
})
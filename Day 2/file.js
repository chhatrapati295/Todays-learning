const quote = document.querySelector('.quote')
const author = document.querySelector('.author')
const newQuote = document.querySelector('.btn2')

window.addEventListener('DOMContentLoaded',()=>{
    getQuoteData()
})
async function getQuoteData(){
    try{
        const url = await fetch('https://zenquotes.io/api/quotes')
        const json = await url.json()
        quote.textContent = json[Math.floor(Math.random()* json.length-1)].q
        author.textContent = json[Math.floor(Math.random()* json.length-1)].a
    }catch(err){
        console.log(err)
    }
}

newQuote.addEventListener('click',()=>{
    getQuoteData()
})
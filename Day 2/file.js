const QUOTE_URL = 'https://type.fit/api/quotes';

const quote = document.querySelector('.quote')
const author = document.querySelector('.author')
const nextBtn = document.querySelector('.next')
const twitterBtn = document.querySelector('.twitter')
const loader = document.querySelector('.img')

window.addEventListener('DOMContentLoaded',()=>{
    getQuoteData()
})

async function getQuoteData(){
    loader.style.display = 'block';
    const url = await fetch(QUOTE_URL)
    const json = await url.json()
    loader.style.display = 'none';
    console.log(json[Math.floor(Math.random()* json.length-1)])
    setQuoteData(json[Math.floor(Math.random()* json.length-1)])
}

function setQuoteData(item){
    quote.textContent = item.text
    author.textContent = item.author
}

nextBtn.addEventListener('click',()=>{
    quote.textContent = '';
    author.textContent = ''
    getQuoteData()
})

twitterBtn.addEventListener('click',()=>{
    makeTweet()
})

function makeTweet(){
    const tweetUrl = `https://twitter.com/intent/tweet?text=${quote.textContent} - ${author.textContent}`
    window.open(tweetUrl , '_blank')
}

let page = 1
// const API_URL = `https://api.unsplash.com/search/photos?client_id=BU-HozrQrJfb8tfFsDb1pkyhJDLMt0UEMtWYd9Bfgj8&page=${page}&query=`;
const container = document.querySelector('.container')
const form = document.querySelector('form')
const button = document.querySelector('button')
const result_box = document.querySelector('.result')
const input = document.querySelector('input')

window.addEventListener('DOMContentLoaded',()=>{
    const initText = document.createElement('span')
    initText.textContent = 'Get your favourite images here.'
    initText.className = 'initText'
    result_box.append(initText)
})

form.addEventListener('submit',async (e)=>{
    e.preventDefault()
    if(input.value === ''){
        return;
    }
    result_box.innerHTML = ''
    await getApiData(input.value)
    const nextBtn = document.createElement('button')
        nextBtn.textContent = 'Next Page'
        nextBtn.addEventListener('click',()=>{
            page = page + 1;
            getApiData(input.value)
        })
         result_box.after(nextBtn)
})

const getApiData = async (word)=>{
    try{
        const url = await axios.get(`https://api.unsplash.com/search/photos?client_id=BU-HozrQrJfb8tfFsDb1pkyhJDLMt0UEMtWYd9Bfgj8&page=${page}&query=${word}`)
        setApiData(url?.data?.results)

    }catch(err){
        console.log(err)
    }
}

function setApiData(data){
    data?.forEach((item)=>{
        const card = document.createElement('div')
        const img = document.createElement('img')
        img.src = item?.urls?.regular
        const a = document.createElement('a')
        a.href = item?.links?.self
        card.appendChild(img)
        card.appendChild(a)
        result_box.append(card)
    })
}
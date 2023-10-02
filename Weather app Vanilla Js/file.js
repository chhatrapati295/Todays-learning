const container = document.querySelector('.container')
const form = document.querySelector('form')
const input = document.querySelector('input')
const resultBox = document.querySelector('.result')

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    if(input.value === ''){
        return;
    }
    setTimeout(() => {
        getWeatherData(input.value)
    }, 3000);
})

const getWeatherData = async (city)=>{
    try{
        const url = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=53015ecfbd59c9ebf385bd744acd3563&units=metric`)
        console.log(url?.data)
        setWeatherData(url?.data)
        input.value = '';
    }catch(err){
        console.log(err)
        resultBox.innerHTML = '';
        const errLine = document.createElement('span')
        errLine.textContent = 'City not found please try again.'
        resultBox.appendChild(errLine)
        input.value = ''
    }
}
const setWeatherData = (data)=>{
    resultBox.innerHTML = '';
    const icon_img = document.createElement('img')
    icon_img.src = `https://openweathermap.org/img/w/${data?.weather[0]?.icon}.png`
    const temp = document.createElement('span')
    const city = document.createElement('h3')
    city.textContent = data?.name
    temp.textContent = 'Temperature : ' + data?.main?.temp + ' ℃'
    const feels = document.createElement('span')
    feels.textContent = 'Feels like : ' + data?.main?.feels_like + ' ℃'
    const winds = document.createElement('span')
    winds.textContent = 'Winds : ' + data?.wind?.speed + ' Kmph'
    const anotherCont = document.createElement('div')
    anotherCont.className = 'anotherCont'
    resultBox.appendChild(icon_img)
    resultBox.appendChild(city)
    anotherCont.appendChild(temp)
    anotherCont.appendChild(feels)
    anotherCont.appendChild(winds)
    resultBox.appendChild(anotherCont)
}
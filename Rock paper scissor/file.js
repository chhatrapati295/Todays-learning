const compGuess = document.querySelector('.compGuess')
const userGuess = document.querySelector('.userGuess')
const btns = document.querySelectorAll('button')
const result = document.querySelector('.result')

const choices = ['Rock','Paper','Scissor']
let computerGuess = ''
let humanGuess = ''

window.addEventListener('DOMContentLoaded',()=>{
    
})

function init(){
    computerGuess = choices[Math.floor(Math.random()*(choices.length-1))]
    console.log(computerGuess)
    compGuess.textContent = computerGuess
}

btns.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
        init()
        console.log(e.target.textContent)
        humanGuess = e.target.textContent
        userGuess.textContent = humanGuess
        checkWin()
    })
})

function checkWin(){
    if(humanGuess === 'Rock' && computerGuess === 'Scissor'){
        result.textContent = 'You won'
    }else if(humanGuess === 'Scissor' && computerGuess === 'Rock'){
        result.textContent = 'Computer won'
    }else if(humanGuess === 'Scissor' && computerGuess === 'Paper'){
        result.textContent = 'You won'
    }else if(humanGuess === 'Paper' && computerGuess === 'Scissor'){
        result.textContent = 'Computer won'
    }else if(humanGuess === 'Paper' && computerGuess === 'Rock'){
        result.textContent = 'You won'
    }else if(humanGuess === 'Rock' && computerGuess === 'Paper'){
        result.textContent = 'Computer won'
    }else{
        result.textContent = 'Draw'
    }
}

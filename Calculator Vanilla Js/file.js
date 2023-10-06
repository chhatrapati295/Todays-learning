const buttons = document.querySelectorAll('button')
const input = document.querySelector('input')
buttons.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
        if(btn.textContent === "="){
            input.value = eval(input.value)
            // console.log(total)
        }else if(btn.textContent === 'C'){
            input.value = ''
        }
        else{
            input.value += e.target.textContent
        }
    })
})
import React from 'react'

const Buttons = () => {
  return (
    <div className='my-2 flex gap-3'>
      <Button name='Filter' color='bg-blue-600 font-semibold' text='text-white ' />
      <Button name='Reset' color='bg-blue-200 font-semibold text-blue-800' />
      <Button name='Download' color='bg-blue-200 font-semibold text-blue-800'/>
      <Button name='Generate bank file' color='bg-blue-200 font-semibold text-blue-800'/>
      <Button name='Bulk process by RazorPay' color='bg-blue-200 font-semibold text-blue-800'/>
      <Button name='Bulk process by CashFree' color='bg-blue-200 font-semibold text-blue-800'/>
    </div>
  )
}
const Button = ({name , color,text})=>{
    return <button className={`${color} ${text} px-4 py-1 rounded outline-none`}>
        {name}
    </button>
}

export default Buttons

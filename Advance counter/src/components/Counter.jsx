import React, { useState } from 'react'

const Counter = () => {
    const[num,setNum] = useState(0)
    const[multipleNum ,setMultipleNum] = useState(1)
    const now = new Date('12 June 2023')
    const currentDay = (now.getDate())
  return (
    <div className='counter'>
      <div className="buttons">
        <span>Count : </span>
        <button className="de" onClick={()=>setNum((num)=>num - 1)}>-</button>
        <span className="count">{num}</span>
        <button className="in" onClick={()=>setNum((num)=>num + 1)}>+</button>
      </div>
      <div className="inpDiv">
        <span>Count in multiple of : </span>
      <input className="multiple" type='range' min='0' max='10' autoFocus value={multipleNum} onChange={(e)=>{setMultipleNum(e.target.value)
      setNum(0)
    }}/><span>{multipleNum}</span>
    </div>
    <div className='inpDiv'>
    <span>Result : </span>
      <p className="head">{currentDay + (num * multipleNum) }</p>
    </div>
    </div>
  )
}

export default Counter

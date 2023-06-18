import React, { useState } from 'react'

const Forms = ({onHandleItems}) => {
    const[select , setSelect] = useState(1)
    const[inp,setInp] = useState()
    // const[data,setData] = useState([])
    function handleSubmit(e){
        e.preventDefault()
        const item = {quantity : select , desc : inp , packed : false ,id : Math.floor(Math.random()*1999)}
        console.log(item)
        onHandleItems(item)
        setInp('')
        setSelect(1)
    }
    // function addItem(item){
    //     setData(item)
    // }
  return (
    <form className='forms' onSubmit={handleSubmit}>
      <select name="" id="quantity" value={select} onChange={(e)=>setSelect(e.target.value)}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
      <input type="text" placeholder='Add items here' value={inp} onChange={(e)=>setInp(e.target.value)} autoFocus id="input" />
      <button className="addBtn">Add</button>
    </form>
  )
}

export default Forms

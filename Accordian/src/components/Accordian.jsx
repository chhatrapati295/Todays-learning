import React, { useState } from 'react'

const Accordian = () => {
  return (
    <div className='accordian'>
      <Card nums={1}/>
      <Card nums={2}/>
      <Card nums={3}/>
    </div>
  )
}

const Card = ({nums})=>{
    const[isText,setIsText] = useState(false)
    return(
        <div className={isText ? 'card active' : 'card'} >
            <div className={isText ? 'row1 gr' : 'row1'}>
                <div className="row1_main">
                <span className="num">{nums}</span>
                <span className="head">What is you name ?</span>
                </div>
                <span className="icon" onClick={()=>setIsText(!isText)}>{isText ? '-' : '+'}</span>
            </div>
            {isText && <p className="text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat in, ullam beatae temporibus qui laborum ea a molestias veniam provident?</p>}
        </div>
    )
}

export default Accordian

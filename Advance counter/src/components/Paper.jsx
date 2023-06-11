import React, { useState } from 'react'

const data = [
    {
        id : 1,
        que : 'What is your name ?',
        ans : "Chhatrapati Chauhan"
    },
    {
        id : 2,
        que : 'How old are you ?',
        ans : "22"
    },
    {
        id : 3,
        que : 'What is your favorite sweet ?',
        ans : "Gulab jamun"
    },
]

const Paper = () => {
    return (
        <div className='paper'>
      {data?.map(item=>{
          return <Card {...item} key={item.id} />
        })}
    </div>
  )
}
const Card = ({que,ans})=>{
    const[seeQue,setSeeQue] = useState(true)
    const[seeAns,setSeeAns] = useState(false)
    return (
      <div className="card" style={{cursor : 'pointer' , background : seeAns && 'red'}} onClick={()=>{setSeeQue(!seeQue)
      setSeeAns(!seeAns)}}>
        {seeQue && <p className="question">{que}</p>}
        {seeAns && <p className="answer">{ans}</p>}
      </div>
    );
}

export default Paper

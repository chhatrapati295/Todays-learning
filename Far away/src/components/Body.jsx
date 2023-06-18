import React from 'react'
// const data = [
//     {
//         id : 1 , quantity : 2 , desc : 'Shirts' , packed : false
//     },
//     {
//         id : 2 , quantity : 1 , desc : 'Charger' , packed : false
//     },
//     {
//         id : 3 , quantity : 3 , desc : 'Pants' , packed : false
//     },
// ]

const Body = ({data , onDeleteItem , onToggle}) => {
  return (
    <div className='body'>
      <ul className="lists">
        {data?.map(item=>{
            return <li className="list">
              <input type="checkbox" name="" onClick={()=>onToggle(item.id)} id="check" value={item.packed} />
              <span style={item.packed ? {textDecoration : 'line-through' } : {}}>
                {item.quantity} {item.desc} 
              </span>
                <button onClick={()=>onDeleteItem(item.id)}>❌</button>
                </li>
        })}
      </ul>
    </div>
  )
}

export default Body

import React from 'react'

const Footer = ({data}) => {
  return (
    <div className='footer'>
      <span>You have {data.length} items in your bag.</span>
    </div>
  )
}

export default Footer

import React from 'react'

const Button = ({btnText,className}) => {
  return (
   <>
   <button className={`bg-amber-500 px-8 py-5 text-white ${className}`}>{btnText}</button>
   </>
  )
}

export default Button
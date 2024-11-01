import React from 'react'

const Button = ({text,className,}) => {
  return (
    <button className={`${className ? className :"py-2 px-4 text-white    rounded  bg-secondary text-lg hover:bg-secondaryHover transition-all my-2 "}`}>{text} </button>
  )
}

export default Button

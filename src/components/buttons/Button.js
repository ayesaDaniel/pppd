import React from 'react'

const Button = ({text,style}) => {
  return (
    <div>
         <button className={style}>
  {text}
</button>

    </div>
  )
}

export default Button
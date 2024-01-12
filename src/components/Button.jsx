import React from 'react'

const Button = ({ styles }) =>  (
  
    <button type='button' className={`py-4 px-6 bg-blue-gradient rounded-[10px] font-poppins font-medium text-[18px] text-primary outline-none ${styles}`}>
      Commencer
    </button>
  )

export default Button

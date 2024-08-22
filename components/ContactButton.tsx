import React from 'react'

type ButtonProps = {
    type: 'button';
    title: string;
    icon?: string;
    variant: 'btn_dark_green'
}

const ContactButton = ({type, title, icon, variant}: ButtonProps) => {
  return (
    <button
    className={`block flexCenter rounded-full  ${variant}`}
     type={type}
    >
    <label className='cursor-pointer'>{title}</label></button>
  )
}

export default ContactButton

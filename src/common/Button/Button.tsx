import React from 'react'

interface ButtonProps {
  children: JSX.Element | JSX.Element[]
  classname?: string
  type?: 'normal' | 'download' | 'link'
  onClick?: () => any
  text?: string
}

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  const { type = 'normal', classname, onClick, children, text } = props
  return (
    <button className={classname} onClick={onClick}>
      {children && children}
      {text && text}
    </button>
  )
}

export default Button

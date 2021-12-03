import React from 'react'
import Tips from '../../utils/tips'

interface IconButtonProps {
  type: 'preview' | 'fullscreen' | 'file' | 'left' | 'right'
  children: JSX.Element | JSX.Element[]
  classname?: string
  onClick?: () => any
}

const IconButton: React.FC<IconButtonProps> = (props: IconButtonProps) => {
  const { type, children, classname, onClick } = props
  return (
    <button className={classname} onClick={onClick} title={Tips[type]}>
      {children}
    </button>
  )
}
export default IconButton

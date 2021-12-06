import React from 'react'
import cn from 'classnames'

interface TextProps {
  text?: string
  fontVariant?: 'regular' | 'medium' | 'bold'
  fontSize?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl'
  className?: string
}

const Text: React.FC<TextProps> = (props: TextProps) => {
  const { text, fontVariant = 'regular', fontSize = 'text-sm', className = '' } = props
  const classes = cn({
    'text-xs': fontSize === 'xs',
    'text-sm': fontSize === 'sm',
    'text-base': fontSize === 'base',
    'text-lg': fontSize === 'lg',
    'text-xl': fontSize === 'xl',
    'text-2xl': fontSize === '2xl',
    'text-3xl': fontSize === '3xl',
    'text-4xl': fontSize === '4xl',
    'cfont-regular': fontVariant === 'regular',
    'cfont-medium': fontVariant === 'medium',
    'cfont-bold': fontVariant === 'bold'
  })
  return <p className={`${classes} ${className}`}>{text}</p>
}
export default Text

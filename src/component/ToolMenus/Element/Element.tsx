import React from 'react'
import { Text } from 'common'

interface ElementProps {
  children?: JSX.Element | JSX.Element[]
  text?: string
  className?: string
}

const Element: React.FC<ElementProps> = (props: ElementProps) => {
  const { children, text, className } = props
  return (
    <div
      className={`w-sm border-solid border border-grs rounded-sm cursor-pointer select-none shadow-md ${className} hover:bg-cl hover:shadow-xl`}>
      <div className={'h-sm w-md mx-auto my-2'}>{children}</div>
      <Text text={text} className={'text-center pb-2'} />
    </div>
  )
}
export default Element
